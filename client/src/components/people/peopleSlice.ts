import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState, AppThunk} from "../../app/store";

export interface PeopleState {
    people: Array<object>;
    next: number | null;
    currentPage: number;
    previous: number | null;
    pages: Array<number>;
}

const initialState: PeopleState = {
    people: [],
    next: null,
    previous: null,
    currentPage: 1,
    pages: [],
}


export const peopleSlice = createSlice({
    name: 'people',
    initialState: initialState,
    reducers: {
        setPeople: (state, action: PayloadAction<Array<object>>) => {
            state.people = action.payload;
        },
        setNext: (state, action: PayloadAction<number | null>) => {
            state.next = action.payload;
        },
        setPrevious: (state, action: PayloadAction<number | null>) => {
            state.previous = action.payload;
        },
        setPages: (state, action: PayloadAction<Array<number>>) => {
            state.pages = action.payload;
        }
    }
})

export const {setPeople, setNext, setPrevious, setPages} = peopleSlice.actions;

export default peopleSlice.reducer;