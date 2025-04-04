import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { WalletCheckService } from './wallet.tap';
import { WalletsModule } from '../wallets/wallets.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    WalletsModule
  ],
  providers: [WalletCheckService],
})
export class CronCheckModule {} 