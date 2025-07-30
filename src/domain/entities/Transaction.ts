export class Transaction {
  public readonly id: string;
  public readonly title: string;
  public readonly amount: number;
  public readonly createdAt: Date;

  constructor(props: {
    id: string;
    title: string;
    amount: number;
    createdAt?: Date;
  }) {
    this.id = props.id;
    this.title = props.title;
    this.amount = props.amount;
    this.createdAt = props.createdAt || new Date();

    this.validate();
  }

  private validate(): void {
    if (!this.title || this.title.trim().length === 0) {
      throw new Error('Title is required');
    }

    if (this.amount === 0) {
      throw new Error('Amount cannot be zero');
    }
  }

  public isCredit(): boolean {
    return this.amount > 0;
  }

  public isDebit(): boolean {
    return this.amount < 0;
  }

  public toJSON() {
    return {
      id: this.id,
      title: this.title,
      amount: this.amount,
      createdAt: this.createdAt,
    };
  }
}
