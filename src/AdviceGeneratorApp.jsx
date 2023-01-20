// Styles
import "./styles/styles.css";
import "./styles/colors.css";
import "./styles/typography.css";

// Assets
import MobileDivider from "./images/pattern-divider-mobile.svg";
import DesktopDivider from "./images/pattern-divider-desktop.svg";

const AdvanceGeneratorApp = () => {
	return (
		<main className="adviceMain">
			<div className="adviceCard">
				<p className="adviceNumber">Advice number 001</p>
				<p className="adviceText">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, consequuntur!
				</p>
				{/* <img className="desktopDivider" src={DesktopDivider} alt="page divider" /> */}
				{/* <img className="mobileDivider" src={MobileDivider} alt="page divider" /> */}
				<button className="nextAdvice"></button>
			</div>
		</main>
	);
};

export default AdvanceGeneratorApp;
