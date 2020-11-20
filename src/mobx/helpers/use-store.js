import { useContext } from 'react';
import { StoreContext } from './store-provider';
import Product from "../store/Product";

export const useStore = (): Product => useContext(StoreContext);
