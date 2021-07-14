import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';

function ListItemLink(props: any) {
    return <ListItem button component="a" {...props} />;
}

export default function Person(props: any) {
    return (
        <>
            <ListItemLink href={`people/${props.id}`}>
            <ListItemIcon>
                <AccountCircleIcon/>
            </ListItemIcon>
                <ListItemText> Spam {props.id} </ListItemText>
            </ListItemLink>
            <Divider />
        </>
    )
}