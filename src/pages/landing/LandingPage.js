import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { Row, Col } from "antd";
// Components
import PageLayout from "../../components/PageLayout";
import SearchInput from "../../components/SearchInput";
import Catalog from "./components/Catalog";
import Progress from "../../components/Progress";
function LandingPage({ data, isError }) {
    // Write and get search params to and from URL
    const [searchParams, setSearchParams] = useSearchParams({
        search: "",
    });
    const searchValues = searchParams.get("search") || "";
    // Filter data when searching
    const filteredData = useMemo(() => {
        if (data && searchValues.length > 0) {
            return data.filter((item) => item.title.toLowerCase().includes(searchValues.toLowerCase()));
        }
        else {
            return data;
        }
    }, [searchValues, data]);
    // Set search params to URL
    function searching(value) {
        setSearchParams((prev) => {
            prev.set("search", value);
            return prev;
        });
    }
    // Set search params
    function deleteSearch() {
        setSearchParams((prev) => {
            prev.set("search", "");
            return prev;
        });
    }
    return (_jsxs(PageLayout, { children: [_jsx(Row, { align: "middle", justify: "space-between", style: { background: "black", padding: "30px" }, children: _jsx(Col, { style: {
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                    }, children: _jsx(SearchInput, { searchValues: searchValues, deleteSearch: deleteSearch, searching: searching }) }) }), _jsx(Progress, { children: _jsx(Catalog, { data: filteredData }), isError: isError, data: filteredData })] }));
}
export default LandingPage;
