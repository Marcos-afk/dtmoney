import logo from '../../assets/logo.svg';
import * as Styled from './styles';
import { IHeaderProps } from './types/IHeaderProps';

export const Header = ({ onOPenNewTransactionModal }: IHeaderProps) => {
  return (
    <Styled.Container>
      <Styled.Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onOPenNewTransactionModal}>
          Nova transação
        </button>
      </Styled.Content>
    </Styled.Container>
  );
};
