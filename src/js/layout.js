import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import ScrollToTop from "./component/scrollToTop";

// import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Contacts } from "./views/Contacts.js";
import { AddContact } from "./views/AddContact.js";
import { EditContact } from "./views/EditContact.js";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<Router history={history} basename={basename}>
				<div>
					<ScrollToTop>
						<Switch>
							<Route exact path="/index.html" component={Contacts} />
							<Route exact path="/" component={Contacts} />
							<Route exact path="/contacts" component={Contacts} />
							<Route exact path="/add" component={AddContact} />
							<Route exact path="/edit/:id" component={EditContact} />
							<Route render={() => <h1 className="notfound">Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</div>
			</Router>
		</div>
	);
};

export default injectContext(Layout);
