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
	
		
	}
	
	deleteJob(e) { 
		console.log(e.target.id)
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
			const jobRendering = this.state.experienceFormAndDisplayArray.map((job,i) => (
			
			<ExperienceFormAndDisplay
				id={"formAtIndex" + i}
				index = {i}
				key={job.toString()+i}
				view={this.state.formView}
				deleteJobOnClick={(e) => this.deleteJob(e)}
			/>
			
		));
		console.log(typeof jobRendering)
		
		return (
			<main>
				<h1>
					<u>Experience</u>
				</h1>

				<form id="experienceForm" onSubmit={this.handleSubmit}>
					{jobRendering}
				</form>
			
				<EditAndSaveButton
						view={this.state.formView}
						toggleView={this.toggleJobView}
						addJobOnClick={this.addJob}
				/>			
			</main>

		);
	}
}
