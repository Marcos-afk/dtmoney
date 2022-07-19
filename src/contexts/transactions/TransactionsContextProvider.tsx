import React, { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { TransactionsContext } from './TransactionsContext';
import { ICreateTransaction } from './types/ICreateTransaction';
import { ITransactions } from './types/ITransactionsContextProps';

export interface IChildren {
  children: React.ReactNode;
}
export const TransactionsContextProvider = ({ children }: IChildren) => {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  useEffect(() => {
    const loadData = async () => {
      const { data } = await api.get('/transactions');
      setTransactions(data.transactions);
    };

    loadData();
  }, []);

  const createTransaction = async (transaction: ICreateTransaction) => {
    const { data } = await api.post('/transactions', {
      ...transaction,
      createdAt: new Date(),
    });

    setTransactions([...transactions, data.transactions]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>{children}</TransactionsContext.Provider>
  );
};
