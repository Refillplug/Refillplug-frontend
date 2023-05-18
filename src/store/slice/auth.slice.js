

import { api } from '../../utils';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// async api calls
export const login = createAsyncThunk('auth.slice/login', async data => await api.post('auth/login/', data));
export const register = createAsyncThunk('auth.slice/register', async data => await api.post('auth/register/', data));

const auth = createSlice({
    name: 'auth', // a unique name for identifying the reducer in the root reducer
    reducers: ({
        setSuccess:(state, {payload}) => {state.success = payload}
    }), // a method for getting a formatted version of the data after fetch
    initialState: ({ load: false, error: false, user: {}, success: false }), // reducer's initial states
    extraReducers: ({ addCase }) => { // used for updating the states when fetching an api data and error handling
        addCase(login.pending, state => { state.load = true; });
        addCase(login.fulfilled, (state, { payload }) => { state.load = false; console.log(payload.data); });
        addCase(login.rejected, (state, { error }) => { state.load = false; console.error(error.message); });

        addCase(register.pending, state => { state.load = true; });
        addCase(register.rejected, (state, { error }) => { state.load = false; console.error(error.message, 'error'); });
        addCase(register.fulfilled, (state, { payload }) => { state.load = false; console.log(payload.data); state.success = true; });
    },
});

export default auth.reducer;