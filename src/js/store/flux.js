import history from "../history";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			editContact: (id, name, email, address, phone) => {
				let url = "https://assets.breatheco.de/apis/fake/contact/" + id;
				let promis = fetch(url, {
					method: "PUT",
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "downtown_xii",
						address: address,
						phone: phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				promis
					.then(response => {
						return response.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(list => console.log("Success:", JSON.stringify(list)))
					.then(() => {
						getActions().loadContacts();
					})
					.then(() => {
						alert("You did it!");
						history.push("/contacts");
					})
					.catch(error =>
						//error handling
						console.log("Looks like there was a problem: \n", error)
					);
			},

			addContact: (name, email, phone, address) => {
				let url = "https://assets.breatheco.de/apis/fake/contact/";
				let promis = fetch(url, {
					method: "POST",
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "downtown_xii",
						address: address,
						phone: phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				promis
					.then(response => {
						return response.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(list => console.log("Success:", JSON.stringify(list)))
					.then(() => {
						getActions().loadContacts();
					})
					.then(() => {
						alert("Contact was succesfully added!");
						history.push("/contacts");
					})
					.catch(error =>
						//error handling
						console.log("Looks like there was a problem: \n", error)
					);
			},
			deleteContact: id => {
				let url = "https://assets.breatheco.de/apis/fake/contact/" + id;
				let promis = fetch(url, {
					method: "DELETE"
				});
				promis.then(() => {
					getActions().loadContacts();
				});
			},
			loadContacts: () => {
				let url = "https://assets.breatheco.de/apis/fake/contact/agenda/downtown_xii";
				let promis = fetch(url).then(response => response.json());
				promis
					.then(results => {
						setStore({
							...getStore,
							contacts: results
						});
					})
					.catch(error =>
						//error handling
						console.log("Looks like there was a problem: \n", error)
					);
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
