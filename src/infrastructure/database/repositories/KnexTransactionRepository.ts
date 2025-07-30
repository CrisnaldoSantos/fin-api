import { Knex } from 'knex';
import { Transaction } from '../../../domain/entities/Transaction';
import { ITransactionRepository } from '../../../domain/repositories/ITransactionRepository';

export class KnexTransactionRepository implements ITransactionRepository {
  constructor(private knex: Knex) {}

  async create(transaction: Transaction): Promise<void> {
    await this.knex('transactions').insert({
      id: transaction.id,
      title: transaction.title,
      amount: transaction.amount,
      created_at: transaction.createdAt,
    });
  }

  async findAll(): Promise<Transaction[]> {
    const rows = await this.knex('transactions').select('*').orderBy('created_at', 'desc');
    
    return rows.map(row => new Transaction({
      id: row.id,
      title: row.title,
      amount: Number(row.amount),
      createdAt: new Date(row.created_at),
    }));
  }

  async findById(id: string): Promise<Transaction | null> {
    const row = await this.knex('transactions').where('id', id).first();
    
    if (!row) return null;

    return new Transaction({
      id: row.id,
      title: row.title,
      amount: Number(row.amount),
      createdAt: new Date(row.created_at),
    });
  }

  async getBalance(): Promise<{ income: number; outcome: number; total: number }> {
    const result = await this.knex('transactions')
      .select(
        this.knex.raw('SUM(CASE WHEN amount > 0 THEN amount ELSE 0 END) as income'),
        this.knex.raw('SUM(CASE WHEN amount < 0 THEN amount ELSE 0 END) as outcome'),
        this.knex.raw('SUM(amount) as total')
      )
      .first();

    return {
      income: Number(result.income) || 0,
      outcome: Math.abs(Number(result.outcome)) || 0,
      total: Number(result.total) || 0,
    };
  }
}
