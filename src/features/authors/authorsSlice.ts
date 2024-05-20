import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the Author type
interface Author {
  id: number;
  name: string;
  role: string;
  place: string;
  avatar_url: string;
}

// Define the initial state using that type
interface AuthorsState {
  authors: Author[];
  loading: boolean;
  error: string | null;
}

const initialState: AuthorsState = {
  authors: [],
  loading: false,
  error: null,
};

// Async thunk for fetching authors
export const fetchAuthors = createAsyncThunk<Author[]>(
  'authors/fetchAuthors',
  async () => {
    const response = await fetch('https://tmsph-sdi-challenges.pages.dev/challenges/authors.json');
    const data: Author[] = await response.json();
    return data;
  }
);

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuthors.fulfilled, (state, action: PayloadAction<Author[]>) => {
        state.loading = false;
        state.authors = action.payload;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch authors';
      });
  },
});

export default authorsSlice.reducer;
