import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {SearchPeople_search_people} from './__generated__/SearchPeople';


export interface PeopleState {
    people: Array<SearchPeople_search_people>;
    searchTerm: string;
    currentPage: number;
    pages: number;
    getPeople: boolean;
}

const initialState: PeopleState = {
    people: [],
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
        setPages: (state, action: PayloadAction<number>) => {
            state.pages = action.payload;
        }
    }
})

export const {setPeople, setSearchTerm, setPages, setCurrentPage} = searchPeopleSlice.actions;

// Selectors
export const selectPeople = (state: RootState) => state.search.people;
export const selectCurrentPage = (state: RootState) => state.search.currentPage;
export const selectPages = (state: RootState) => state.search.pages;
export const selectSearchTerm = (state: RootState) => state.search.searchTerm;

export default searchPeopleSlice.reducer;