import { INews, LoadStatus } from '@/lib/types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


interface NewsState {
    news: Array<INews>;
    status: LoadStatus;
    error: string | null;
}

const initialState: NewsState = {
    news: [],
    status: 'idle',
    error: null,
}

export const fetchNews = createAsyncThunk('news/fetchNews', async ({ page, limit }: { page: number, limit: number }) => {
    const response = await axios.get(`/api/news?page=${page}&limit=${limit}`)
    return response.data.result
})

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews: (state, action: PayloadAction<INews[]>) => {
            state.news = action.payload;
        },
        addNews: (state, action: PayloadAction<INews>) => {
            state.news = [...state.news, action.payload];
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                newsSlice.caseReducers.setNews(state, action)
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || null
            })
    },
})

export const { setNews, addNews } = newsSlice.actions
export default newsSlice.reducer
