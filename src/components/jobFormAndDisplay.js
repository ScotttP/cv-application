import React from "react";

export default function JobFormAndDisplay(props) {
	const currentView = props.jobInfo.formView;
	if (!currentView) {
		return (
			<div>
				<h1>Job Display!</h1>;
			</div>
		);
	}
	return (
		<div>
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
						value={props.jobInfolocation}
						onChange={props.onChange}
						placeholder="New York City, NY"
					></input>
				</label>
				<label>
					Role Title:
					<input
						name="roleTitle"
						type="text"
						value={props.jobInforoleTitle}
						onChange={props.onChange}
						placeholder="Software Developer"
					></input>
				</label>
				<label>
					Start Date:
					<input
						name="startDate"
						type="Date"
						value={props.jobInfostartDate}
						onChange={props.onChange}
					></input>
					End Date:
					<input
						name="endDate"
						type="Date"
						value={props.jobInfoendDate}
						onChange={props.onChange}
					></input>
				</label>
				<label>
					Tasks
					<textarea
						name="tasks"
						type="text"
						value={props.jobInfotasks}
						onChange={props.onChange}
						placeholder="Enter Tasks Here"
					></textarea>
				</label>
				<button id="deleteJob">x</button>
			</div>
		</div>
	);
}
{
	/* <JobDisplay jobDisplayInfo={props} />;
<JobForm jobFormInfo={props} />; */
}
