const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			//addContact(),
			//deleteContact(),
			loadContact: () => {
				let url = "https://assets.breatheco.de/apis/fake/contact/agenda/downtown_xii";
				let promis = fetch(url).then(response => response.json());
				promis.then(results => {
					setStore({
						...setStore,
						contacts: results
					});
				});
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
