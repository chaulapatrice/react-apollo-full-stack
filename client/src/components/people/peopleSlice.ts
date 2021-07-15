import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState, AppThunk} from "../../app/store";
import {ApolloClient, NormalizedCacheObject} from "@apollo/client";
import {GetPeople_people_people} from './__generated__/GetPeople';


export interface PeopleState {
    people: Array<GetPeople_people_people>;
    next: number | null;
    currentPage: number;
    previous: number | null;
    pages: Array<number>;
    getPeople: boolean;
}

const initialState: PeopleState = {
    people: [],
    next: null,
    previous: null,
    currentPage: 1,
    pages: [],
    getPeople: true,
}



export const peopleSlice = createSlice({
    name: 'people',
    initialState: initialState,
    reducers: {
        setPeople: (state, action: PayloadAction<Array<GetPeople_people_people>>) => {
            console.log("Setting new people", action.payload);
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

// Selectors
export const selectPeople = (state: RootState) => state.people.people;
export const selectNext = (state: RootState) => state.people.next;
export const selectPrevious = (state: RootState) => state.people.previous;
export const selectCurrentPage = (state: RootState) => state.people.currentPage;
export const selectPages = (state: RootState) => state.people.pages;

export default peopleSlice.reducer;