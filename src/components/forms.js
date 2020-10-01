import React from "react";
export default class JobForm extends React.Component {
	render() {
		return (
			<form id="jobForm">
				<div id="job">
					<label>
						Company Name:
						<input type="text" value="" placeholder="ABC Company"></input>
					</label>
					<label>
						Location:
						<input type="text" value="" placeholder="New York City, NY"></input>
					</label>
					<label>
						Role:
						<input
							type="text"
							value=""
							placeholder="Software Developer"
						></input>
					</label>
					<label>
						Duration:
						<input
							type="text"
							value=""
							placeholder="9/30/2020 - Present
                        "
						></input>
					</label>
					<label>
						Tasks
						<ul>
							<li>
								<input type="text" value="" placeholder="task1"></input>
							</li>
							<li>
								<input type="text" value="" placeholder="task2"></input>
							</li>
							<li>
								<input type="text" value="" placeholder="task3"></input>
							</li>
						</ul>
					</label>
				</div>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}
