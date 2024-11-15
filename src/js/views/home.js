import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 container">
			<ul className="contact-list-ul">
				{store.contacts && store.contacts.length > 0 && store.contacts.map(contact => (
					<li key={contact.id} className="contact-card">
						<img src={contact.image || 'https://via.placeholder.com/100'} alt="Contact" className="contact-image" />
						<div className="contact-info">
							<p><strong>Name:</strong> {contact.name}</p>
							<p><strong>Email:</strong> {contact.email}</p>
							<p><strong>Phone:</strong> {contact.phone}</p>
							<p><strong>Address:</strong> {contact.address}</p>
						</div>
						{/* Botón para editar */}
						<Link to={`/edit-contact/${contact.id}`} className="btn btn-light edit-button">
							<i className="fas fa-pencil-alt"></i>
						</Link>
						{/* Botón para eliminar */}
						<button onClick={() => actions.deleteContact(contact.id)} className="btn btn-light delete-button">
							<i className="fas fa-trash"></i>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
