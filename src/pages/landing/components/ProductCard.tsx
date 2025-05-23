import { Link, useNavigate } from "react-router";
import { Card, Row, Typography } from "antd";

// Types
import type { DataItem } from "../../../global/types";

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
      title={
        <p
          title={item.title}
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {item.title}
        </p>
      }
      onClick={() => navigate("/product-detail/" + item.title)}
      cover={
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <img
            loading="lazy"
            alt={item.title}
            src={item.image}
            style={{ height: "150px", width: "auto" }}
          />
        </Row>
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
