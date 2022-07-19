import { useContext } from 'react';
import { TransactionsContext } from '../contexts/transactions/TransactionsContext';

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
};
