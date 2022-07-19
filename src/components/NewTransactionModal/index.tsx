import * as Styled from './styles';
import Modal from 'react-modal';
import closeLogo from '../../assets/close.svg';
import incomeLogo from '../../assets/income.svg';
import outcomeLogo from '../../assets/outcome.svg';
import { INewTransactionModalProps } from './types/INewTransactionModalProps';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

export const NewTransactionModal = ({ isOpen, onRequestClose }: INewTransactionModalProps) => {
  const { createTransaction } = useTransactions();
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    const transaction = {
      type,
      title,
      amount,
      category,
    };
    await createTransaction(transaction);
    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeLogo} alt="closeLogo" />
      </button>

      <Styled.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input placeholder="Titulo" value={title} onChange={(event) => setTitle(event.target.value)} />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <Styled.TransactionTypeContainer>
          <Styled.RadioBox
            type="button"
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeLogo} alt="income" />
            <span>Entrada</span>
          </Styled.RadioBox>

          <Styled.RadioBox
            type="button"
            onClick={() => {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeLogo} alt="outcome" />
            <span>Saída</span>
          </Styled.RadioBox>
        </Styled.TransactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange={(event) => setCategory(event.target.value)} />

        <button type="submit">Cadastrar</button>
      </Styled.Container>
    </Modal>
  );
};
