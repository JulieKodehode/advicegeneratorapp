// Libraries
import { useState, useEffect } from "react";

// Styles
import "./styles/styles.css";
import "./styles/colors.css";
import "./styles/typography.css";

// Components
import Divider from "./components/Divider/Divider";

const AdvanceGeneratorApp = () => {
	const [adviceData, setAdviceData] = useState([]);
	const getAdvice = () => {
		fetch("https://api.adviceslip.com/advice")
			.then((response) => response.json())
			.then((adviceData) => {
				console.log(adviceData);
				console.log(adviceData.slip);
				console.log(adviceData.slip.advice);
				console.log(adviceData.slip.id);

				setAdviceData(adviceData.slip);
			})
			// Catches errors
			.catch((error) => {
				console.log(error.message);
			});
	};

	// useEffect to only fetch once
	useEffect(() => {
		getAdvice();
	}, []);

	// Handleclick on button to run the getAdvice function again (new advice)
	const handleClick = () => {
		getAdvice();
	};

	return (
		<main className="adviceMain">
			<div className="adviceCard">
				<h1 className="adviceNumber">Advice #{adviceData.id}</h1>
				<h4 className="adviceText">"{adviceData.advice}"</h4>
				<Divider />
				<button onClick={handleClick} className="nextAdvice"></button>
			</div>
		</main>
	);
};

export default AdvanceGeneratorApp;
