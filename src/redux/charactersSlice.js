import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCaracters = createAsyncThunk('characters/getCharacters', async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters`)
    return res.data
})


const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        items: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: {
        [fetchCaracters.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchCaracters.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'succeeded'
        },
        [fetchCaracters.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
    }
})

export default charactersSlice.reducer