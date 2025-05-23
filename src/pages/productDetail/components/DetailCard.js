import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router";
import { Col, Row, Card, Typography, Button } from "antd";
const { Meta } = Card;
import { CaretLeftOutlined } from "@ant-design/icons";
function DetailCard({ data }) {
    const navigate = useNavigate();
    if (!data)
        return;
    return (_jsxs(Col, { children: [_jsx(Row, { style: { paddingTop: "16px", paddingLeft: "50px" }, children: _jsx(Button, { type: "default", icon: _jsx(CaretLeftOutlined, {}), onClick: () => navigate("/"), children: "Back to catalog" }) }), _jsx(Row, { style: { padding: "16px", justifyContent: "center" }, children: _jsx(Card, { style: { width: "100%", maxWidth: "700px" }, cover: _jsx(Row, { style: {
                            display: "flex",
                            justifyContent: "center",
                            padding: "16px",
                        }, children: _jsx("img", { alt: "example", src: data.image, style: { height: "150px", width: "auto" } }) }), actions: [
                        _jsx(Typography, { children: data.price + " $" }),
                        _jsx(Typography, { children: data.category }),
                    ], children: _jsx(Meta, { title: data.title, description: data.description }) }) })] }));
}
export default DetailCard;
