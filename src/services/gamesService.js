const baseUrl = "http://localhost:3030/data";

export function getAllGames() {
	return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc`).then((res) => res.json());
}

export function getLatestGames() {
	return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`).then((res) => res.json());
}

export function getOneGame(id) {
	return fetch(`${baseUrl}/games/${id}`).then((res) => res.json());
}
