import React, { ChangeEvent, useEffect } from 'react';
import StarWarsLogo from "./star-wars-logo.png";
import Person from './Person';
import SearchWidget from "./SearchWidget";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

import {
    selectCurrentPage,
    setCurrentPage,
    selectPages,
    selectSearchTerm,
    setPages,
} from './searchPeopleSlice';

import {
    selectPeople,
    setPeople,
} from './peopleSlice';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ApolloError } from '@apollo/client';

import Pagination from '@material-ui/lab/Pagination';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import { gql, useQuery } from '@apollo/client';
import * as SearchPeopleTypes from "./__generated__/SearchPeople";
import CircularProgress from '@material-ui/core/CircularProgress';
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

export const SEARCH_PEOPLE = gql`
    query SearchPeople($page: Int = 1 $searchTerm: String!) {
        search(page: $page term: $searchTerm ) {
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
    const searchTerm = useAppSelector(selectSearchTerm);
    const pages = useAppSelector(selectPages);
    const dispatch = useAppDispatch();
    // Select people
    const people = useAppSelector(selectPeople);
    console.log(people);
    const classes = useStyles();

    // Reset page number whenever searchTerm changes
    useEffect(() => {
        dispatch(setCurrentPage(1));
    }, [searchTerm]);

    // Fetch data from graphql server
    const {
        loading,
    } = useQuery<
        SearchPeopleTypes.SearchPeople,
        SearchPeopleTypes.SearchPeopleVariables
    >(SEARCH_PEOPLE,
        {
            variables: { page: currentPage, searchTerm: searchTerm },
            onCompleted: (data) => {
                const newPeople = data.search.people;
                dispatch(setPeople(newPeople as SearchPeopleTypes.SearchPeople_search_people[]));
                const remainder = data.search.count % 10;
                let pagesCount = (remainder > 0) ?
                    Math.floor(data.search.count / 10) + 1 : Math.floor(data.search.count / 10);
                dispatch(setPages(pagesCount));
            },
            onError: (error: ApolloError) => {
                console.log(error);
            }
        }
    );



    if (loading) {
        return (
            <Container maxWidth="sm">
                <div className={classes.loading}>
                    <CircularProgress />
                </div>
            </Container>
        )
    }

    const setPage = (event: ChangeEvent<unknown>, value: number) => {
        console.log('New value', value);
        dispatch(setCurrentPage(value));
    };
    // Create list items
    const peopleItems = people.map((person, index) => (
        <Person key={person.name} name={person.name} id={index} />
    ))
    return (
        <Container className={classes.container} maxWidth="sm">
            <div className={classes.header}>
                <img className={classes.logo} src={StarWarsLogo} />
                <h3> Star wars people</h3>
                <SearchWidget />
            </div>
            <Button variant="contained" onClick={props.history.goBack}>
                <ArrowBackIcon />
            </Button>
            <List>
                {peopleItems}
            </List>
            <Pagination variant="outlined" count={pages} page={currentPage} onChange={setPage} />
        </Container>)
}