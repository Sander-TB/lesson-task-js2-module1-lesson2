import { displayMessage } from "./components/displayMessage.js";
import { resultContainer } from "./constants/constants.js";
import { createHtml } from "./components/createHtml.js";

const url =
	"https://noroffcors.herokuapp.com/https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad";

async function callApi() {
	try {
		const response = await fetch(url);
		const json = await response.json();
		console.log(json);
		createHtml(json.data);
	} catch (error) {
		console.log(error);
		resultContainer.innerHTML = displayMessage("error", error);
	}
}

callApi();
