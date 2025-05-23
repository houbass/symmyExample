import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(_jsx(QueryClientProvider, { client: queryClient, children: _jsx(App, {}) }));
