import React from 'react';
import { LEVELS } from '../../models/levels.enum'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'

const ContactListComponent = () => {
     
    const defaultContact = new Contact('Hernan', 'Verzini', 'hernan@hotmail.com', false, LEVELS.NORMAL );

    return (
        <div>
            <h1>
                Your Contacts:
            </h1>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
}

export default ContactListComponent;
