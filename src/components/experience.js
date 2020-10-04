import React from "react";
import JobForm from "./forms";

export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobFormsArray: [<JobForm />],
			formView: true,
		};
		this.addJob = this.addJob.bind(this);
	}

	addJob() {
		this.setState({
			jobFormsArray: [...this.state.jobFormsArray, <JobForm />],
		});
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		let isForm = this.state.formView;
		const renderDisplay = () => {
			if (!isForm) {
				return; //<DisplayExperience />
			} else {
				return; //<JobForm />
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
