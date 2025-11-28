import { AppNavigator } from "./src/navigation";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/theme/theme";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
}
