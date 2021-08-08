import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import RedirectHandler from "./RedirectHandler";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
require('dotenv').config()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true
    },
  },
});


//REDGATE SQL PROMPT
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RedirectHandler />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;