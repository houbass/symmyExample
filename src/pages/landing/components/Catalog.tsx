import { Row, Col } from "antd";

// Types
import type { DataItem } from "../../../global/types";

// Components
import ProductCard from "./ProductCard";

interface Props {
  data: undefined | DataItem[];
}

function Catalog({ data }: Props) {
  return (
    <Row
      style={{
        justifyContent: "center",
        padding: "16px 8px",
      }}
    >
      <Row
        style={{
          width: "100%",
        }}
        gutter={[16, 16]}
      >
        {data?.map((item, index) => (
          <Col key={index} xs={24} lg={8} xl={6}>
            <ProductCard index={index} item={item} />
          </Col>
        ))}
      </Row>
    </Row>
  );
}

export default Catalog;
