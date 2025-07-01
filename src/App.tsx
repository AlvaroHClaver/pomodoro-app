import "./App.css";
import { Home } from "./pages/Home";
import { ThemeProvider } from "@emotion/react";
import { redTheme } from "./themes/themes";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <Provider>
      <ThemeProvider theme={redTheme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
