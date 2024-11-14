import React,{useState, useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import {Link, useParams} from "react-router-dom";


const EditContact = ()=> {
    const [contact,setContact] = useState({
        name: "", 
        phone: "",
        email: "",
        address: "",
    })
    const {actions,store} = useContext(Context)
    const {theid}= useParams()

    function handleChange (event) {
        setContact({
            ...contact,
        [event.target.name]: event.target.value
        })
    }
    function getContact() {
        let result = store.contacts.find((item)=>item.id==theid)
        setContact(result)
    }

    async function editContact (){
        let response = await    actions.editContact(contact,theid)
        if(response) {
            setContact({
                name: "", 
                phone: "",
                email: "",
                address: "",
            })
        }

    }
        useEffect(()=>{getContact()},[])
    return (
        <div className="form-container">
            <h1 className="form-title">Edit Contact</h1>
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
                <button type="button" onClick={() => editContact()} className="save-button">Edit</button>
                <div className="go-back-container">
                    <Link to={"/"} className="go-back-button">
                        Go Back
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default EditContact