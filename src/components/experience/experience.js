import React from "react";
import ExperienceFormAndDisplay from "./experienceFormAndDisplay";
import EditAndSaveButton from "../editAndSaveButton";

export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			experienceData: [
				{
					companyName: "",
					location: "",
					roleTitle: "",
					startDate: "",
					endDate: "",
					tasks: "",
				},
			],
			formView: true,
		};
		this.addJob = this.addJob.bind(this);
		this.toggleView = this.toggleView.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.wrapperFunction = this.wrapperFunction.bind(this);
	}

	addJob() {
		this.setState({
			experienceData: [
				...this.state.experienceData,
				{
					companyName: "",
					location: "",
					roleTitle: "",
					startDate: "",
					endDate: "",
					tasks: "",
				},
			],
		});
	}

	deleteJob(e) {
		const index = Number(e.target.id.substring(e.target.id.length - 1, 17));
		const copyFormArray = Object.assign([], this.state.experienceData);
		copyFormArray.splice(index, 1);
		this.setState({
			experienceData: copyFormArray,
		});
	}
	handleChange(e) {
		const index = Number(e.target.id.substring(e.target.id.length - 1, 12));
		const copyFormArray = JSON.parse(JSON.stringify(this.state.experienceData));
		copyFormArray[index][e.target.name] = e.target.value;
		this.setState({
			experienceData: copyFormArray,
		});
	}

	toggleView() {
		this.setState({
			formView: !this.state.formView,
		});
		console.log("toggleCLicked");
	}

	handleSubmit(e) {
		console.log("form submit button was clicked");
		e.preventDefault();
	}
	wrapperFunction(e) {
		//when the save button is clicked, the toggleView function and submit button fire off so we can have 2 functions occur on 1 click
		this.toggleView();
		this.handleSubmit(e);
	}

	render() {
		const jobRendering = this.state.experienceData.map((job, i) => (
			<ExperienceFormAndDisplay
				id={"formAtIndex" + i}
				index={i}
				key={job.toString() + i}
				view={this.state.formView}
				deleteJobOnClick={(e) => this.deleteJob(e)}
				data={this.state.experienceData[i]}
				handleChange={this.handleChange}
			/>
		));

		return (
			<main id="experienceFormContainer">
				<h1>
					<u>Experience</u>
				</h1>

				<form id="experienceForm" onSubmit={this.handleSubmit}>
					{jobRendering}
					<EditAndSaveButton
						view={this.state.formView}
						toggleView={this.toggleView}
						addSection={this.addJob}
						wrapperFunction={this.wrapperFunction}
					/>
				</form>
			</main>
		);
	}
}
