import { knex } from '../../infrastructure/database/knex';
import { KnexTransactionRepository } from '../../infrastructure/database/repositories/KnexTransactionRepository';
import { CreateTransactionUseCase } from '../../domain/usecases/CreateTransaction/CreateTransactionUseCase';
import { GetTransactionsUseCase } from '../../domain/usecases/GetTransactions/GetTransactionsUseCase';
import { GetBalanceUseCase } from '../../domain/usecases/GetBalance/GetBalanceUseCase';
import { TransactionController } from '../../infrastructure/http/controllers/TransactionController';

// Repositories
const transactionRepository = new KnexTransactionRepository(knex);

// Use Cases
const createTransactionUseCase = new CreateTransactionUseCase(transactionRepository);
const getTransactionsUseCase = new GetTransactionsUseCase(transactionRepository);
const getBalanceUseCase = new GetBalanceUseCase(transactionRepository);

// Controllers
const transactionController = new TransactionController(
  createTransactionUseCase,
  getTransactionsUseCase,
  getBalanceUseCase
);

export { transactionController };
