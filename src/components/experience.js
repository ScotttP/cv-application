import React from "react";
import JobForm from "./jobForm";
import JobDisplay from "./jobDisplay";

export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobFormsArray: [<JobForm />],
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
			jobFormsArray: [...this.state.jobFormsArray, <JobForm />],
		});
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		let isForm = this.state.formView;
		const renderDisplay = () => {
			if (isForm) {
				return <JobForm jobInfo={this.state} onChange={this.handleChange} />;
			} else {
			}
		};
		// let form = this.state.jobFormsArray.map((job, i) => (
		// 	<JobForm id={job.toString() + i} key={job + i} />
		// )); // need to figure out a way to toggle between form view and display view.
		//maybe control the state here and pass props down to job form?
		return (
			<main>
				<h1>
					<u>Experience</u>
				</h1>
				<button>Edit</button>
				<form id="experienceForm" onSubmit={this.handleSubmit}>
					{renderDisplay()}
					<input type="submit" value="Submit"></input>
				</form>

				<button onClick={this.addJob} id="addJob">
					+
				</button>
			</main>
		);
	}
}
