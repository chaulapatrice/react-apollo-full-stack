import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
  },
  title: {
      fontWeight: 'bold',
  },
  container: {
      marginTop: 10,
  }
});


export default function PersonDetails(props: any) {
  const classes = useStyles();

  return (
    <Container className = {classes.container} maxWidth="sm">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
            <TableRow>
              <TableCell className={classes.title} component="th" scope="row">
                Name
              </TableCell>
              <TableCell align="right">Luke Skywalker</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.title} component="th" scope="row">
                Height
              </TableCell>
              <TableCell align="right">2.1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.title} component="th" scope="row">
                Mass
              </TableCell>
              <TableCell align="right">89</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.title} component="th" scope="row">
                Gender
              </TableCell>
              <TableCell align="right">male</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.title} component="th" scope="row">
                Home world
              </TableCell>
              <TableCell align="right">Pluto</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
