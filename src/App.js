import { createElement, useState } from "react";

import Header from "./components/Header.js";
import WelcomeWorld from "./components/WelcomeWorld.js";
import GameCatalog from "./components/GameCatalog/GameCatalog.js";
import CreateGame from "./components/CreateGame.js";
import EditGame from "./components/EditGame.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import ErrorPage from "./components/ErrorPage.js";

function App() {
	const [page, setPage] = useState("/home");

	const routes = {
		"/home": <WelcomeWorld />,
		"/games": <GameCatalog />,
		"/create-game": <CreateGame />,
		"/edit-game": <EditGame />,
		"/login": <Login />,
		"/register": <Register />,
	};

	const navigationChangeHandler = (path) => {
		setPage(path);
	};

	return (
		<div id="box">
			<Header navigationChangeHandler={navigationChangeHandler} />

			<main id="main-content">{routes[page] || <ErrorPage></ErrorPage>}</main>
		</div>
	);
}

export default App;
