import { useEffect, useState } from "react";
import { Characters } from "./Characters";

function NavPage(props) {
	return (
		<div className="d-flex justify-content-between align-items-center">
			<p className="align-items-center">Page: {props.page}</p>
			<button
				type="button"
				className="btn btn-primary btn-sm"
				onClick={() => props.setPage(props.page + 1)}
			>
				Next: {props.page + 1}
			</button>
		</div>
	);
}

function ListCharacters() {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character?page=${page}`
			);
			const data = await response.json();
			setLoading(false);
			setCharacters(data.results);
		}

		fetchData();
	}, [page]);

	return (
		<div className="container">
			<NavPage page={page} setPage={setPage} />

			{loading ? (
				<div class="spinner-border text-light" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			) : (
				<div className="row">
					{characters.map((character) => {
						return (
							<div className="col-md-6" key={character.id}>
								<Characters character={character} />
							</div>
						);
					})}
				</div>
			)}
			<NavPage page={page} setPage={setPage} />
		</div>
	);
}

export default ListCharacters;
