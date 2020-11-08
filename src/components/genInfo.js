import React, { useState } from "react";
import EditAndSaveButton from "./editAndSaveButton";
import LinksInformation from "./linksComponent";
import gettingLocalStorage from "./localStorage";

export default function GeneralInformation() {
	const [name, setName] = useState(gettingLocalStorage("name"));
	const [phone, setPhone] = useState(gettingLocalStorage("phone"));
	const [email, setEmail] = useState(gettingLocalStorage("email"));
	const [github, setGitHub] = useState(gettingLocalStorage("github"));
	const [linkedIn, setLinkedIn] = useState(gettingLocalStorage("linkedIn"));
	const [formView, setFormView] = useState(false);

	function handleSubmit(e) {
		localStorage.setItem("name", JSON.stringify(name));
		localStorage.setItem("phone", JSON.stringify(phone));
		localStorage.setItem("email", JSON.stringify(email));
		localStorage.setItem("github", JSON.stringify(github));
		localStorage.setItem("linkedIn", JSON.stringify(linkedIn));

		e.preventDefault();
	}

	function wrapperFunction(e) {
		//when the save button is clicked, the toggleView function and submit button fire off so we can have 2 functions occur on 1 click
		setFormView(!formView);
		handleSubmit(e);
	}

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
					print={() => window.print()}
				/>
				<EditAndSaveButton
					section="generalInfo"
					view={formView}
					toggleView={() => setFormView(!formView)}
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
								onChange={(e) => setName(e.target.value)}
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
								onChange={(e) => setPhone(e.target.value)}
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
								onChange={(e) => setEmail(e.target.value)}
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
								onChange={(e) => setGitHub(e.target.value)}
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
								onChange={(e) => setLinkedIn(e.target.value)}
								placeholder="https://..."
							></input>
						</label>
						<br></br>
						<EditAndSaveButton
							section="generalInfo"
							view={formView}
							toggleView={() => setFormView(!formView)}
							wrapperFunction={wrapperFunction}
						/>
					</form>
				</div>
			</aside>
		);
	}
}
