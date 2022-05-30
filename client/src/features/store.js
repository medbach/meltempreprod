import {configureStore} from "@reduxjs/toolkit";
import annoncesReducer from "./annonces/annoncesSlice";

export const store = configureStore ({
    reducer: annoncesReducer,
});