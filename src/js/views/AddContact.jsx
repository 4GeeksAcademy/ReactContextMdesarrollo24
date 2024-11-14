import React,{useState, useContext} from "react";
import { Context } from "../store/appContext";
import {Link} from "react-router-dom";

const AddContact = ()=> {
    const [contact,setContact] = useState({
        name: "", 
        phone: "",
        email: "",
        address: "",
    })
    const {actions} = useContext(Context)

    function handleChange (event) {
        setContact({
            ...contact,
        [event.target.name]: event.target.value
        })
    }
    async function saveContact (){
        let response = await    actions.addContact(contact)
        if(response) {
            setContact({
                name: "", 
                phone: "",
                email: "",
                address: "",
            })
        }

    }
    return (
        <div className="form-container">
            <h1 className="form-title">Add New Contact</h1>
            <form>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Nombre" />
                </div>
                <div className="form-group">
                    <label>Dirección</label>
                    <input type="text" name="address" value={contact.address} onChange={handleChange} placeholder="Dirección" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input type="tel" name="phone" value={contact.phone} onChange={handleChange} placeholder="Teléfono" />
                </div>
                <button type="button" onClick={() => saveContact()} className="save-button">Save</button>
                <div className="go-back-container">
                    <Link to={"/"} className="go-back-button">
                        Go Back
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default AddContact