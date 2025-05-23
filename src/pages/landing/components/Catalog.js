import { jsx as _jsx } from "react/jsx-runtime";
import { Row, Col } from "antd";
// Components
import ProductCard from "./ProductCard";
function Catalog({ data }) {
    return (_jsx(Row, { style: {
            justifyContent: "center",
            padding: "16px 8px",
        }, children: _jsx(Row, { style: {
                width: "100%",
            }, gutter: [16, 16], children: data?.map((item, index) => (_jsx(Col, { xs: 24, lg: 8, xl: 6, children: _jsx(ProductCard, { index: index, item: item }) }, index))) }) }));
}
export default Catalog;
