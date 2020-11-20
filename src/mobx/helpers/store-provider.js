import { createContext } from "react";
// import {TodoList} from "../stores/todo-list";
import Product from "../store/Product";

// export const StoreContext = createContext<Product>({} as Product);
export const StoreContext = createContext(Product);
export const StoreProvider = StoreContext.Provider;
