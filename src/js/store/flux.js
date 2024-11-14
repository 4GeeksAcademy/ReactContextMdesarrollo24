const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: [],
			formData: {},
			currentEdit: null  // Asegúrate de definir este valor o asignarlo dinámicamente
		},
		actions: {
			createAgenda: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Mariana', {method: "POST"});
					if (response.ok) {
						const data = await response.json();
						console.log(data);
					}
				} catch (error) { 
					console.log("Algo salió mal", error); 
				}
			},

			getContacts: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Mariana/contacts');
					if (response.status==404) {
						const actions = getActions()
						actions.createAgenda()
					}
					if (response.ok) {
						const data = await response.json();
						let store = getStore();
						setStore({ ...store, contacts: data.contacts }); //Guardo lista de contactos
						console.log(data);
					}
				} catch (error) { 
					console.log("Algo salió mal", error); 
				}
			},
			
			addContact: async (data) => {
				const store = getStore();
				try { 
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Mariana/contacts", { 
						method: "POST", 
						body: JSON.stringify(data), 
						headers: { "Content-Type": "application/json" } 
					});
					console.log("Respuesta", response);
					if (response.ok) { 
						const data = await response.json() 
						setStore({contacts: [...store.contacts,data]}) //Agrega lo nuevo a lo que ya tenìa
						return true
					}
				} catch (error) { 
					console.log("Aquí está el error", error); 
				}
			},

			editContact: async (data,id) => {
				const store = getStore();
				try { 
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Mariana/contacts/${id}`, { 
						method: "PUT", 
						body: JSON.stringify(data), 
						headers: { "Content-Type": "application/json" }
					})
					console.log("Respuesta", response);
					if (response.ok) { 
						const data = await response.json() 
						// setStore({contacts: [...store.contacts,data]}) //Agrega lo nuevo a lo que ya tenìa
						getActions().getContacts()
						return true
					}
				} catch (error) { 
					console.log("Aquí está el error", error); 
				}
			},

			deleteContact: async (id) => {
				const store = getStore();
				try { 
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Mariana/contacts/${id}`, { 
						method: "DELETE"
					});
					console.log("Respuesta", response);
					if (response.ok) { 
						setStore({contacts: store.contacts.filter(contact=> contact.id != id)})
					}
				} catch (error) { 
					console.log("Aquí está el error", error); 
				}
			}
			
		}
	};
};

export default getState;
