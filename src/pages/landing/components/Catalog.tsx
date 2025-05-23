import { Row, Col, Skeleton, Card } from "antd";

// Types
import type { DataItem } from "../../../global/types";

// Components
import ProductCard from "./ProductCard";

interface Props {
  data: undefined | DataItem[];
}

const XS = 24;
const LG = 8;
const XL = 6;

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
        {!data
          ? Array.from({ length: 8 }).map((_, index) => (
              <Col key={index} xs={XS} lg={LG} xl={XL}>
                <Card>
                  <Skeleton active style={{ height: "260px" }} />
                </Card>
              </Col>
            ))
          : data.map((item, index) => (
              <Col key={index} xs={XS} lg={LG} xl={XL}>
                <ProductCard index={index} item={item} />
              </Col>
            ))}
      </Row>
    </Row>
  );
}

export default Catalog;
