export default function LatestGamesCard({ imageUrl, title, id, navigationChangeHandler }) {
	const onDetailsClick = (e) => {
		e.preventDefault();
		navigationChangeHandler(`/details/${id}`);
	};

	return (
		<div className="game">
			<div className="image-wrap">
				<img src={imageUrl} alt="" />
			</div>
			<h3>{title}</h3>
			<div className="rating">
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
			</div>
			<div className="data-buttons">
				<a href={`/details/${id}`} className="btn details-btn" onClick={onDetailsClick}>
					Details
				</a>
			</div>
		</div>
	);
}
