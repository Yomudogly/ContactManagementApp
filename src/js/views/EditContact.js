import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={e => setName(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Hello"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={e => setEmail(e.target.value)}
							type="email"
							className="form-control"
							value={store.people[props.match.params.id].email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={e => setPhone(e.target.value)}
							type="phone"
							className="form-control"
							value={store.people[props.match.params.id].phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={e => setAddress(e.target.value)}
							type="text"
							className="form-control"
							value={store.people[props.match.params.id].address}
						/>
					</div>
					<button
						onClick={() => actions.editContact(id)}
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
