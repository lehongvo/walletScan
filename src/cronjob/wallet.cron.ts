import { Injectable, OnModuleInit } from '@nestjs/common';
import { checkAllWallets } from '../blockchain';
import { WalletsService } from '../wallets/wallets.service';

@Injectable()
export class WalletCronService implements OnModuleInit {
  constructor(private readonly walletsService: WalletsService) {}

  onModuleInit() {
    this.startScanning();
  }

  private startScanning() {
    setInterval(async () => {
      console.log(`Cron at ${new Date().toISOString()}...`);
      try {
        await Promise.all([
          checkAllWallets(this.walletsService),
          checkAllWallets(this.walletsService),
          checkAllWallets(this.walletsService),
          checkAllWallets(this.walletsService),
        ]);
      } catch (error) {
        console.error('Error in wallet scanning:', error);
      }
    }, 0); // Run every 200ms
  }
}
