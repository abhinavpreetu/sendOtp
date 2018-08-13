import React from 'react';
import { Switch } from 'react-router-dom';

const Contacts = props => {
    return (
        <Switch>
            {props.children}
        </Switch>
    )
}

export default Contacts;