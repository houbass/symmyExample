import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { Row, Col } from "antd";

// Types
import type { DataItem } from "../../global/types";

// Components
import PageLayout from "../../components/PageLayout";
import SearchInput from "../../components/SearchInput";
import Catalog from "./components/Catalog";
import Progress from "../../components/Progress";

interface Props {
  data: DataItem[];
  isError: any;
}

function LandingPage({ data, isError }: Props) {
  // Write and get search params to and from URL
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
  });

  const searchValues = searchParams.get("search") || "";

  // Filter data when searching
  const filteredData = useMemo(() => {
    if (data && searchValues.length > 0) {
      return data.filter((item) =>
        item.title.toLowerCase().includes(searchValues.toLowerCase())
      );
    } else {
      return data;
    }
  }, [searchValues, data]);

  // Set search params to URL
  function searching(value: string) {
    setSearchParams((prev) => {
      prev.set("search", value);
      return prev;
    });
  }

  // Set search params
  function deleteSearch() {
    setSearchParams((prev) => {
      prev.set("search", "");
      return prev;
    });
  }

  return (
    <PageLayout>
      <Row
        align="middle"
        justify="space-between"
        style={{ background: "black", padding: "30px" }}
      >
        <Col
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <SearchInput
            searchValues={searchValues}
            deleteSearch={deleteSearch}
            searching={searching}
          />
        </Col>
      </Row>

      <Progress children={<Catalog data={filteredData} />} isError={isError} />
    </PageLayout>
  );
}

export default LandingPage;
