import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SeachForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactiosTable,
  TrasactionsContainer,
} from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContaxt";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";

export function Transactions() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions;
  });

  return (
    <div>
      <Header />
      <Summary />

      <TrasactionsContainer>
        <SeachForm />
        <TransactiosTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactiosTable>
      </TrasactionsContainer>
    </div>
  );
}
