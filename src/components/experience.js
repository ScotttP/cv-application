import React from "react";
import JobForm from "./forms";

export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobFormsArray: [<JobForm />],
		};
		this.handleAddJob = this.handleAddJob.bind(this);
	}

	handleAddJob() {
		this.setState({
			jobFormsArray: [...this.state.jobFormsArray, <JobForm />],
		});
	}

	render() {
		return (
			<main>
				<h1>
					<u>Experience</u>
				</h1>
				<button>Edit</button>
				<form id="experienceForm">
					{this.state.jobFormsArray.map((job, i) => (
						<JobForm key={job + i} />
					))}
					<input type="submit" value="Submit"></input>
				</form>

				<button onClick={this.handleAddJob} id="addJob">
					+
				</button>
			</main>
		);
	}
}
