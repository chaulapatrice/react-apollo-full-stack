import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

import { useAppSelector } from '../../app/hooks';
import { selectPeople } from './peopleSlice';
import StarWarsLogo from "./star-wars-logo.png";

const useStyles = makeStyles({
  table: {
  },
  title: {
    fontWeight: 'bold',
  },
  container: {
    marginTop: 10,
  },
  header: {
    textAlign: 'center',
  },
  logo: {
    height: '100px'
  },
});

export default function PersonDetails(props: any) {
  const classes = useStyles();
  const people = useAppSelector(selectPeople);
  const name = props.match.params.name;
  console.log(name);

  const person = people.find(person => person.name === name);

  if (!person) {
    return (
      <Container maxWidth="sm">
        <p>Person not found</p>
      </Container>
    )
  }

  return (
    <Container className={classes.container} maxWidth="sm">
      <div className={classes.header}>
        <img className={classes.logo} src={StarWarsLogo} />
        <h3> Star wars people</h3>
      </div>
      <Button variant="contained" onClick={props.history.goBack}>
        <ArrowBackIcon />
      </Button>
      <h1>{person.name}</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell className={classes.title} component="th" scope="row">
                Height
              </TableCell>
              <TableCell align="right">{person.height}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.title} component="th" scope="row">
                Mass
              </TableCell>
              <TableCell align="right">{person.mass}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.title} component="th" scope="row">
                Gender
              </TableCell>
              <TableCell align="right">{person.gender}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.title} component="th" scope="row">
                Home world
              </TableCell>
              <TableCell align="right">{person.homeworld}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
