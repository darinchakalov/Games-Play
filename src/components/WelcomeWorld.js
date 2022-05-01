import { useEffect, useState } from "react";
import { getLatestGames } from "../services/gamesService.js";
import LatestGamesCard from "./LatestGamesCard.js";

function WelcomeWorld({ navigationChangeHandler }) {
	let [games, setGames] = useState([]);

	useEffect(() => {
		getLatestGames()
			.then((games) => setGames(games))
			.catch((err) => console.log(err));
	}, []);

	return (
		<section id="welcome-world">
			<div className="welcome-message">
				<h2>ALL new games are</h2>
				<h3>Only in GamesPlay</h3>
			</div>
			<img src="/images/four_slider_img01.png" alt="hero" />

			<div id="home-page">
				<h1>Latest Games</h1>
				{games.length !== 0 ? (
					games.map((game) => (
						<LatestGamesCard
							key={game._id}
							imageUrl={game.imageUrl}
							title={game.title}
							id={game._id}
							navigationChangeHandler={navigationChangeHandler}
						/>
					))
				) : (
					<p className="no-articles">No games yet</p>
				)}
			</div>
		</section>
	);
}

export default WelcomeWorld;
