import React, {useState, useEffect} from 'react';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import api from '../../services/api';

import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';

import {Container, CardContainer, Card, TableContainer} from './styles';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: {title: string};
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await api.get('/transactions').then(res => {
        return res.data;
      });

      const dataTransactions = response.transactions;
      const transactiosFormatted = dataTransactions.map((transaction: Transaction) => {
        return {
          ...transaction,
          formattedValue: formatValue(transaction.value, transaction.type),
          formattedDate: new Date(transaction.created_at).toLocaleDateString('pt-br'),
        };
      });

      setTransactions(transactiosFormatted);

      const balanceFormatted = {
        income: formatValue(response.balance.income, 'income'),
        outcome: formatValue(response.balance.outcome, 'outcome'),
        total: formatValue(response.balance.total, 'total'),
      };

      setBalance(balanceFormatted);
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1 data-testid="balance-income">{balance.income}</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">{balance.outcome}</h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">{balance.total}</h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(transaction => {
                return (
                  <tr key={transaction.id}>
                    <td key={transaction.title} className="title">
                      {transaction.title}
                    </td>
                    <td
                      key={transaction.formattedValue}
                      className={transaction.type === 'income' ? 'income' : 'outcome'}
                    >
                      {transaction.formattedValue}
                    </td>
                    <td key={transaction.category.title}>{transaction.category.title}</td>
                    <td>{transaction.formattedDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
