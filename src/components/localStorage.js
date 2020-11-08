export default function gettingLocalStorage(targetName) {
	if (targetName === "name") {
		if (!localStorage.name) {
			return "John Smith";
		}
		return JSON.parse(localStorage.getItem(targetName));
	}
	if (targetName === "phone") {
		if (!localStorage.phone) {
			return "555-555-5555";
		}
		return JSON.parse(localStorage.getItem(targetName));
	}
	if (targetName === "email") {
		if (!localStorage.email) {
			return "johnsmith@gmail.com";
		}
		return JSON.parse(localStorage.getItem(targetName));
	}
	if (targetName === "github") {
		if (!localStorage.github) {
			return "https://github.com/JohnSmith/";
		} else {
			return JSON.parse(localStorage.getItem(targetName));
		}
	}
	if (targetName === "linkedIn") {
		if (!localStorage.linkedIn) {
			return "https://www.linkedin.com/in/johnsmith/";
		}
		return JSON.parse(localStorage.getItem("linkedIn"));
	}
	if (targetName === "experienceData") {
		if (!localStorage.experienceData) {
			return {
				experienceDataArray: [
					{
						companyName: "ABC Company",
						location: "New York City, NY",
						roleTitle: "Developer",
						startDate: "2018-10-15",
						endDate: "2020-10-15",
						tasks: `
		--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sagittis lectus.  
		--Suspendisse eget orci id nunc ullamcorper placerat sed nec diam. 
		--Aenean risus ligula, vulputate id nunc ut, sagittis iaculis ex. In vel tincidunt nisi. `,
					},
				],
			};
		}
		return JSON.parse(localStorage.getItem("experienceData"));
	}
}
