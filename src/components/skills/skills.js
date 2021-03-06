import React from "react";
import EditAndSaveButton from "../editAndSaveButton";
import SkillsFormAndDisplay from "./skillsFormAndDisplay";

export default class Skills extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skillsData: [
				{
					skill: "HTML",
				},
				{
					skill: "CSS",
				},
				{
					skill: "Javascript",
				},
				{
					skill: "React",
				},
			],
			formView: false,
		};
		this.addSkill = this.addSkill.bind(this);
		this.toggleView = this.toggleView.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.wrapperFunction = this.wrapperFunction.bind(this);
	}
	addSkill() {
		this.setState({
			skillsData: [
				...this.state.skillsData,
				{
					skill: "",
				},
			],
		});
	}
	deleteSkill(e) {
		const index = Number(e.target.id.substring(e.target.id.length - 1, 23));
		const copyFormArray = Object.assign([], this.state.skillsData);
		copyFormArray.splice(index, 1);
		this.setState({
			skillsData: copyFormArray,
		});
	}
	handleChange(e) {
		const index = Number(e.target.id.substring(e.target.id.length - 1, 19));
		const copyFormArray = JSON.parse(JSON.stringify(this.state.skillsData));
		copyFormArray[index][e.target.name] = e.target.value;
		this.setState({
			skillsData: copyFormArray,
		});
	}
	toggleView() {
		this.setState({
			formView: !this.state.formView,
		});
	}
	handleSubmit(e) {
		const { skillsData } = this.state;
		localStorage.setItem("skillsData", JSON.stringify(skillsData));
		e.preventDefault();
	}

	wrapperFunction(e) {
		//when the save button is clicked, the toggleView function and submit button fire off so we can have 2 functions occur on 1 click
		this.toggleView();
		this.handleSubmit(e);
	}
	componentDidMount() {
		let skillsData = JSON.parse(localStorage.getItem("skillsData"));
		if (skillsData === null) {
			skillsData = this.state.skillsData;
		}
		this.setState({ skillsData });
	}

	render() {
		const skillsRendering = this.state.skillsData.map((skill, i) => (
			<SkillsFormAndDisplay
				id={"formAtIndex" + i}
				index={i}
				key={skill.toString() + i}
				view={this.state.formView}
				deleteSkillOnClick={(e) => this.deleteSkill(e)}
				data={this.state.skillsData[i]}
				handleChange={this.handleChange}
			/>
		));
		console.log(this.state.skillsData);
		return (
			<main id="skillsFormContainer">
				<h1 className="sectionHeaders">
					<u>Skills</u>
				</h1>

				<form id="skillsForm" onSubmit={this.handleSubmit}>
					{skillsRendering}
					<EditAndSaveButton
						section="skills"
						view={this.state.formView}
						toggleView={this.toggleView}
						addSection={this.addSkill}
						wrapperFunction={this.wrapperFunction}
					/>
				</form>
			</main>
		);
	}
}
