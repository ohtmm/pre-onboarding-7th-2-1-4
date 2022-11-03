import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import Router from "./routes/Router";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
