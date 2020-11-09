import React, { useState } from "react";
import EditAndSaveButton from "../editAndSaveButton";
import SkillsFormAndDisplay from "./skillsFormAndDisplay";
import gettingLocalStorage from "../localStorage";

export default function Skills() {
	const [formView, setFormView] = useState(false);
	const [skillsData, setSkillsData] = useState(
		gettingLocalStorage("skillsData")
	);

	function addSkill() {
		setSkillsData({
			skillsDataArray: [
				...skillsData,
				{
					skill: "",
				},
			],
		});
	}
	function deleteSkill(e) {
		const index = Number(e.target.id.substring(e.target.id.length - 1, 23));
		const copyFormArray = Object.assign([], skillsData.skillsDataArray);
		copyFormArray.splice(index, 1);
		setSkillsData({
			skillsDataArray: copyFormArray,
		});
	}
	function handleChange(e) {
		const index = Number(e.target.id.substring(e.target.id.length - 1, 19));
		const copyFormArray = JSON.parse(
			JSON.stringify(skillsData.skillsDataArray)
		);
		copyFormArray[index][e.target.name] = e.target.value;
		setSkillsData({
			skillsDataArray: copyFormArray,
		});
	}

	function handleSubmit(e) {
		setSkillsData(skillsData);
		localStorage.setItem("skillsData", JSON.stringify(skillsData));
		e.preventDefault();
	}

	function wrapperFunction(e) {
		//when the save button is clicked, the toggleView function and submit button fire off so we can have 2 functions occur on 1 click
		setFormView(!formView);
		handleSubmit(e);
	}

	const skillsRendering = skillsData.skillsDataArray.map((skill, i) => (
		<SkillsFormAndDisplay
			id={"formAtIndex" + i}
			index={i}
			key={skill.toString() + i}
			view={formView}
			deleteSkillOnClick={(e) => deleteSkill(e)}
			data={skillsData.skillsDataArray[i]}
			handleChange={handleChange}
		/>
	));

	return (
		<main id="skillsFormContainer">
			<h1 className="sectionHeaders">
				<u>Skills</u>
			</h1>

			<form id="skillsForm" onSubmit={handleSubmit}>
				{skillsRendering}
				<EditAndSaveButton
					section="skills"
					view={formView}
					toggleView={() => setFormView(!formView)}
					addSection={addSkill}
					wrapperFunction={wrapperFunction}
				/>
			</form>
		</main>
	);
}
