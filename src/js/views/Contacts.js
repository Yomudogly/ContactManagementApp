import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import PropTypes from "prop-types";

export const Contacts = props => {
	const [state, setState] = useState({
		showModal: false,
		id: null
	});
	const { store, actions } = useContext(Context);

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
								<div key={item.id}>
									<ContactCard
										index={index}
										full_name={item.full_name}
										address={item.address}
										phone={item.phone}
										email={item.email}
										onDelete={() => setState({ showModal: true, id: item.id })}
									/>
								</div>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal itemId={state.id} show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};

Contacts.propTypes = {
	match: PropTypes.object
};
