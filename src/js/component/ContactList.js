import React from 'react';
import '../../styles/contactList.css'; // Crear y enlazar este archivo CSS

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <div className="contact-list container">
            <ul className="contact-list-ul">
                {contacts.map((contact) => (
                    <li key={contact.id} className="contact-card">
                        {/* Imagen de contacto */}
                        <img src={contact.image || 'https://via.placeholder.com/100'} alt="Contact" className="contact-image" />
                        
                        {/* Información del contacto */}
                        <div className="contact-info">
                            <h3>{contact.full_name}</h3>
                            <p>Email: {contact.email}</p>
                            <p>Phone: {contact.phone}</p>
                        </div>

                        {/* Botón para eliminar */}
                        <button onClick={() => deleteContact(contact.id)} className="delete-button">
                        <i className="fas fa-pencil"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
