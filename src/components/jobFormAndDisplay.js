import React from "react";

export default function ExperienceFormAndDisplay(props) {
	const currentView = props.jobInfo.formView;
	let experienceInformation = props.jobInfo.experienceFormInformationArray[props.index]
	console.log(experienceInformation.companyName)
	if (!currentView) { //if the user set the view to display mode
		return (
			<div id={props.id}>
				<div>
					<h2>Company Name:</h2>
					<p>{experienceInformation.companyName}</p>
				</div>
				<div>
					<h2>Location:</h2>
					<p>{experienceInformation.location}</p>
				</div>
				<div>
					<h2>Role Title:</h2>
					<p>{experienceInformation.roleTitle}</p>
				</div>
				<div>
					<h2>Start Date:</h2>
					<p>{experienceInformation.startDate}</p>
					<h2>End Date:</h2>
					<p>{experienceInformation.endDate}</p>
				</div>
				<div>
					<h2>Tasks</h2>
					<p>{experienceInformation.tasks}</p>
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
					value={experienceInformation.companyName} 
					onChange={props.onChange}
					placeholder="ABC Company"
				></input>
			</label>
			<label>
				Location:
				<input
					name="location"
					type="text"
					value={experienceInformation.location}
					onChange={props.onChange}
					placeholder="New York City, NY"
				></input>
			</label>
			<label>
				Role Title:
				<input
					name="roleTitle"
					type="text"
					value={experienceInformation.roleTitle}
					onChange={props.onChange}
					placeholder="Software Developer"
				></input>
			</label>
			<label>
				Start Date:
				<input
					name="startDate"
					type="Date"
					value={experienceInformation.startDate}
					onChange={props.onChange}
				></input>
				End Date:
				<input
					name="endDate"
					type="Date"
					value={experienceInformation.endDate}
					onChange={props.onChange}
				></input>
			</label>
			<label>
				Tasks
				<textarea
					name="tasks"
					type="text"
					value={experienceInformation.tasks}
					onChange={props.onChange}
					placeholder="Enter Tasks Here"
				></textarea>
			</label>
			<button id="deleteJob">x</button>
		</div>
	);
}
{
	/* <JobDisplay jobDisplayInfo={props} />;
<JobForm jobFormInfo={props} />; */
}
