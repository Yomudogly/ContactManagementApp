const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			//addContact(),
			deleteContact: id => {
				let url = "https://assets.breatheco.de/apis/fake/contact/{store.contacts/" + id;
				let promis = fetch(url, {
					method: "DELETE"
				});
				promis.then();

				//.then(getActions().loadContacts());
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
