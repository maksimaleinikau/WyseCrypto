import { ThemeProvider } from "@shopify/restyle";
import { Theme } from "./src/theme/theme";
import { TemporaryScreen } from "./src/screens/TemporaryScreen";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <TemporaryScreen />
    </ThemeProvider>
  );
}
