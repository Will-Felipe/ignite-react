import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaut";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { Summary } from "./components/Summary";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
      <Summary />
    </ThemeProvider>
  );
}
