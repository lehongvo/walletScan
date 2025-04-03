import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { WalletCronService } from './wallet.cron';
import { WalletsModule } from '../wallets/wallets.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    WalletsModule
  ],
  providers: [WalletCronService],
})
export class CronjobModule {} 