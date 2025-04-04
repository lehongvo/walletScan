import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { CronjobModule } from './cronjob/cronjob.module';
import { CronCheckModule } from './croncheck/crontap.module';
import { CronTapModule } from './crontap/crontap.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.getOrThrow<string>('MONGODB_URI'),
        retryAttempts: 3,
        retryDelay: 3000,
        autoIndex: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    WalletsModule,
    CronjobModule,
    CronCheckModule,
    CronTapModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
