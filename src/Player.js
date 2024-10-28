// src/Player.js
import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
	return (
		<Card
			style={{
				width: "18rem",
				margin: "1rem auto",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
			}}
		>
			<Card.Img
				variant="top"
				src={imageUrl}
				alt={name}
				style={{ height: "200px", objectFit: "cover" }}
			/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>Team: {team}</Card.Text>
				<Card.Text>Nationality: {nationality}</Card.Text>
				<Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
				<Card.Text>Age: {age}</Card.Text>
			</Card.Body>
		</Card>
	);
};

// Define default props
Player.defaultProps = {
	name: "Unknown Player",
	team: "Unknown Team",
	nationality: "Unknown",
	jerseyNumber: 0,
	age: 0,
	imageUrl: "https://via.placeholder.com/200",
};

Player.propTypes = {
	name: PropTypes.string.isRequired,
	team: PropTypes.string.isRequired,
	nationality: PropTypes.string.isRequired,
	jerseyNumber: PropTypes.number.isRequired,
	age: PropTypes.number.isRequired,
	imageUrl: PropTypes.string.isRequired,
};

export default Player;
