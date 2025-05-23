import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router";
import { Layout, Row } from "antd";
const { Header } = Layout;
import logo from "../assets/logo.svg";
function NavBar() {
    return (_jsx(Header, { style: {
            width: "100%",
            position: "fixed",
            zIndex: "1",
            minHeight: "95px",
            padding: "0 50px",
            background: "white",
        }, children: _jsx(Row, { style: { height: "100%" }, children: _jsx(Link, { to: "/", style: {
                    display: "flex",
                    alignItems: "center",
                }, children: _jsx("img", { alt: "symmy", style: { width: "140px" }, src: logo }) }) }) }));
}
export default NavBar;
