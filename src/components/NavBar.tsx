import { Link } from "react-router";
import { Layout, Row } from "antd";
const { Header } = Layout;
import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <Header
      style={{
        width: "100%",
        position: "fixed",
        zIndex: "1",
        minHeight: "95px",
        padding: "0 50px",
        background: "white",
      }}
    >
      <Row style={{ height: "100%" }}>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img alt="symmy" style={{ width: "140px" }} src={logo}></img>
        </Link>
      </Row>
    </Header>
  );
}

export default NavBar;
