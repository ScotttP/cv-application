import React, { useState, useEffect } from "react";
import EditAndSaveButton from "./editAndSaveButton";
import LinksInformation from "./linksComponent";

export default function GeneralInformation() {
	const [genInfo, setGenInfo] = useState({
		//make this a custom hook? https://blog.bitsrc.io/writing-your-own-custom-hooks-4fbcf77e112e
		name: JSON.parse(localStorage.getItem("name")),
		phone: "555-555-5555",
		email: "johnsmith@gmail.com",
		github: "https://github.com/johnsmith",
		linkedIn: "https://www.linkedin.com/in/johnsmith/",
		formView: false,
	});
	function handleChange(e) {
		setGenInfo({
			[e.target.name]: e.target.value,
		});
	}
	function toggleView() {
		setGenInfo({
			formView: !genInfo.formView,
		});
	}
	function print() {
		window.print();
	}
	function handleSubmit(e) {
		localStorage.setItem("name", JSON.stringify(genInfo.name));
		localStorage.setItem("phone", JSON.stringify(genInfo.phone));
		localStorage.setItem("email", JSON.stringify(genInfo.email));
		localStorage.setItem("github", JSON.stringify(genInfo.github));
		localStorage.setItem("linkedIn", JSON.stringify(genInfo.linkedIn));
		e.preventDefault();
	}

	function wrapperFunction(e) {
		//when the save button is clicked, the toggleView function and submit button fire off so we can have 2 functions occur on 1 click
		toggleView();
		handleSubmit(e);
	}
	useEffect(() => {});

	if (genInfo.formView === false) {
		return (
			<aside id="generalInfoContainer">
				<div id="headerContainer">
					<h1 id="nameHeader">{genInfo.name}</h1>
					<h3 id="phoneHeader">{genInfo.phone}</h3>
				</div>
				<LinksInformation urls={genInfo} print={print} />
				<EditAndSaveButton
					section="generalInfo"
					view={genInfo.formView}
					toggleView={toggleView}
					wrapperFunction={wrapperFunction}
				/>
			</aside>
		);
	} else {
		return (
			<aside id="generalInfoContainer">
				<div id="headerContainer">
					<form id="generalInfoForm" onSubmit={(e) => handleSubmit(e)}>
						<label>
							<h4>Name:</h4>
							<input
								className="formInputs"
								id="nameInput"
								name="name"
								type="text"
								value={genInfo.name}
								onChange={(e) => handleChange(e)}
								placeholder="John Smith"
							></input>
						</label>
						<br></br>
						<label>
							<h4>Phone:</h4>
							<input
								className="formInputs"
								id="phoneInput"
								name="phone"
								type="text"
								value={genInfo.phone}
								onChange={(e) => handleChange(e)}
								placeholder="555-555-5555"
							></input>
						</label>
						<br></br>
						<label>
							<h4>Email:</h4>
							<input
								className="formInputs"
								id="emailInput"
								name="email"
								type="text"
								value={genInfo.email}
								onChange={(e) => handleChange(e)}
								placeholder="JohnSmith@gmail.com"
							></input>
						</label>
						<br></br>
						<label>
							<h4>Github:</h4>
							<input
								className="formInputs"
								id="gitHubInput"
								name="github"
								type="text"
								value={genInfo.github}
								onChange={(e) => handleChange(e)}
								placeholder="https://..."
							></input>
						</label>
						<br></br>
						<label>
							<h4>LinkedIn:</h4>
							<input
								className="formInputs"
								id="linkedInInput"
								name="linkedIn "
								type="text"
								value={genInfo.linkedIn}
								onChange={(e) => handleChange(e)}
								placeholder="https://..."
							></input>
						</label>
						<br></br>
						<EditAndSaveButton
							section="generalInfo"
							view={genInfo.formView}
							toggleView={toggleView}
							wrapperFunction={wrapperFunction}
						/>
					</form>
				</div>
			</aside>
		);
	}
}
