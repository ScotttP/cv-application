import React from "react";
import JobFormAndDisplay from "./jobFormAndDisplay";

export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobFormsArray: [<JobFormAndDisplay />],
			formView: true,
			companyName: "poop",
			location: "",
			roleTitle: "",
			startDate: "",
			endDate: "",
			tasks: "",
		};
		this.addJob = this.addJob.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	addJob() {
		this.setState({
			jobFormsArray: [...this.state.jobFormsArray, <JobFormAndDisplay />],
		});
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		console.log("form was saved!");
		e.preventDefault();
	}

	render() {
		let jobRendering = this.state.jobFormsArray.map((job, i) => (
			<JobFormAndDisplay
				id={job.toString() + i}
				key={job + i}
				jobInfo={this.state}
				onChange={this.handleChange}
			/>
		));
		return (
			<main>
				<h1>
					<u>Experience</u>
				</h1>
				<button>Edit</button>
				<form id="experienceForm" onSubmit={this.handleSubmit}>
					{jobRendering}
					<input type="submit" value="Submit"></input>
				</form>

				<button onClick={this.addJob} id="addJob">
					+
				</button>
			</main>
		);
	}
}
