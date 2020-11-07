import React, { useState, useEffect } from "react";
import EditAndSaveButton from "./editAndSaveButton";
import LinksInformation from "./linksComponent";
import useLocalStorage from "./localStorage";

export default function GeneralInformation() {
	const [name, setName] = useState(
		() => {
			if (!localStorage.name) {
				return "John Smith";
			} else {
				return JSON.parse(localStorage.getItem("name"));
			}
		}
		//make this a custom hook? https://blog.bitsrc.io/writing-your-own-custom-hooks-4fbcf77e112e
	);
	const [phone, setPhone] = useState(null);
	const [email, setEmail] = useState(null);
	const [github, setGitHub] = useState(null);
	const [linkedIn, setLinkedIn] = useState(null);
	const [formView, setFormView] = useState(false);
	function handleChange(e) {
		if (e.target.name === "name") {
			setName(e.target.value);
		} else if (e.target.name === "phone") {
			setPhone(e.target.value);
		} else if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "linkedIn") {
			setLinkedIn(e.target.value);
		} else if (e.target.name === "gitHub") {
			setGitHub(e.target.value);
		}
	}
	function toggleView() {
		setFormView(!formView);
	}
	function print() {
		window.print();
	}
	function handleSubmit(e) {
		console.log("fire off localstorage");
		localStorage.setItem("name", JSON.stringify(name));
		localStorage.setItem("phone", JSON.stringify(phone));
		localStorage.setItem("email", JSON.stringify(email));
		localStorage.setItem("github", JSON.stringify(github));
		localStorage.setItem("linkedIn", JSON.stringify(linkedIn));
		e.preventDefault();
	}

	function wrapperFunction(e) {
		//when the save button is clicked, the toggleView function and submit button fire off so we can have 2 functions occur on 1 click
		toggleView();
		handleSubmit(e);
	}
	useEffect(() => {
		// if (localStorage.length === 0) {
		// 	setName("John Smith");
		// 	setPhone("555-555-5555");
		// 	setEmail("johnsmith@gmail.com");
		// 	setGitHub("https://github.com/johnsmith");
		// 	setLinkedIn("https://www.linkedin.com/in/johnsmith/");
		// } else {
		// 	setName(JSON.parse(localStorage.getItem("name")));
		// 	setPhone(JSON.parse(localStorage.getItem("phone")));
		// 	setEmail(JSON.parse(localStorage.getItem("email")));
		// 	setGitHub(JSON.parse(localStorage.getItem("github")));
		// 	setLinkedIn(JSON.parse(localStorage.getItem("linkedIn")));
		// }
	});

	if (formView === false) {
		return (
			<aside id="generalInfoContainer">
				<div id="headerContainer">
					<h1 id="nameHeader">{name}</h1>
					<h3 id="phoneHeader">{phone}</h3>
				</div>
				<LinksInformation
					email={email}
					github={github}
					linkedIn={linkedIn}
					print={print}
				/>
				<EditAndSaveButton
					section="generalInfo"
					view={formView}
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
								value={name}
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
								value={phone}
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
								value={email}
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
								value={github}
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
								value={linkedIn}
								onChange={(e) => handleChange(e)}
								placeholder="https://..."
							></input>
						</label>
						<br></br>
						<EditAndSaveButton
							section="generalInfo"
							view={formView}
							toggleView={toggleView}
							wrapperFunction={wrapperFunction}
						/>
					</form>
				</div>
			</aside>
		);
	}
}
