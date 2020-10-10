import React from "react";
import ExperienceFormAndDisplay from "./jobFormAndDisplay";
import EditAndSaveButton from "./editAndSaveButton";


export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			experienceFormAndDisplayArray: [<ExperienceFormAndDisplay />],
			formView: true,
			experienceFormInformationArray: [{
				companyName: "",
				location: "",
				roleTitle: "",
				startDate: "",
				endDate: "",
				tasks: "",
    		}]
		}
		this.addJob = this.addJob.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.toggleJobView = this.toggleJobView.bind(this);
	}

	addJob() {
		this.setState({
			experienceFormAndDisplayArray: [
				...this.state.experienceFormAndDisplayArray,
				<ExperienceFormAndDisplay />,
			],
			experienceFormInformationArray: [
				...this.state.experienceFormInformationArray,
				{
					companyName: "",
					location: "",
					roleTitle: "",
					startDate: "",
					endDate: "",
					tasks: "",
				}
				,
			]
		});
	}
	toggleJobView() {
		this.setState({
			formView: !this.state.formView,
		});
	}
	handleChange(e, i) { //how do I get this to setState of a certain index in the experienceFormInformationArray?
		
		console.log(this.state.experienceFormInformationArray[i])
		this.setState({
			
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		console.log("form submit button was clicked");
		e.preventDefault();
	}

	render() {
		let jobRendering = this.state.experienceFormAndDisplayArray.map((job, i) => (
			<ExperienceFormAndDisplay
				id={i}
				index = {i}
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
