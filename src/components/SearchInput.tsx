import { Input, Button } from "antd";
import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";

interface Props {
  searchValues: string;
  deleteSearch: () => void;
  searching: (value: string) => void;
}

function SearchInput({ searchValues, deleteSearch, searching }: Props) {
  return (
    <Input
      data-testid="searchInput"
      size="large"
      placeholder="Search"
      prefix={<SearchOutlined />}
      suffix={
        searchValues.length > 0 && (
          <Button
            size="small"
            type="text"
            shape="circle"
            icon={<CloseCircleOutlined />}
            onClick={deleteSearch}
          />
        )
      }
      style={{ width: 250 }}
      value={searchValues}
      onChange={(e) => searching(e.target.value)}
    />
  );
}

export default SearchInput;
