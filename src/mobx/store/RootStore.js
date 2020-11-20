import Store from "./StoreProvider";

// export default class RootStore {
//   constructor() {
//     this.mystore = new Store(this);
//     //   this.authStore = new authStore(this);
//   }
// }
import { createContext } from "react";
// import {TodoList} from "../stores/todo-list";

export const StoreContext = createContext(Store);
export const StoreProvider = StoreContext.Provider;
