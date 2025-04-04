import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { WalletTapService } from './wallet.tap';
import { WalletsModule } from '../wallets/wallets.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    WalletsModule
  ],
  providers: [WalletTapService],
})
export class CronTapModule {} 