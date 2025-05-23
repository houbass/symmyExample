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

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage data={data} isError={error} />} />
        <Route
          path="/product-detail/:productName"
          element={<ProductDetailPage data={data} isError={error} />}
        />
        {/* Catch-all route redirects to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
