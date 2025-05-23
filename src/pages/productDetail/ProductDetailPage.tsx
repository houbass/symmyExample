import { useEffect, useMemo, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import { Col, Row, Button } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";
import { cleanString } from "../../global/utils";

// Types
import type { DataItem } from "../../global/types";

// Components
import PageLayout from "../../components/PageLayout";
import Progress from "../../components/Progress";
import DetailCard from "./components/DetailCard";

interface Props {
  data: DataItem[];
  isError: any;
}

function ProductDetailPage({ data, isError }: Props) {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  // Get product name from URL
  const params = useParams();
  const thisProductName = params.productName;

  // Find product name
  const thisData = useMemo(() => {
    if (data && thisProductName) {
      return data.find((item) =>
        cleanString(item.title).includes(cleanString(thisProductName))
      );
    }
  }, [data, thisProductName]);

  // If product name dont exist redirect to main page
  useEffect(() => {
    if (data && !thisData) {
      navigate("/");
    }
  }, [data, thisData]);

  // Scroll on top on init
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div ref={ref}>
      <PageLayout>
        <Col style={{ height: "100%" }}>
          <Row style={{ paddingTop: "16px", paddingLeft: "50px" }}>
            <Button
              type="default"
              icon={<CaretLeftOutlined />}
              onClick={() => navigate("/")}
            >
              Back to catalog
            </Button>
          </Row>

          <Progress
            children={<DetailCard data={thisData} />}
            isError={isError}
          />
        </Col>
      </PageLayout>
    </div>
  );
}

export default ProductDetailPage;
