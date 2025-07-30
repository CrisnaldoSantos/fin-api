import { ITransactionRepository } from '../../repositories/ITransactionRepository';

export class GetTransactionsUseCase {
  constructor(
    private transactionRepository: ITransactionRepository
  ) {}

  async execute() {
    const [transactions, balance] = await Promise.all([
      this.transactionRepository.findAll(),
      this.transactionRepository.getBalance()
    ]);

    return {
      transactions,
      balance
    };
  }
}
