interface Props {
    searchValues: string;
    deleteSearch: () => void;
    searching: (value: string) => void;
}
declare function SearchInput({ searchValues, deleteSearch, searching }: Props): import("react/jsx-runtime").JSX.Element;
export default SearchInput;
