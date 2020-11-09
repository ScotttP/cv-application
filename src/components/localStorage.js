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
		return JSON.parse(localStorage.getItem(targetName));
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
		return JSON.parse(localStorage.getItem(targetName));
	}
	if (targetName === "educationData") {
		if (!localStorage.educationData) {
			return {
				educationDataArray: [
					{
						institutionName: "State University",
						major: "Computer Science",
						minor: "Mathematics",
						degreeType: "Bachelor's",
						gpa: "3.75",
						yearOfGraduation: "2020",
					},
				],
			};
		}
		return JSON.parse(localStorage.getItem(targetName));
	}
	if (targetName === "skillsData") {
		if (!localStorage.skillsData) {
			return {
				skillsDataArray: [
					{
						skill: "HTML",
					},
					{
						skill: "CSS",
					},
					{
						skill: "Javascript",
					},
					{
						skill: "React",
					},
				],
			};
		}
		return JSON.parse(localStorage.getItem(targetName));
	}
}
