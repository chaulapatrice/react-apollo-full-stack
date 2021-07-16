import React, { useState, ChangeEvent } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useAppDispatch } from '../../app/hooks';
import { setSearchTerm } from './searchPeopleSlice';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            margin: theme.spacing(1),
            height: 38
        }
    }),
);

// This widget will direct a person to the search page
// When a person clicks the button
// 1. Set the search term
// 2. Direct user to the search page

export default function SearchWidget(props: any) {
    const [value, setValue] = useState("")
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useAppDispatch();

    // Handle search
    const handleSearch = () => {
        dispatch(setSearchTerm(value));
        // Navigate to the search view only if
        // The user is on home page
        if (!window.location.href.includes('/search'))
            history.push('/search');
    }
    return (
        <div>
            <TextField
                InputProps={{
                    className: classes.input
                }}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
                variant="outlined"
                label="Search" />
            <Button
                color="primary"
                className={classes.input}
                variant="contained"
                onClick={handleSearch}
            >
                <SearchIcon />
               Search
          </Button>
        </div>
    )
}