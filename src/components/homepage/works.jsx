import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./KLFY.PNG"
								alt="klfy"
								className="work-image"
							/>
							<div className="work-title">KLFY NEWS 10</div>
							<div className="work-subtitle">
								Photojournalist, Editor
							</div>
							<div className="work-duration">2020 - Present</div>
						</div>

						<div className="work">
							<img
								src="./KATC.PNG"
								alt="katc"
								className="work-image"
							/>
							<div className="work-title">KATC TV-3</div>
							<div className="work-subtitle">
								Audio Engineer, Camera Operator
							</div>
							<div className="work-duration">Feb 2019 - Dec 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
