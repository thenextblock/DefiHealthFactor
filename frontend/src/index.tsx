import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context/Provider";
import { store } from "./app/store";
import { Provider } from "react-redux";

import "./index.css";
import "./globals.css";

import '@mantine/core/styles.css';

import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AppProvider>
      <Provider store={store}>
        <MantineProvider>
          <Notifications position="top-center" />
          <App />
        </MantineProvider>
      </Provider>
    </AppProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
