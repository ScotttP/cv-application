import React from "react";

export default class ExperienceFormAndDisplay extends React.Component {
	render() {
		let startDate = new Date(this.props.data.startDate).toLocaleDateString(
			"en-US"
		);
		let endDate = new Date(this.props.data.endDate).toLocaleDateString("en-US");

		if (this.props.view === false) {
			return (
				<div id={this.props.index} className="experienceFormContent">
					<div className="companyNameAndLocation">
						<p>
							<b>{this.props.data.companyName}</b>
						</p>
						<p>{this.props.data.location}</p>
					</div>
					<div className="roleTitleAndDates">
						<p className="roleTitle">{this.props.data.roleTitle}</p>
						<div id="dateWrap">
							<p id="startDate">{startDate}</p>
							<span>-</span>
							<p>{endDate}</p>
						</div>
					</div>
					<div className="tasks">
						<p>Tasks</p>
						<p className="tasksText">{this.props.data.tasks}</p>
					</div>
				</div>
			);
		} else {
			return (
				<div id={this.props.id} className="experienceFormContent">
					<label>
						Company Name:
						<input
							name="companyName"
							type="text"
							id={`companyName${this.props.index}`}
							value={this.props.data.companyName}
							onChange={this.props.handleChange}
							placeholder="ABC Company"
						></input>
					</label>
					<br></br>
					<label>
						Location:
						<input
							name="location"
							type="text"
							id={`location${this.props.index}`}
							value={this.props.data.location}
							onChange={this.props.handleChange}
							placeholder="New York City, NY"
						></input>
					</label>
					<br></br>
					<label>
						Role Title:
						<input
							name="roleTitle"
							type="text"
							id={`roleTitle${this.props.index}`}
							value={this.props.data.roleTitle}
							onChange={this.props.handleChange}
							placeholder="Software Developer"
						></input>
					</label>
					<br></br>
					<label>
						Start Date:
						<input
							name="startDate"
							type="Date"
							id={`startDate${this.props.index}`}
							value={this.props.data.startDate}
							onChange={this.props.handleChange}
						></input>
						<br></br>
						End Date:
						<input
							name="endDate"
							type="Date"
							id={`endDate${this.props.index}`}
							value={this.props.data.endDate}
							onChange={this.props.handleChange}
						></input>
					</label>
					<br></br>
					<label>
						Tasks
						<textarea
							rows="10"
							cols="50"
							name="tasks"
							type="text"
							id={`tasks${this.props.index}`}
							value={this.props.data.tasks}
							onChange={this.props.handleChange}
							placeholder="Enter Tasks Here"
						></textarea>
					</label>
					<button
						id={`deleteJobAtIndex${this.props.index}`}
						onClick={(e) => this.props.deleteJobOnClick(e)}
					>
						x
					</button>
				</div>
			);
		}
	}
}
