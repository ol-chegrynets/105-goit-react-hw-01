import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <section>
      <h2>Task Third</h2>
      <table className={css.table}>
        <thead className={css.tableHead}>
          <tr className={css.tableHeadRow}>
            <th className={css.tableHeadTitle}>Type</th>
            <th className={css.tableHeadTitle}>Amount</th>
            <th className={css.tableHeadTitle}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr className={css.tableRow} key={id}>
                <td className={css.tableColumn}>{type}</td>
                <td className={css.tableColumn}>{amount}</td>
                <td className={css.tableColumn}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TransactionHistory;
