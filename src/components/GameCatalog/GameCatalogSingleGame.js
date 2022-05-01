import { Link } from "react-router-dom";

export default function GameCatalogSingleGame({ imageUrl, category, title, id }) {
	return (
		<div className="allGames">
			<div className="allGames-info">
				<img src={imageUrl} alt="game-pho" />
				<h6>{category}</h6>
				<h2>{title}</h2>
				<Link to={`/games/${id}`} className="details-button">
					Details
				</Link>
			</div>
		</div>
	);
}
