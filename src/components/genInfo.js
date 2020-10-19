import React from "react";
import EditAndSaveButton from "./editAndSaveButton";

export default class GeneralInformation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "John Smith",
			phone: "555-555-5555",
			formView: false,
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
		const { name, phone } = this.state;
		localStorage.setItem("name", JSON.stringify(name));
		localStorage.setItem("phone", JSON.stringify(phone));
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
		if (name === null || phone === null) {
			name = this.state.name;
			phone = this.state.phone;
		}
		this.setState({ name, phone });
	}
	render() {
		if (this.state.formView === false) {
			return (
				<form>
					<aside id="generalInfoContainer">
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
							alt="profilePic"
							width="200"
							height="200"
						></img>
						<h1>Name: {this.state.name}</h1>
						<h3>Phone: {this.state.phone}</h3>
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
				</form>
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
					<form id="generalInfoForm" onSubmit={this.handleSubmit}>
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
							wrapperFunction={this.wrapperFunction}
						/>
					</form>
				</aside>
			);
		}
	}
}
