import { Summary } from '../Summary';
import { TransactionTable } from '../TransactionTable';
import * as Styled from './styles';

export const Dashboard = () => {
  return (
    <Styled.Container>
      <Summary />
      <TransactionTable />
    </Styled.Container>
  );
};
