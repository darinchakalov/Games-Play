import { Route, Switch, Redirect } from "react-router-dom";

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
	return (
		<div id="box">
			<Header />

			<main id="main-content">
				<Switch>
					<Route path="/" exact component={WelcomeWorld} />
					<Route path="/games" exact component={GameCatalog} />
					<Route path="/games/:gameId" exact component={GameDetails} />
					<Route path="/create-game" component={CreateGame} />
					<Route path="/edit-game" component={EditGame} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route path="/custom">
						<h2>Custom page</h2>
						<p>Custom router</p>
					</Route>
					<Route
						path="/logout"
						render={(props) => {
							console.log("Logged Out!!!");

							return <Redirect to="/" />;
						}}
					/>
				</Switch>
			</main>
		</div>
	);
}

export default App;
