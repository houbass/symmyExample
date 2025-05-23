import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router";

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

  // Get product name from URL
  const params = useParams();
  const thisProductName = params.productName;

  // Find product name
  const thisData = useMemo(() => {
    if (data && thisProductName) {
      return data.find((item) => item.title.includes(thisProductName));
    }
  }, [data, thisProductName]);

  // If product name dont exist redirect to main page
  useEffect(() => {
    if (data && !thisData) {
      navigate("/");
    }
  }, [data, thisData]);

  return (
    <PageLayout>
      <Progress
        children={<DetailCard data={thisData} />}
        isError={isError}
        data={data}
      />
    </PageLayout>
  );
}

export default ProductDetailPage;
