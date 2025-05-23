import { Link, useNavigate } from "react-router";
import { Card, Col, Row, Typography } from "antd";
import { cleanString } from "../../../global/utils";

// Types
import type { DataItem } from "../../../global/types";

// Components
import EllipsesText from "../../../components/EllipsesText";

interface Props {
  index: number;
  item: DataItem;
}

function ProductCard({ index, item }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      key={index + item.title}
      title={<EllipsesText text={item.title} />}
      onClick={() => navigate("/product-detail/" + cleanString(item.title))}
      cover={
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <img
            alt={item.title}
            src={item.image}
            style={{ height: "150px", width: "auto" }}
          />
        </Col>
      }
    >
      <Row
        style={{
          justifyContent: "space-between",
        }}
      >
        <Typography>{item.price + " $"}</Typography>
        <Link to={"/product-detail/" + item.title}>Detail</Link>
      </Row>
    </Card>
  );
}

export default ProductCard;
