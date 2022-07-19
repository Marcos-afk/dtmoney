import { createContext } from 'react';
import { ITransactionsContextProps } from './types/ITransactionsContextProps';

export const TransactionsContext = createContext<ITransactionsContextProps>({} as ITransactionsContextProps);
