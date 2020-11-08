import React from "react";

export default function ExperienceFormAndDisplay(props) {
	let startDate = new Date(props.data.startDate).toLocaleDateString("en-US");
	let endDate = new Date(props.data.endDate).toLocaleDateString("en-US");

	if (props.view === false) {
		return (
			<div id={props.index} className="experienceFormContent">
				<div className="companyNameAndLocation">
					<p>
						<b>{props.data.companyName}</b>
					</p>
					<p>{props.data.location}</p>
				</div>
				<div className="roleTitleAndDates">
					<p className="roleTitle">{props.data.roleTitle}</p>
					<div id="dateWrap">
						<p id="startDate">{startDate}</p>
						<span>-</span>
						<p>{endDate}</p>
					</div>
				</div>
				<div className="tasks">
					<h4 className="tasksHeader">
						<u>Tasks:</u>
					</h4>
					<p className="tasksText">{props.data.tasks}</p>
				</div>
			</div>
		);
	} else {
		return (
			<div id={props.id} className="experienceFormContent">
				<label className="formLabels">
					<h4>Company Name:</h4>
					<input
						className="formInputs"
						name="companyName"
						type="text"
						id={`companyName${props.index}`}
						value={props.data.companyName}
						onChange={props.handleChange}
						placeholder="ABC Company"
					></input>
				</label>
				<br></br>
				<label className="formLabels">
					<h4>Location:</h4>
					<input
						className="formInputs"
						name="location"
						type="text"
						id={`location${props.index}`}
						value={props.data.location}
						onChange={props.handleChange}
						placeholder="New York City, NY"
					></input>
				</label>
				<br></br>
				<label className="formLabels">
					<h4>Role Title: </h4>
					<input
						className="formInputs"
						name="roleTitle"
						type="text"
						id={`roleTitle${props.index}`}
						value={props.data.roleTitle}
						onChange={props.handleChange}
						placeholder="Software Developer"
					></input>
				</label>
				<br></br>
				<label className="formLabels">
					<h4>Start Date: </h4>
					<input
						className="formInputs"
						name="startDate"
						type="Date"
						id={`startDate${props.index}`}
						value={props.data.startDate}
						onChange={props.handleChange}
					></input>
				</label>
				<br></br>
				<label className="formLabels">
					<h4>End Date:</h4>
					<input
						className="formInputs"
						name="endDate"
						type="Date"
						id={`endDate${props.index}`}
						value={props.data.endDate}
						onChange={props.handleChange}
					></input>
				</label>
				<br></br>
				<label className="textAreaFormLabel">
					<h4 className="tasksHeader">
						<u>Tasks:</u>
					</h4>
					<textarea
						name="tasks"
						type="text"
						id={`tasks${props.index}`}
						value={props.data.tasks}
						onChange={props.handleChange}
						placeholder="Enter Tasks Here"
					></textarea>
				</label>
				<div className="deleteButtonContainer">
					<button
						className="deleteButtons"
						id={`deleteJobAtIndex${props.index}`}
						onClick={(e) => props.deleteJobOnClick(e)}
					>
						x
					</button>
				</div>
			</div>
		);
	}
}
