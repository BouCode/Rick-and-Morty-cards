import React from 'react';

function Cards({ character }) {
	return (
		<div className="col-md-4 my-3">
			<div className="card">
				<img src={character.image} className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">Name: {character.name}</h5>
					<ul id = "lista" >
						<li>Specie: {character.species}</li>
						<li>Gender: {character.gender}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
