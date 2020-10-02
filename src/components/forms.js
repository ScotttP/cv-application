import React from "react";
export default class JobForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			companyName: "",
			location: "",
			roleTitle: "",
			startDate: "",
			endDate: "",
			tasks: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	deleteJob() {
		console.log("delete this current job!");
	}
	render() {
		return (
			<div id="job">
				<label>
					Company Name:
					<input
						name="companyName"
						type="text"
						value={this.state.companyName}
						onChange={this.handleChange}
						placeholder="ABC Company"
					></input>
				</label>
				<label>
					Location:
					<input
						name="location"
						type="text"
						value={this.state.location}
						onChange={this.handleChange}
						placeholder="New York City, NY"
					></input>
				</label>
				<label>
					Role Title:
					<input
						name="roleTitle"
						type="text"
						value={this.state.roleTitle}
						onChange={this.handleChange}
						placeholder="Software Developer"
					></input>
				</label>
				<label>
					Start Date:
					<input
						name="startDate"
						type="Date"
						value={this.state.startDate}
						onChange={this.handleChange}
					></input>
					End Date:
					<input
						name="endDate"
						type="Date"
						value={this.state.endDate}
						onChange={this.handleChange}
					></input>
				</label>
				<label>
					Tasks
					<textarea
						name="tasks"
						type="text"
						value={this.state.tasks}
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
