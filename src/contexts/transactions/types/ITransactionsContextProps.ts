/* eslint-disable no-unused-vars */
import { ICreateTransaction } from './ICreateTransaction';

export interface ITransactions {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

export interface ITransactionsContextProps {
  transactions: ITransactions[];
  createTransaction: (transaction: ICreateTransaction) => Promise<void>;
}
