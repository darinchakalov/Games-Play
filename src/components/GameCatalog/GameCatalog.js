import { useEffect, useState, lazy, Suspense } from "react";
import * as gamesService from "../../services/gamesService.js";
// import GameCatalogSingleGame from "./GameCatalogSingleGame.js";
const GameCatalogSingleGame = lazy(() => import("./GameCatalogSingleGame.js"));

export default function GameCatalog() {
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
					<Suspense fallback={<p>Loading... </p>}>
						<GameCatalogSingleGame
							key={game._id}
							imageUrl={game.imageUrl}
							category={game.category}
							title={game.title}
							id={game._id}
						></GameCatalogSingleGame>
					</Suspense>
				))
			) : (
				<h3 className="no-articles">No articles yet</h3>
			)}
		</section>
	);
}
