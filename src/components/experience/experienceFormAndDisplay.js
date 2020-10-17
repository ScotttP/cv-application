import React from "react";

export default class ExperienceFormAndDisplay extends React.Component {
	render() {
		if (this.props.view === false) {
			return (
				<div id={this.props.index}>
					<div>
						<h2>Company Name:</h2>
						<p>{this.props.data.companyName}</p>
					</div>
					<div>
						<h2>Location:</h2>
						<p>{this.props.data.location}</p>
					</div>
					<div>
						<h2>Role Title:</h2>
						<p>{this.props.data.roleTitle}</p>
					</div>
					<div>
						<h2>Start Date:</h2>
						<p>{this.props.data.startDate}</p>
						<h2>End Date:</h2>
						<p>{this.props.data.endDate}</p>
					</div>
					<div>
						<h2>Tasks</h2>
						<p>{this.props.data.tasks}</p>
					</div>
				</div>
			);
		} else {
			return (
				<div id={this.props.id}>
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
					<label>
						Start Date:
						<input
							name="startDate"
							type="Date"
							id={`startDate${this.props.index}`}
							value={this.props.data.startDate}
							onChange={this.props.handleChange}
						></input>
						End Date:
						<input
							name="endDate"
							type="Date"
							id={`endDate${this.props.index}`}
							value={this.props.data.endDate}
							onChange={this.props.handleChange}
						></input>
					</label>
					<label>
						Tasks
						<textarea
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
