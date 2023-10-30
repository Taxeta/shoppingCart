import { createContext } from "react";
import ItemsContextStructure from "./types";

const ItemsContext = createContext({} as ItemsContextStructure);

export default ItemsContext;
