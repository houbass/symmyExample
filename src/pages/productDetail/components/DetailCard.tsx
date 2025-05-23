import { Row, Card, Typography, Skeleton } from "antd";
const { Meta } = Card;

// Types
import type { DataItem } from "../../../global/types";

// Components
import EllipsesText from "../../../components/EllipsesText";

interface Props {
  data: undefined | DataItem;
}

function DetailCard({ data }: Props) {
  return (
    <Row style={{ padding: "16px", justifyContent: "center" }}>
      {!data ? (
        <Card style={{ width: "100%", maxWidth: "700px" }}>
          <Skeleton active style={{ height: "340px" }} />
        </Card>
      ) : (
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
          <Meta
            title={<EllipsesText text={data.title} />}
            description={data.description}
          />
        </Card>
      )}
    </Row>
  );
}

export default DetailCard;
