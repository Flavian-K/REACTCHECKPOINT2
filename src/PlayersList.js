// src/PlayersList.js
import React from "react";
import players from "./players";
import Player from "./Player";

const PlayersList = () => {
	return (
		<div
			style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
		>
			{players.map((player, index) => (
				<Player key={index} {...player} />
			))}
		</div>
	);
};

export default PlayersList;
