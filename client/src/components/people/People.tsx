import React from 'react';
import Person from './Person';
import Pagination from '@material-ui/lab/Pagination';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';

export default function People(props: any) {
    const peopleIds = [1,2,3,4,5,6,7,8];
    const peopleItems = peopleIds.map(id => <Person key={id} id={id} /> )
    return (
        <Container maxWidth="sm">
            <h1>People</h1>
            <List>
            {peopleItems}
            </List>
            <Pagination count={10} />
        </Container>)
}