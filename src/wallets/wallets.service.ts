import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from '../schemas/wallet.schema';

@Injectable()
export class WalletsService {
  constructor(@InjectModel(Wallet.name) private walletModel: Model<Wallet>) {}

  async create(createWalletDto: Partial<Wallet>): Promise<Wallet> {
    const createdWallet = new this.walletModel(createWalletDto);
    return createdWallet.save();
  }

  async findAll(): Promise<Wallet[]> {
    return this.walletModel.find().exec();
  }

  async findOne(id: string): Promise<Wallet> {
    const wallet = await this.walletModel.findById(id).exec();
    if (!wallet) {
      throw new NotFoundException(`Wallet with ID "${id}" not found`);
    }
    return wallet;
  }

  async update(id: string, updateWalletDto: Partial<Wallet>): Promise<Wallet> {
    const updatedWallet = await this.walletModel
      .findByIdAndUpdate(id, updateWalletDto, { new: true })
      .exec();
    if (!updatedWallet) {
      throw new NotFoundException(`Wallet with ID "${id}" not found`);
    }
    return updatedWallet;
  }

  async updateBalance(id: string, balance: number): Promise<Wallet> {
    const updatedWallet = await this.walletModel
      .findByIdAndUpdate(id, { balance }, { new: true })
      .exec();
    if (!updatedWallet) {
      throw new NotFoundException(`Wallet with ID "${id}" not found`);
    }
    return updatedWallet;
  }

  async remove(id: string): Promise<Wallet> {
    const deletedWallet = await this.walletModel.findByIdAndDelete(id).exec();
    if (!deletedWallet) {
      throw new NotFoundException(`Wallet with ID "${id}" not found`);
    }
    return deletedWallet;
  }
} 