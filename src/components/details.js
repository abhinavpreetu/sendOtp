import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const detailsVue = contact => {
    const { firstName, lastName, phone } = contact;
    const formattedPhone = `(+91) ${phone - 910000000000}`
    return (
        <div className='details'>
            <p>
                <span className='lable'>Name: </span>
                <span className='data'>{firstName} {lastName}</span>
            </p>
            <p>
                <span className='lable'>phone Number: </span>
                <span className='data'>{formattedPhone}</span>
            </p>
            <Link className='send' to="/contacts/send">send message</Link>
        </div>
    )
}

const validProps = contact => {
    if(contact.hasOwnProperty('firstName') && contact.hasOwnProperty('firstName') && contact.hasOwnProperty('firstName')) {
        return detailsVue(contact);
    } else {
        return (
            <p>please select some person</p>
        )
    }
}

const Details = props => {
   return (validProps(props.selectedContact));
}

Details.propTypes = {
    selectedContact: PropTypes.object
}

export default Details;