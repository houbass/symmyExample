import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
// Utils
import { fetchPosts } from "./global/utils";
// Components
import NavBar from "./components/NavBar";
// Pages
import LandingPage from "./pages/landing/LandingPage";
import ProductDetailPage from "./pages/productDetail/ProductDetailPage";
function App() {
    // fetch data from API
    const { data, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });
    return (_jsxs(BrowserRouter, { children: [_jsx(NavBar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LandingPage, { data: data, isError: error }) }), _jsx(Route, { path: "/product-detail/:productName", element: _jsx(ProductDetailPage, { data: data, isError: error }) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] })] }));
}
export default App;
