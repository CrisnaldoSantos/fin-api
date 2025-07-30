import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateTransactionUseCase } from '../../../domain/usecases/CreateTransaction/CreateTransactionUseCase';
import { GetTransactionsUseCase } from '../../../domain/usecases/GetTransactions/GetTransactionsUseCase';
import { GetBalanceUseCase } from '../../../domain/usecases/GetBalance/GetBalanceUseCase';

interface CreateTransactionBody {
  title: string;
  amount: number;
}

export class TransactionController {
  constructor(
    private createTransactionUseCase: CreateTransactionUseCase,
    private getTransactionsUseCase: GetTransactionsUseCase,
    private getBalanceUseCase: GetBalanceUseCase
  ) {}

  async create(
    request: FastifyRequest<{ Body: CreateTransactionBody }>, 
    reply: FastifyReply
  ) {
    const { title, amount } = request.body;

    const transaction = await this.createTransactionUseCase.execute({
      title,
      amount,
    });

    return reply.status(201).send(transaction.toJSON());
  }

  async index(request: FastifyRequest, reply: FastifyReply) {
    const result = await this.getTransactionsUseCase.execute();
    
    return reply.send({
      transactions: result.transactions.map(t => t.toJSON()),
      balance: result.balance
    });
  }

  async getBalance(request: FastifyRequest, reply: FastifyReply) {
    const balance = await this.getBalanceUseCase.execute();
    return reply.send(balance);
  }
}
