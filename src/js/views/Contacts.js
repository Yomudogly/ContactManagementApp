import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Consumer, Provider } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const { store, actions } = useContext(Consumer);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((item, index) => {
							return (
								<ContactCard
									key={index}
									full_name={item.full_name}
									address={item.address}
									phone={item.phone}
									email={item.email}
									onDelete={() => setState({ showModal: true })}
								/>

								//<ContactCard id={index} onDelete={() => setState({ showModal: true })} />
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
