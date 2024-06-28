import getTransactions from '../api/flow';

    const transactions = await getTransactions(date, start, limit);

export default function transaccion() {
  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>{transaction.description}</div>
      ))}
    </div>
  )
}