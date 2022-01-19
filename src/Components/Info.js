import classes from "./info.module.css";

const DEFAULT = "N/A";
const Info = ({ title, answer }) => {
	return (
		<div className={classes.info}>
			<p className={classes.title}>{title?.toUpperCase() || DEFAULT}</p>
			<p className={classes.answer}>{answer?.toUpperCase() || DEFAULT}</p>
		</div>
	);
};

export default Info;
