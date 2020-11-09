import React, { useState } from "react";
import EditAndSaveButton from "../editAndSaveButton";
import EducationFormAndDisplay from "./educationFormAndDisplay";
import gettingLocalStorage from "../localStorage";

export default function Education() {
	const [formView, setFormView] = useState(false);
	const [educationData, setEducationData] = useState(
		gettingLocalStorage("educationData")
	);

	function addEducation() {
		setEducationData({
			educationDataArray: [
				...educationData,
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
	function deleteEducation(e) {
		const index = Number(e.target.id.substring(e.target.id.length - 1, 17));
		const copyFormArray = Object.assign([], educationData.educationDataArray);
		copyFormArray.splice(index, 1);
		setEducationData({
			educationDataArray: copyFormArray,
		});
	}
	function handleChange(e) {
		const index = Number(e.target.id.substring(e.target.id.length - 1, 19));
		const copyFormArray = JSON.parse(
			JSON.stringify(educationData.educationDataArray)
		);
		copyFormArray[index][e.target.name] = e.target.value;
		setEducationData({
			educationDataArray: copyFormArray,
		});
	}

	function handleSubmit(e) {
		setEducationData(educationData);
		localStorage.setItem("educationData", JSON.stringify(educationData));
		e.preventDefault();
	}

	function wrapperFunction(e) {
		//when the save button is clicked, the toggleView function and submit button fire off so we can have 2 functions occur on 1 click
		setFormView(!formView);
		handleSubmit(e);
	}
	const educationRendering = educationData.educationDataArray.map(
		(education, i) => (
			<EducationFormAndDisplay
				id={"formAtIndex" + i}
				index={i}
				key={education.toString() + i}
				view={formView}
				deleteEducationOnClick={(e) => deleteEducation(e)}
				data={educationData.educationDataArray[i]}
				handleChange={(e) => handleChange(e)}
			/>
		)
	);
	return (
		<main id="educationFormContainer">
			<h1 className="sectionHeaders">
				<u>Education</u>
			</h1>

			<form id="educationForm" onSubmit={handleSubmit}>
				{educationRendering}
				<EditAndSaveButton
					section="education"
					view={formView}
					toggleView={() => setFormView(!formView)}
					addSection={addEducation}
					wrapperFunction={wrapperFunction}
				/>
			</form>
		</main>
	);
}
