export function Characters({ character }) {
	return (
		<div
			className="card my-4 border-0 shadow p-0 mb-4 bg-body rounded"
			Style={{ maxWidth: "640px" }}
		>
			<div className="row g-0">
				<div className="col-md-4 bg-dark">
					<img
						src={character.image}
						alt={character.name}
						Style={{ height: "500px" }}
						className="img-fluid rounded-pill bg-dark"
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body bg-dark py-1">
						<h5>{character.name}</h5>
						<p className="card-text fs-6">Status: {character.status}</p>
						<p className="card-text fs-6">Specie: {character.species}</p>
						<p className="card-text fs-6">Origin: {character.origin.name}</p>
						<p className="card-text fs-6">
							Location: {character.location.name}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
