import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SeachForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactiosTable,
  TrasactionsContainer,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TrasactionsContainer>
        <SeachForm />
        <TransactiosTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/09/2024</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 48,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/09/2024</td>
            </tr>
          </tbody>
        </TransactiosTable>
      </TrasactionsContainer>
    </div>
  );
}
