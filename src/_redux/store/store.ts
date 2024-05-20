import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../../features/articles/articlesSlice";
import authorsReducer from "../../features/authors/authorsSlice";

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        authors: authorsReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch