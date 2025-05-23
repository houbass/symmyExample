import { useNavigate } from "react-router";
import { Col, Row, Card, Typography, Button } from "antd";
const { Meta } = Card;
import { CaretLeftOutlined } from "@ant-design/icons";

// Types
import type { DataItem } from "../../../global/types";

interface Props {
  data: undefined | DataItem;
}

function DetailCard({ data }: Props) {
  const navigate = useNavigate();

  if (!data) return;

  return (
    <Col>
      <Row style={{ paddingTop: "16px", paddingLeft: "50px" }}>
        <Button
          type="default"
          icon={<CaretLeftOutlined />}
          onClick={() => navigate("/")}
        >
          Back to catalog
        </Button>
      </Row>
      <Row style={{ padding: "16px", justifyContent: "center" }}>
        <Card
          style={{ width: "100%", maxWidth: "700px" }}
          cover={
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "16px",
              }}
            >
              <img
                alt="example"
                src={data.image}
                style={{ height: "150px", width: "auto" }}
              />
            </Row>
          }
          actions={[
            <Typography>{data.price + " $"}</Typography>,
            <Typography>{data.category}</Typography>,
          ]}
        >
          <Meta title={data.title} description={data.description} />
        </Card>
      </Row>
    </Col>
  );
}

export default DetailCard;
