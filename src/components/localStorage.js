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
}
