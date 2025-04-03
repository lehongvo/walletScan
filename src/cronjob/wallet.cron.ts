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
      try {
        await checkAllWallets(this.walletsService);
      } catch (error) {
        console.error('Error in wallet scanning:', error);
      }
    }, 100); // Run every 200ms
  }
} 