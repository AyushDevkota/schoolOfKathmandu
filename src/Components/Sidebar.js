import classes from "./sidebar.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Info from "./Info";

const Sidebar = ({ changeState, info }) => {
	const closeSidebar = () => changeState(false);

	return (
		<aside className={classes.sidebar}>
			<AiOutlineClose
				style={{
					cursor: "pointer",
					fontSize: "1.5em",
					position: "relative",
					left: "95%",
				}}
				onClick={closeSidebar}
			/>
			<div className={classes.container}>
				<Info title="Name" answer={info.name} />
				<Info title="Number of Building" answer={info.buildingCount} />
				<Info title="Number of Personnel" answer={info.personnelCount} />
				<Info title="Number of Students" answer={info.studentCount} />
				<Info title="Operator Type" answer={info.operatorType} />
			</div>
		</aside>
	);
};

export default Sidebar;
