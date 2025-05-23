import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router";
import { Card, Row, Typography } from "antd";
function ProductCard({ index, item }) {
    const navigate = useNavigate();
    return (_jsx(Card, { hoverable: true, title: _jsx("p", { title: item.title, style: {
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
            }, children: item.title }), onClick: () => navigate("/product-detail/" + item.title), cover: _jsx(Row, { style: {
                display: "flex",
                justifyContent: "center",
                padding: "16px",
            }, children: _jsx("img", { loading: "lazy", alt: item.title, src: item.image, style: { height: "150px", width: "auto" } }) }), children: _jsxs(Row, { style: {
                justifyContent: "space-between",
            }, children: [_jsx(Typography, { children: item.price + " $" }), _jsx(Link, { to: "/product-detail/" + item.title, children: "Detail" })] }) }, index + item.title));
}
export default ProductCard;
