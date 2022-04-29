import { useState } from "react";

import Header from "./components/Header.js";
import WelcomeWorld from "./components/WelcomeWorld.js";
import GameCatalog from "./components/GameCatalog/GameCatalog.js";
import GameDetails from "./components/GameDetails.js";
import CreateGame from "./components/CreateGame.js";
import EditGame from "./components/EditGame.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import ErrorPage from "./components/ErrorPage.js";

function App() {
	const [page, setPage] = useState("/home");

	const navigationChangeHandler = (path) => {
		setPage(path);
	};

	function router(path) {
		let pathNames = path.split("/");

		let rootPath = pathNames[1];
		let argument = pathNames[2];

		const routes = {
			home: <WelcomeWorld />,
			games: <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
			"create-game": <CreateGame />,
			"edit-game": <EditGame />,
			login: <Login />,
			register: <Register />,
			details: <GameDetails id={argument} />,
		};

		return routes[rootPath];
	}

	return (
		<div id="box">
			<Header navigationChangeHandler={navigationChangeHandler} />

			<main id="main-content">{router(page) || <ErrorPage></ErrorPage>}</main>
		</div>
	);
}

export default App;
