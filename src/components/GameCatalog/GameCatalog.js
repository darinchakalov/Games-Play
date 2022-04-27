import { useEffect, useState } from "react";
import GameCatalogSingleGame from "./GameCatalogSingleGame.js";

export default function GameCatalog() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3030/data/games?sortBy=_createdOn%20desc")
			.then((res) => res.json())
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
					></GameCatalogSingleGame>
				))
			) : (
				<h3 className="no-articles">No articles yet</h3>
			)}
		</section>
	);
}
