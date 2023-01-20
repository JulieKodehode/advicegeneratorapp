// Assets
import MobileDivider from "../../images/pattern-divider-mobile.svg";
import DesktopDivider from "../../images/pattern-divider-desktop.svg";

const Divider = () => {
	let Divider = "";
	let Desktop = DesktopDivider;
	let Mobile = MobileDivider;

	// > Greater then, 426px is @media width
	if (window.innerWidth > 426) {
		Divider = Desktop;
	} else {
		// window.location.reload();
		// Need to find a way to reload ONCE if switched to mobile.....
		Divider = Mobile;
	}

	return (
		<>
			<img src={Divider} alt="Divider" />
		</>
	);
};

export default Divider;
