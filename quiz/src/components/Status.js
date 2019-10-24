import React from "react";

function Status(props) {
	const progress = (props.time / 60) * 100;
	let ProgressBar = "ProgressBar"
	let Percent = "Percent"
	if(props.time <= 20) {
		ProgressBar += " ProgressBar-Danger"
		Percent += " Percent-Danger"
	}
	return (
		<div className="Header">
			<div className="LeftSide">
				<div className={ProgressBar} style={{ width: (progress * 350) / 100 }}>
					<span className={Percent}>
						<i className="fa fa-hourglass-start" aria-hidden="true"></i>
						{props.time}s
					</span>
				</div>
			</div>
			<div className="RightSide">
				<div className="CurrentQuestion">{props.currentQuestion + 1}/{props.totalQuestion}</div>
			</div>
		</div>
	);
}

export default Status;
