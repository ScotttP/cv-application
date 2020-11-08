import React, { useState } from "react";
import ExperienceFormAndDisplay from "./experienceFormAndDisplay";
import EditAndSaveButton from "../editAndSaveButton";
import gettingLocalStorage from "../localStorage";

export default function Experience() {
	const [formView, setFormView] = useState(false);
	const [experienceData, setExperienceData] = useState(
		gettingLocalStorage("experienceData")
	);

	function addJob() {
		setExperienceData({
			experienceDataArray: [
				...experienceData,
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
	function deleteJob(e) {
		const index = Number(e.target.id.substring(e.target.id.length - 1, 17));
		const copyFormArray = Object.assign([], experienceData.experienceDataArray);
		copyFormArray.splice(index, 1);
		setExperienceData({
			experienceDataArray: copyFormArray,
		});
	}
	function handleChange(e) {
		const index = Number(e.target.id.substring(e.target.id.length - 1, 12));
		const copyFormArray = JSON.parse(
			JSON.stringify(experienceData.experienceDataArray)
		);
		copyFormArray[index][e.target.name] = e.target.value;
		setExperienceData({
			experienceDataArray: copyFormArray,
		});
	}

	function handleSubmit(e) {
		setExperienceData(experienceData);
		localStorage.setItem("experienceData", JSON.stringify(experienceData));
		e.preventDefault();
	}

	function wrapperFunction(e) {
		//when the save button is clicked, the toggleView function and submit button fire off so we can have 2 functions occur on 1 click
		setFormView(!formView);
		handleSubmit(e);
	}
	const jobRendering = experienceData.experienceDataArray.map((job, i) => (
		<ExperienceFormAndDisplay
			id={"formAtIndex" + i}
			index={i}
			key={job.toString() + i}
			view={formView}
			deleteJobOnClick={(e) => deleteJob(e)}
			data={experienceData.experienceDataArray[i]}
			handleChange={(e) => handleChange(e)}
		/>
	));

	return (
		<main id="experienceFormContainer">
			<h1 className="sectionHeaders">
				<u>Experience</u>
			</h1>
			{jobRendering}
			<form id="experienceForm" onSubmit={handleSubmit}>
				<EditAndSaveButton
					section="experience"
					view={formView}
					toggleView={() => setFormView(!formView)}
					addSection={addJob}
					wrapperFunction={wrapperFunction}
				/>
			</form>
		</main>
	);
}
