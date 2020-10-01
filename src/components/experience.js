import React from "react";
import JobForm from "./forms";

export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobFormsArray: [],
		};
		this.handleAddJob = this.handleAddJob.bind(this);
	}

	handleAddJob() {}

	render() {
		console.log(this.state.jobFormsArray);
		return (
			<main>
				<h1>
					<u>Experience</u>
				</h1>
				<button>Edit</button>
				<JobForm />

				<button onClick={this.handleAddJob} id="addJob">
					+
				</button>
			</main>
		);
	}
}
