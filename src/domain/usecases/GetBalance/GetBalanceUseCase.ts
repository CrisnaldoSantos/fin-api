import { ITransactionRepository } from '../../repositories/ITransactionRepository';

export class GetBalanceUseCase {
  constructor(
    private transactionRepository: ITransactionRepository
  ) {}

  async execute() {
    return await this.transactionRepository.getBalance();
  }
}
