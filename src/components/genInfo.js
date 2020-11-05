import React from "react";
import EditAndSaveButton from "./editAndSaveButton";
import LinksInformation from "./linksComponent";

//THIS IS A NEW BRANCH TEST

export default class GeneralInformation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "John Smith",
			phone: "555-555-5555",
			email: "johnsmith@gmail.com",
			github: "https://github.com/johnsmith",
			linkedIn: "https://www.linkedin.com/in/johnsmith/",
			formView: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.toggleView = this.toggleView.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.wrapperFunction = this.wrapperFunction.bind(this);
		this.print = this.print.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	toggleView() {
		this.setState({
			formView: !this.state.formView,
		});
	}
	print() {
		window.print();
	}
	handleSubmit(e) {
		const { name, phone, email, github, linkedIn } = this.state;
		localStorage.setItem("name", JSON.stringify(name));
		localStorage.setItem("phone", JSON.stringify(phone));
		localStorage.setItem("email", JSON.stringify(email));
		localStorage.setItem("github", JSON.stringify(github));
		localStorage.setItem("linkedIn", JSON.stringify(linkedIn));
		e.preventDefault();
	}

	wrapperFunction(e) {
		//when the save button is clicked, the toggleView function and submit button fire off so we can have 2 functions occur on 1 click
		this.toggleView();
		this.handleSubmit(e);
	}
	componentDidMount() {
		let name = JSON.parse(localStorage.getItem("name"));
		let phone = JSON.parse(localStorage.getItem("phone"));
		let email = JSON.parse(localStorage.getItem("email"));
		let github = JSON.parse(localStorage.getItem("github"));
		let linkedIn = JSON.parse(localStorage.getItem("linkedIn"));
		if (
			name === null ||
			phone === null ||
			email === null ||
			github === null ||
			linkedIn === null
		) {
			name = this.state.name;
			phone = this.state.phone;
			email = this.state.email;
			github = this.state.github;
			linkedIn = this.state.linkedIn;
		}
		this.setState({ name, phone, email, github, linkedIn });
	}
	render() {
		if (this.state.formView === false) {
			return (
				<aside id="generalInfoContainer">
					<div id="headerContainer">
						<h1 id="nameHeader">{this.state.name}</h1>
						<h3 id="phoneHeader">{this.state.phone}</h3>
					</div>
					<LinksInformation urls={this.state} print={this.print} />
					<EditAndSaveButton
						section="generalInfo"
						view={this.state.formView}
						toggleView={this.toggleView}
						wrapperFunction={this.wrapperFunction}
					/>
				</aside>
			);
		} else {
			return (
				<aside id="generalInfoContainer">
					<div id="headerContainer">
						<form id="generalInfoForm" onSubmit={this.handleSubmit}>
							<label>
								<h4>Name:</h4>
								<input
									className="formInputs"
									id="nameInput"
									name="name"
									type="text"
									value={this.state.name}
									onChange={this.handleChange}
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
									value={this.state.phone}
									onChange={this.handleChange}
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
									value={this.state.email}
									onChange={this.handleChange}
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
									value={this.state.github}
									onChange={this.handleChange}
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
									value={this.state.linkedIn}
									onChange={this.handleChange}
									placeholder="https://..."
								></input>
							</label>
							<br></br>
							<EditAndSaveButton
								section="generalInfo"
								view={this.state.formView}
								toggleView={this.toggleView}
								wrapperFunction={this.wrapperFunction}
							/>
						</form>
					</div>
				</aside>
			);
		}
	}
}
