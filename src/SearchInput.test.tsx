import { render } from "@testing-library/react";
import SearchInput from "./components/SearchInput";

function madafakr() {
  console.log("yo");
}

function searching(value: string) {
  console.log(value);
}

describe("SearchInput", () => {
  it("checking values", () => {
    const { getByTestId } = render(
      <SearchInput
        searchValues="jacket"
        deleteSearch={madafakr}
        searching={searching}
      />
    );

    const input = getByTestId("searchInput") as HTMLInputElement;
    expect(input.value).toBe("jacket");
  });
});
