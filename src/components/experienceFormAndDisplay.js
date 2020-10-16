import React from "react";

export default class ExperienceFormAndDisplay extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			companyName: "",
			location: "",
			roleTitle: "",
			startDate: "",
			endDate: "",
			tasks: "",
		}
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) { 
		this.setState({
			[e.target.name]: e.target.value
		})
	}


	render () {
		if (this.props.view === false){
			return (
				<div id={this.props.index}>
				<div>
					<h2>Company Name:</h2>
					<p>{this.state.companyName}</p>
				</div>
				<div>
					<h2>Location:</h2>
					<p>{this.state.location}</p>
				</div>
				<div>
					<h2>Role Title:</h2>
					<p>{this.state.roleTitle}</p>
				</div>
				<div>
					<h2>Start Date:</h2>
					<p>{this.state.startDate}</p>
					<h2>End Date:</h2>
					<p>{this.state.endDate}</p>
				</div>
				<div>
					<h2>Tasks</h2>
					<p>{this.state.tasks}</p>
				</div>

			</div>
				
			)

		} else {
			return (
				<div id={this.props.id}>
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
				<button id={`deleteJobAtIndex${this.props.index}`} onClick={(e) => this.props.deleteJobOnClick(e)}>x</button>
			</div>
			)
		}
		}
		
	
}
