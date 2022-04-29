import { useEffect, useState } from "react";
import GameCatalogSingleGame from "./GameCatalogSingleGame.js";

import * as gamesService from "../../services/gamesService.js";

export default function GameCatalog({ navigationChangeHandler }) {
	const [games, setGames] = useState([]);

	useEffect(() => {
		gamesService
			.getAllGames()
			.then((data) => setGames(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<section id="catalog-page">
			<h1>All Games</h1>
			{games.length !== 0 ? (
				games.map((game) => (
					<GameCatalogSingleGame
						key={game._id}
						imageUrl={game.imageUrl}
						category={game.category}
						title={game.title}
						id={game._id}
						navigationChangeHandler={navigationChangeHandler}
					></GameCatalogSingleGame>
				))
			) : (
				<h3 className="no-articles">No articles yet</h3>
			)}
		</section>
	);
}
