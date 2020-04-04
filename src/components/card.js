import React from 'react';
function Cards({ character }) {
	return (
		<div className="col-md-4 my-3">
			<div className="card text-white bg-dark mb-3">
				<img src={character.image} className="card-img-top" />
				<div className="card-body">
					<div id="title">
						<h5 className="text-center">{character.name}</h5>
					</div>
					<ul id="lista">
						<li>Specie: {character.species}</li>
						<li>Gender: {character.gender}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
