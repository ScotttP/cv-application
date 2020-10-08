import React from "react";
export default function JobForm(props) {
	return (
		<div id={props.id}>
			<label>
				Company Name:
				<input
					name="companyName"
					type="text"
					value={props.jobFormInfo.companyName}
					onChange={props.onChange}
					placeholder="ABC Company"
				></input>
			</label>
			<label>
				Location:
				<input
					name="location"
					type="text"
					value={props.jobFormInfolocation}
					onChange={props.onChange}
					placeholder="New York City, NY"
				></input>
			</label>
			<label>
				Role Title:
				<input
					name="roleTitle"
					type="text"
					value={props.jobFormInforoleTitle}
					onChange={props.onChange}
					placeholder="Software Developer"
				></input>
			</label>
			<label>
				Start Date:
				<input
					name="startDate"
					type="Date"
					value={props.jobFormInfostartDate}
					onChange={props.onChange}
				></input>
				End Date:
				<input
					name="endDate"
					type="Date"
					value={props.jobFormInfoendDate}
					onChange={props.onChange}
				></input>
			</label>
			<label>
				Tasks
				<textarea
					name="tasks"
					type="text"
					value={props.jobFormInfotasks}
					onChange={props.onChange}
					placeholder="Enter Tasks Here"
				></textarea>
			</label>
			<button id="deleteJob">x</button>
		</div>
	);
}
{
	/*  */
}
