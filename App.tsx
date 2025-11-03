import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/theme/theme";
import { TemporaryScreen } from "./src/screens/TemporaryScreen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TemporaryScreen />
    </ThemeProvider>
  );
}
