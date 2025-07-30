import { Transaction } from "../entities/Transaction";

export interface ITransactionRepository {
  create(_transaction: Transaction): Promise<void>;
  findAll(): Promise<Transaction[]>;
  findById(_id: string): Promise<Transaction | null>;
  getBalance(): Promise<{ income: number; outcome: number; total: number }>;
}
