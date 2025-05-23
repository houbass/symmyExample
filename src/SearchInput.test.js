import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "@testing-library/react";
import SearchInput from "./components/SearchInput";
function madafakr() {
    console.log("yo");
}
function searching(value) {
    console.log(value);
}
describe("SearchInput", () => {
    it("checking values", () => {
        const { getByTestId } = render(_jsx(SearchInput, { searchValues: "jacket", deleteSearch: madafakr, searching: searching }));
        const input = getByTestId("searchInput");
        expect(input.value).toBe("jacket");
    });
});
