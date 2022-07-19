import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

createServer({
  models: {
    transactions: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Recebimento de vale alimentação',
          type: 'deposit',
          category: 'casa',
          amount: 500,
          createdAt: new Date('2022-07-06 09:00:00'),
        },
        {
          id: 2,
          title: 'Compras do mês',
          type: 'withdraw',
          category: 'casa',
          amount: 450,
          createdAt: new Date('2022-07-07 09:00:00'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transactions');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transactions', data);
    });
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
