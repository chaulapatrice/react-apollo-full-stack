import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState, AppThunk} from "../../app/store";
import {SearchPeople_search_people} from './__generated__/SearchPeople';


export interface PeopleState {
    people: Array<SearchPeople_search_people>;
    next: number | null;
    searchTerm: string;
    currentPage: number;
    previous: number | null;
    pages: number;
    getPeople: boolean;
}

const initialState: PeopleState = {
    people: [],
    next: null,
    previous: null,
    currentPage: 1,
    pages: 0,
    getPeople: true,
    searchTerm: "",
}



export const searchPeopleSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        setPeople: (state, action: PayloadAction<Array<SearchPeople_search_people>>) => {
            state.people = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        setNext: (state, action: PayloadAction<number | null>) => {
            state.next = action.payload;
        },
        setPrevious: (state, action: PayloadAction<number | null>) => {
            state.previous = action.payload;
        },
        setPages: (state, action: PayloadAction<number>) => {
            state.pages = action.payload;
        }
    }
})

export const {setPeople, setNext, setSearchTerm, setPrevious, setPages, setCurrentPage} = searchPeopleSlice.actions;

// Selectors
export const selectPeople = (state: RootState) => state.search.people;
export const selectNext = (state: RootState) => state.search.next;
export const selectPrevious = (state: RootState) => state.search.previous;
export const selectCurrentPage = (state: RootState) => state.search.currentPage;
export const selectPages = (state: RootState) => state.search.pages;
export const selectSearchTerm = (state: RootState) => state.search.searchTerm;

export default searchPeopleSlice.reducer;