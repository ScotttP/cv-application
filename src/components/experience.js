import React from "react";
import JobFormAndDisplay from "./jobFormAndDisplay";
import EditAndSaveButton from "./editAndSaveButton";

export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobFormAndDisplayArray: [<JobFormAndDisplay />],
			formView: true,
			companyName: "",
			location: "",
			roleTitle: "",
			startDate: "",
			endDate: "",
			tasks: "",
		};
		this.addJob = this.addJob.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.toggleJobView = this.toggleJobView.bind(this);
	}

	addJob() {
		this.setState({
			jobFormAndDisplayArray: [
				...this.state.jobFormAndDisplayArray,
				<JobFormAndDisplay />,
			],
		});
		console.log(this.state.infoArray);
	}
	toggleJobView() {
		this.setState({
			formView: !this.state.formView,
		});
	}
	handleChange(e, i) {
		console.log(i); //index of this specific form
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		console.log("form was saved!");
		e.preventDefault();
	}

	render() {
		let jobRendering = this.state.jobFormAndDisplayArray.map((job, i) => (
			<JobFormAndDisplay
				id={i}
				key={job + i}
				jobInfo={this.state}
				onChange={(e) => this.handleChange(e, i)}
			/>
		));
		return (
			<main>
				<h1>
					<u>Experience</u>
				</h1>

				<form id="experienceForm" onSubmit={this.handleSubmit}>
					{jobRendering}
					<EditAndSaveButton
						view={this.state.formView}
						toggleView={this.toggleJobView}
						addJobOnClick={this.addJob}
					/>
				</form>
			</main>
		);
	}
}
