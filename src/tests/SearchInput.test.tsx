import { render } from "@testing-library/react";
import SearchInput from "../components/SearchInput";

function deleteSearch() {}

function searching(value: string) {
  console.log(value);
}

describe("SearchInput", () => {
  it("checking values", () => {
    const { getByTestId } = render(
      <SearchInput
        searchValues="jacket"
        deleteSearch={deleteSearch}
        searching={searching}
      />
    );

    const input = getByTestId("searchInput") as HTMLInputElement;
    expect(input.value).toBe("jacket");
  });
});
