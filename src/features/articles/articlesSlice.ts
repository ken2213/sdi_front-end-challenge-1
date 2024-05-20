import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the Article type
interface Article {
    id: number;
    author_id: number;
    title: string;
    body: string;
    image_url: string;
    created_at: string;
}

// Define the initial state using that type
interface ArticlesState {
    article: Article | null;
    loading: boolean;
    error: string | null;
}


const initialState: ArticlesState = {
    article: null,
    loading: false,
    error: null,
};

// Async thunk for fetching article by ID
export const fetchArticleById = createAsyncThunk<Article, number>(
    'articles/fetchArticleById',
    async (id) => {
      const response = await fetch('https://tmsph-sdi-challenges.pages.dev/challenges/news.json');
      const data: Article[] = await response.json();
      return data.find(article => article.id === id)!;
    }
);

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchArticleById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
          state.loading = false;
          state.article = action.payload;
        })
        .addCase(fetchArticleById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch article';
        });
    },
});

export default articlesSlice.reducer;