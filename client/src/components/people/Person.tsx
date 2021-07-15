import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';

function ListItemLink(props: any) {
    return <ListItem button component={Link} {...props} />;
}

export default function Person(props: any) {
    return (
        <>
            <ListItemLink to={`people/${props.name}`}>
            <ListItemIcon>
                <AccountCircleIcon/>
            </ListItemIcon>
                <ListItemText> {props.name} </ListItemText>
            </ListItemLink>
            <Divider />
        </>
    )
}