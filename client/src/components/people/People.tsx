import React, { useEffect, ChangeEvent } from 'react';
import StarWarsLogo from "./star-wars-logo.png";
import Person from './Person';
import SearchWidget from "./SearchWidget";

import {
    selectPeople,
    selectCurrentPage,
    setCurrentPage,
    selectPages,
    setPeople,
    setPages,
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
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    logo: {
        height: '100px'
    },
    header: {
        textAlign: 'center',
    },
    container: {
        marginBottom: '10px',
    }
  }),
);

export const GET_PEOPLE = gql`
    query GetPeople($page: Int = 1) {
        people(page: $page) {
            count
            next
            previous
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
    const pages = useAppSelector(selectPages);
    const dispatch = useAppDispatch();
    // Select people
    const people = useAppSelector(selectPeople);
    const classes = useStyles();

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
                const remainder = data.people.count % 10;
                let pagesCount = (remainder > 0) ?
                    Math.floor(data.people.count / 10) + 1 : Math.floor(data.people.count / 10);
                dispatch(setPages(pagesCount));
            },
            onError: (error: ApolloError) => {
                console.log(error);
            }
        }
      );



      if(loading) {
        return (
        <Container  maxWidth="sm">
            <div className={classes.loading}>
            <CircularProgress />
            </div>
        </Container>
       )
    }

    const setPage = (event: ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentPage(value));
    };
    // Create list items
    const peopleItems = people.map((person,index) => (
        <Person key={person.name} name={person.name} id={index} />
    ))
    return (
        <Container className={classes.container} maxWidth="sm">
            <div className={classes.header}>
            <img className={classes.logo} src={StarWarsLogo} />
            <h3> Star wars people</h3>
            <SearchWidget />
            </div>
            <List>
                {peopleItems}
            </List>
            <Pagination variant="outlined" count={pages} page={currentPage} onChange={setPage} />
        </Container>)
}