import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Wallet, WalletSchema } from '../schemas/wallet.schema';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { WalletTapService } from '../crontap/wallet.tap';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Wallet.name, schema: WalletSchema }])
  ],
  providers: [WalletsService, WalletTapService],
  controllers: [WalletsController],
  exports: [WalletsService]
})
export class WalletsModule {} 