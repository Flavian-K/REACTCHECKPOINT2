// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayersList";
import "./App.css";

const App = () => {
	return (
		<div style={{ padding: "20px" }}>
			<h1 style={{ textAlign: "center", color: "#d147a3" }}>
				FIFA Player Cards
			</h1>
			<PlayersList />
		</div>
	);
};

export default App;
