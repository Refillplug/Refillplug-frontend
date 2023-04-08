

import { api } from '../../utils';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// async api calls

const cart = createSlice({
    name: 'cart', // a unique name for identifying the reducer in the root reducer
    reducers: ({}), // a method for getting a formatted version of the data after fetch
    initialState: ({ load: false, error: false, data: [] }), // reducer's initial states
    extraReducers: ({ addCase }) => { // used for updating the states when fetching an api data and error handling
    },
});

export default cart.reducer;