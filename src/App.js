import { useState, useEffect } from "react";
import Map from "./Components/Map";
import Sidebar from "./Components/Sidebar";

const INITIAL_STATE = {
	name: "",
	buildingCount: "",
	personnelCount: "",
	operatorType: "",
	studentCount: "",
};

function App() {
	const [showSidebar, setShowSidebar] = useState(false);
	const [info, setInfo] = useState(INITIAL_STATE);

	useEffect(() => {
		setShowSidebar(false);
	}, []);

	return (
		<>
			<Map changeState={setShowSidebar} setInfo={setInfo} />
			{showSidebar && <Sidebar changeState={setShowSidebar} info={info} />}
		</>
	);
}

export default App;
