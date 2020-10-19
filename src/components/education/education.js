import React from "react";
import EditAndSaveButton from "../editAndSaveButton";
import EducationFormAndDisplay from "./educationFormAndDisplay";

export default class Education extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			educationData: [
				{
					institutionName: "",
					major: "",
					minor: "",
					degreeType: "",
					gpa: "",
					yearOfGraduation: "",
				},
			],
			formView: false,
		};
		this.addEducation = this.addEducation.bind(this);
		this.toggleView = this.toggleView.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.wrapperFunction = this.wrapperFunction.bind(this);
	}
	addEducation() {
		this.setState({
			educationData: [
				...this.state.educationData,
				{
					institutionName: "",
					major: "",
					minor: "",
					degreeType: "",
					gpa: "",
					yearOfGraduation: "",
				},
			],
		});
	}
	deleteEducation(e) {
		const index = Number(e.target.id.substring(e.target.id.length - 1, 23));
		const copyFormArray = Object.assign([], this.state.educationData);
		copyFormArray.splice(index, 1);
		this.setState({
			educationData: copyFormArray,
		});
	}
	handleChange(e) {
		const index = Number(e.target.id.substring(e.target.id.length - 1, 19));
		const copyFormArray = JSON.parse(JSON.stringify(this.state.educationData));
		copyFormArray[index][e.target.name] = e.target.value;
		this.setState({
			educationData: copyFormArray,
		});
	}
	toggleView() {
		this.setState({
			formView: !this.state.formView,
		});
	}
	handleSubmit(e) {
		const { educationData } = this.state;
		localStorage.setItem("educationData", JSON.stringify(educationData));
		e.preventDefault();
		e.preventDefault();
	}
	wrapperFunction(e) {
		//when the save button is clicked, the toggleView function and submit button fire off so we can have 2 functions occur on 1 click
		this.toggleView();
		this.handleSubmit(e);
	}
	componentDidMount() {
		let educationData = JSON.parse(localStorage.getItem("educationData"));
		if (educationData === null) {
			educationData = this.state.educationData;
		}

		this.setState({ educationData });
	}
	render() {
		const educationRendering = this.state.educationData.map((education, i) => (
			<EducationFormAndDisplay
				id={"formAtIndex" + i}
				index={i}
				key={education.toString() + i}
				view={this.state.formView}
				deleteEducationOnClick={(e) => this.deleteEducation(e)}
				data={this.state.educationData[i]}
				handleChange={this.handleChange}
			/>
		));
		return (
			<main id="educationFormContainer">
				<h1>
					<u>Education</u>
				</h1>

				<form id="educationForm" onSubmit={this.handleSubmit}>
					{educationRendering}
					<EditAndSaveButton
						section="education"
						view={this.state.formView}
						toggleView={this.toggleView}
						addSection={this.addEducation}
						wrapperFunction={this.wrapperFunction}
					/>
				</form>
			</main>
		);
	}
}
