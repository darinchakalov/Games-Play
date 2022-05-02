import { Link, NavLink } from "react-router-dom";

function Header() {
	return (
		<header>
			<h1>
				<NavLink className="home" to="/">
					GamesPlay
				</NavLink>
			</h1>
			<nav>
				<NavLink activeStyle={{ color: "grey" }} to="/games">
					All Games
				</NavLink>
				{/* <NavLink to="/games">All games<NavLink> */}
				<div id="user">
					<NavLink activeStyle={{ color: "grey" }} to="/create-game">
						Create Game
					</NavLink>
					<NavLink to="/logout">Logout</NavLink>
				</div>
				<div id="guest">
					<NavLink activeStyle={{ color: "grey" }} to="/login">
						Login
					</NavLink>
					<NavLink activeStyle={{ color: "grey" }} to="/register">
						Register
					</NavLink>
				</div>
			</nav>
		</header>
	);
}

export default Header;
