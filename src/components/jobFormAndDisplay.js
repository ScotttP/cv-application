import React from "react";

export default function JobFormAndDisplay(props) {
	const currentView = props.jobInfo.formView;
	if (!currentView) {
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
					id={props.id}
					name="companyName"
					type="text"
					value={props.jobInfo.companyName} //how do i get this to be the actual target value?
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
{
	/* <JobDisplay jobDisplayInfo={props} />;
<JobForm jobFormInfo={props} />; */
}
