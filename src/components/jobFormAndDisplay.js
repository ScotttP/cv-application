import React from "react";

export default function ExperienceFormAndDisplay(props) {
	const currentView = props.view;
	// let experienceInformation = props.jobInfo.experienceFormInformationArray[props.index]
	//console.log(props.jobInfo.companyName)
	if (!currentView) { //if the user set the view to display mode
		return (
			<div id={props.id}>
				<div>
					<h2>Company Name:</h2>
					<p>{props.jobInfo.companyName}</p>
				</div>
				<div>
					<h2>Location:</h2>
					<p>{props.jobInfo.location}</p>
				</div>
				<div>
					<h2>Role Title:</h2>
					<p>{props.jobInfo.roleTitle}</p>
				</div>
				<div>
					<h2>Start Date:</h2>
					<p>{props.jobInfo.startDate}</p>
					<h2>End Date:</h2>
					<p>{props.jobInfo.endDate}</p>
				</div>
				<div>
					<h2>Tasks</h2>
					<p>{props.jobInfo.tasks}</p>
				</div>
				<button id="deleteJob">x</button>
			</div>
		);
	}
	return (
		<div id={props.id}>
			<label>
				Company Name:
				<input
					name="companyName"
					type="text"
					value={props.jobInfo.companyName} 
					onChange={props.onChange}
					placeholder="ABC Company"
				></input>
			</label>
			<label>
				Location:
				<input
					name="location"
					type="text"
					value={props.jobInfo.location}
					onChange={props.onChange}
					placeholder="New York City, NY"
				></input>
			</label>
			<label>
				Role Title:
				<input
					name="roleTitle"
					type="text"
					value={props.jobInfo.roleTitle}
					onChange={props.onChange}
					placeholder="Software Developer"
				></input>
			</label>
			<label>
				Start Date:
				<input
					name="startDate"
					type="Date"
					value={props.jobInfo.startDate}
					onChange={props.onChange}
				></input>
				End Date:
				<input
					name="endDate"
					type="Date"
					value={props.jobInfo.endDate}
					onChange={props.onChange}
				></input>
			</label>
			<label>
				Tasks
				<textarea
					name="tasks"
					type="text"
					value={props.jobInfo.tasks}
					onChange={props.onChange}
					placeholder="Enter Tasks Here"
				></textarea>
			</label>
			<button id="deleteJob">x</button>
		</div>
	);
}
