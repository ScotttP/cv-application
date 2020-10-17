import React from "react";
import EditAndSaveButton from "./editAndSaveButton";

export default class GeneralInformation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Scott Pribe",
			phone: "555-555-5555",
			formView: true,
		}
		this.handleChange = this.handleChange.bind(this);
		this.toggleView = this.toggleView.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	toggleView() {
		this.setState({
			formView: !this.state.formView,
		});
	}
	render() {
		if (this.state.formView === false){
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
					<EditAndSaveButton section= "generalInfo" view={this.state.formView} toggleView={this.toggleView}/>
				</aside>
			);
		}else{
			return(
				<aside id="generalInfoContainer">
				<img
					src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
					alt="profilePic"
					width="200"
					height="200"
				></img>
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
				<EditAndSaveButton section= "generalInfo" view={this.state.formView} toggleView={this.toggleView}/>
			</aside>
			)
		}
		
	}
}
