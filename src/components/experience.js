import React from "react";
import ExperienceFormAndDisplay from "./experienceFormAndDisplay";
import EditAndSaveButton from "./editAndSaveButton";


export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			experienceFormAndDisplayArray: [<ExperienceFormAndDisplay key={0}/>],
			formView: true,
		}
		this.addJob = this.addJob.bind(this);
		this.toggleJobView = this.toggleJobView.bind(this);
	}

	addJob() {
		
		this.setState({
			experienceFormAndDisplayArray: [
				...this.state.experienceFormAndDisplayArray,
				<ExperienceFormAndDisplay/>,
			],
		});
		
		
	}
	
	deleteJob(index) { //this doesn't work

	const copyFormArray = Object.assign([], this.state.experienceFormAndDisplayArray)
	copyFormArray.splice(index, 1);
	console.log(copyFormArray[index])
	console.log(this)
	this.setState({
		experienceFormAndDisplayArray: copyFormArray
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
		let jobRendering = this.state.experienceFormAndDisplayArray.map((job,i) => (
			<ExperienceFormAndDisplay
				id={"formAtIndex" + i}
				index = {i}
				key={job.toString()+i}
				view={this.state.formView}
				deleteJobOnClick={this.deleteJob.bind(this, i)}
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
