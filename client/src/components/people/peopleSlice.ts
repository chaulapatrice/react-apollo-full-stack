import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {GetPeople_people_people} from './__generated__/GetPeople';


export interface PeopleState {
    people: Array<GetPeople_people_people>;
    currentPage: number;
    pages: number;
    getPeople: boolean;
}

const initialState: PeopleState = {
    people: [],
    currentPage: 1,
    pages: 0,
    getPeople: true,
}



export const peopleSlice = createSlice({
    name: 'people',
    initialState: initialState,
    reducers: {
        setPeople: (state, action: PayloadAction<Array<GetPeople_people_people>>) => {
            state.people = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setPages: (state, action: PayloadAction<number>) => {
            state.pages = action.payload;
        }
    }
})

export const {setPeople, setPages, setCurrentPage} = peopleSlice.actions;

// Selectors
export const selectPeople = (state: RootState) => state.people.people;
export const selectCurrentPage = (state: RootState) => state.people.currentPage;
export const selectPages = (state: RootState) => state.people.pages;

export default peopleSlice.reducer;