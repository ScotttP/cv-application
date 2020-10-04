import React from "react";
export default class JobForm extends React.Component {
	deleteJob() {
		console.log("delete this current job!");
	}

	render() {
		console.log(this.props.jobInfo.companyName);
		return (
			<div id={this.props.id}>
				<label>
					Company Name:
					<input
						name="companyName"
						type="text"
						value={this.props.jobInfo.companyName}
						onChange={this.props.onChange}
						placeholder="ABC Company"
					></input>
				</label>
				<label>
					Location:
					<input
						name="location"
						type="text"
						value={this.props.jobInfo.location}
						onChange={this.handleChange}
						placeholder="New York City, NY"
					></input>
				</label>
				<label>
					Role Title:
					<input
						name="roleTitle"
						type="text"
						value={this.props.jobInfo.roleTitle}
						onChange={this.handleChange}
						placeholder="Software Developer"
					></input>
				</label>
				<label>
					Start Date:
					<input
						name="startDate"
						type="Date"
						value={this.props.jobInfo.startDate}
						onChange={this.handleChange}
					></input>
					End Date:
					<input
						name="endDate"
						type="Date"
						value={this.props.jobInfo.endDate}
						onChange={this.handleChange}
					></input>
				</label>
				<label>
					Tasks
					<textarea
						name="tasks"
						type="text"
						value={this.props.jobInfo.tasks}
						onChange={this.handleChange}
						placeholder="Enter Tasks Here"
					></textarea>
				</label>
				<button id="deleteJob" onClick={this.deleteJob}>
					x
				</button>
			</div>
		);
	}
}
