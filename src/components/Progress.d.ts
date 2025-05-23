import React from "react";
import type { DataItem } from "../global/types";
interface Props {
    children: React.ReactNode;
    isError: any;
    data: undefined | DataItem[];
}
declare function Progress({ children, isError, data }: Props): import("react/jsx-runtime").JSX.Element;
export default Progress;
