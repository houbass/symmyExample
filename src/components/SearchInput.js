import { jsx as _jsx } from "react/jsx-runtime";
import { Input, Button } from "antd";
import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";
function SearchInput({ searchValues, deleteSearch, searching }) {
    return (_jsx(Input, { "data-testid": "searchInput", size: "large", placeholder: "Search", prefix: _jsx(SearchOutlined, {}), suffix: searchValues.length > 0 && (_jsx(Button, { size: "small", type: "text", shape: "circle", icon: _jsx(CloseCircleOutlined, {}), onClick: deleteSearch })), style: { width: 250 }, value: searchValues, onChange: (e) => searching(e.target.value) }));
}
export default SearchInput;
