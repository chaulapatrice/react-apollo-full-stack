import React, { useEffect } from 'react';
import Person from './Person';

import {
    selectPeople,
    selectNext,
    selectPrevious,
    selectCurrentPage,
    selectPages,
    setPeople,
    setNext,
} from './peopleSlice';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ApolloError } from '@apollo/client';

import Pagination from '@material-ui/lab/Pagination';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import { gql, useQuery } from '@apollo/client';
import * as GetPeopleTypes from "./__generated__/GetPeople";
import CircularProgress from '@material-ui/core/CircularProgress';
import PersonDetails from './PersonDetails';

export const PERSON_TILE_DATA = gql`
     fragment PersonTile on Person{
         __typename
         name
         gender
         height
         mass
         homeworld
     }
`

export const GET_PEOPLE = gql`
    query GetPeople($page: Int = 1) {
        people(page: $page) {
            people {
            name
            gender
            height
            homeworld
            mass
            }
        }
    }
`

export default function People(props: any) {
    const currentPage = useAppSelector(selectCurrentPage);
    const dispatch = useAppDispatch();
    // Select people
    const people = useAppSelector(selectPeople);
    const {
        data,
        loading,
        error,
      } = useQuery<
        GetPeopleTypes.GetPeople,
        GetPeopleTypes.GetPeopleVariables
      >(GET_PEOPLE,
        {
            variables: { page: currentPage },
            onCompleted: (data) => {
                const newPeople = data.people.people;
                dispatch(setPeople(newPeople as GetPeopleTypes.GetPeople_people_people[]));
                dispatch(setNext(23));
            },
            onError: (error: ApolloError) => {
                console.log(error);
            }
        }
      );

      if(loading) {
        return (
        <Container maxWidth="sm">
            <CircularProgress />
        </Container>
       )
    }


    // Create list items
    const peopleItems = people.map((person,index) => (
        <Person key={person.name} name={person.name} id={index} />
    ))
    return (
        <Container maxWidth="sm">
            <h1>People</h1>
            <List>
                {peopleItems}
            </List>
            <Pagination variant="outlined" count={10} page={currentPage} />
        </Container>)
}