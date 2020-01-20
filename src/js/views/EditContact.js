import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState(store.contacts[props.match.params.id].full_name);
	const [email, setEmail] = useState(store.contacts[props.match.params.id].email);
	const [phone, setPhone] = useState(store.contacts[props.match.params.id].phone);
	const [address, setAddress] = useState(store.contacts[props.match.params.id].address);
	const id = store.contacts[props.match.params.id].id;

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={e => setName(e.target.value)}
							type="text"
							className="form-control"
							value={name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={e => setEmail(e.target.value)}
							type="email"
							className="form-control"
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={e => setPhone(e.target.value)}
							type="phone"
							className="form-control"
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={e => setAddress(e.target.value)}
							type="text"
							className="form-control"
							value={address}
						/>
					</div>
					<button
						onClick={() => actions.editContact(id, name, email, address, phone)}
						type="button"
						className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
