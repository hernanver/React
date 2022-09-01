import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                Nombre: { contact.name }
                
            </h2>
            <h3>
            Apellido: { contact.surname }
            </h3>
            <h4>
                email: { contact.email }
            </h4>
            <h5>
                Estado del contacto: { contact.state ? 'En linea':'No disponible' }
            </h5>
            <button>
            { contact.state = 'En linea'}
            </button>
            <button>
            { contact.state = 'No disponible'}
            </button>
        </div>
    );
};

Contact.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;
