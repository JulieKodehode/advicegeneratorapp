// Styles
import "./styles/styles.css";
import "./styles/colors.css";
import "./styles/typography.css";

// Components
import Divider from "./components/Divider/Divider";

const AdvanceGeneratorApp = () => {
	return (
		<main className="adviceMain">
			<div className="adviceCard">
				<p className="adviceNumber">Advice number 001</p>
				<p className="adviceText">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, consequuntur!
				</p>
				<Divider />
				<button className="nextAdvice"></button>
			</div>
		</main>
	);
};

export default AdvanceGeneratorApp;
