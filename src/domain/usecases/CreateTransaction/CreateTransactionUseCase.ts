import { Transaction } from "../../entities/Transaction";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";
import { CreateTransactionDTO } from "../../../application/dtos/CreateTransactionDTO";
import { randomUUID } from "crypto";

export class CreateTransactionUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(data: CreateTransactionDTO): Promise<Transaction> {
    const transaction = new Transaction({
      id: randomUUID(),
      title: data.title,
      amount: data.amount,
    });

    await this.transactionRepository.create(transaction);

    return transaction;
  }
}
