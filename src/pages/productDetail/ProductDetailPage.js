import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router";
// Components
import PageLayout from "../../components/PageLayout";
import Progress from "../../components/Progress";
import DetailCard from "./components/DetailCard";
function ProductDetailPage({ data, isError }) {
    const navigate = useNavigate();
    // Get product name from URL
    const params = useParams();
    const thisProductName = params.productName;
    // Find product name
    const thisData = useMemo(() => {
        if (data && thisProductName) {
            return data.find((item) => item.title.includes(thisProductName));
        }
    }, [data, thisProductName]);
    // If product name dont exist redirect to main page
    useEffect(() => {
        if (data && !thisData) {
            navigate("/");
        }
    }, [data, thisData]);
    return (_jsx(PageLayout, { children: _jsx(Progress, { children: _jsx(DetailCard, { data: thisData }), isError: isError, data: data }) }));
}
export default ProductDetailPage;
