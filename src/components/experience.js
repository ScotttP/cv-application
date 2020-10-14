import React from "react";
import ExperienceFormAndDisplay from "./experienceFormAndDisplay";
import EditAndSaveButton from "./editAndSaveButton";


export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			experienceFormAndDisplayArray: [<ExperienceFormAndDisplay />],
			formView: true,
		}
		this.addJob = this.addJob.bind(this);
		this.toggleJobView = this.toggleJobView.bind(this);
	}

	addJob() {
		this.setState({
			experienceFormAndDisplayArray: [
				...this.state.experienceFormAndDisplayArray,
				<ExperienceFormAndDisplay />,
			],
		});
		console.log(this.state.experienceFormAndDisplayArray)
	}
	deleteJob(e) { //this doesn't work
		console.log(this.state.experienceFormAndDisplayArray)
		let index = e.target.id.substring(e.target.id.length - 1, 17)
		let newArray = this.state.experienceFormAndDisplayArray.splice(index, 1)
		console.log(newArray)
		this.setState({
			experienceFormAndDisplayArray: newArray
		})

	}
	toggleJobView() {
		this.setState({
			formView: !this.state.formView,
		});
	}

	handleSubmit(e) {
		console.log("form submit button was clicked");
		e.preventDefault();
	}

	render() {
		let jobRendering = this.state.experienceFormAndDisplayArray.map((job, i) => (
			<ExperienceFormAndDisplay
				id={"formAtIndex" + i}
				index = {i}
				key={job + i}
				view={this.state.formView}
				deleteJobOnClick={(e) => this.deleteJob(e)}
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
