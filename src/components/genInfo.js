import React from "react";
import EditAndSaveButton from "./editAndSaveButton";

export default class GeneralInformation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "John Smith",
			phone: "555-555-5555",
			formView: true,
		};
		this.handleChange = this.handleChange.bind(this);
		this.toggleView = this.toggleView.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.wrapperFunction = this.wrapperFunction.bind(this);
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
	handleSubmit(e) {
		console.log(e); //probably some local storage thing here
		e.preventDefault();
	}

	wrapperFunction(e) {
		//when the save button is clicked, the toggleView function and submit button fire off so we can have 2 functions occur on 1 click
		this.toggleView();
		this.handleSubmit(e);
	}
	render() {
		if (this.state.formView === false) {
			return (
				<aside id="generalInfoContainer">
					<img
						src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
						alt="profilePic"
						width="200"
						height="200"
					></img>
					<h1>{this.state.name}</h1>
					<h3>{this.state.phone}</h3>
					<div id="professionalContactContainer">
						<ul id="listContainer">
							<li>linkedIn (icons)</li>
							<li>Github (icons)</li>
							<li>Email (icons)</li>
						</ul>
					</div>
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
					<img
						src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
						alt="profilePic"
						width="200"
						height="200"
					></img>
					<form id="generalInfoForm">
						<input
							name="name"
							type="text"
							value={this.state.name}
							onChange={this.handleChange}
							placeholder="John Smith"
						></input>
						<input //need some form validation here
							name="phone"
							type="text"
							value={this.state.phone}
							onChange={this.handleChange}
							placeholder="555-555-5555"
						></input>
						<div id="professionalContactContainer">
							<ul id="listContainer">
								<li>linkedIn (icons)</li>
								<li>Github (icons)</li>
								<li>Email (icons)</li>
							</ul>
						</div>
						<EditAndSaveButton
							section="generalInfo"
							view={this.state.formView}
							toggleView={this.toggleView}
						/>
					</form>
				</aside>
			);
		}
	}
}
