import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    error: '',
}

export const fetchUser = createAsyncThunk('user/fetch', () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()).then(data => data)
})

const apiSlicer = createSlice({
    name: 'apiReducer',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        });

        builder.addCase(fetchUser.fulfilled, (state, action) => {
            console.log(action, '------>');
            state.loading = false
            console.log(action.payload, '------------- payload---------')
            state.data = action.payload
        });

        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = true
            state.error = "something went"
        });
    }
})

export default apiSlicer.reducer