import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const renderList = props => {
    const { contacts, selectContactHandler } = props;
    const listOfContacts = contacts.map(({ firstName, lastName, phone }, index) => 
    <Link className='contacts' to="/contacts/details" key={index} onClick={() => selectContactHandler({ firstName, lastName, phone })}>{firstName} {lastName}</Link>)
    return (
        <React.Fragment>
            <ul>
                {listOfContacts}
            </ul>
        </React.Fragment>
    );
  }

const ListOfContacts = props => {
    return (
        <div className='button__container'>
        {renderList(props)}
        </div>
    )
}

 ListOfContacts.propTypes = {
     contacts: PropTypes.array,
     selectContactHandler: PropTypes.func
 }

 export default ListOfContacts;