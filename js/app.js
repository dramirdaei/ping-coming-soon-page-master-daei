const email = document.getElementById("input");
const error = document.getElementById("error");
const form = document.getElementById("form");
form.addEventListener("submit", emailValidator);
function emailValidator(e) {
	e.preventDefault();
	let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (email.value === "") {
		error.textContent = `You must enter an email address!`;
		email.classList.add("error2");
	} else if (!filter.test(email.value)) {
		error.textContent = `Please provide a valid email address`;
		email.classList.add("error2");
		email.focus;
		return false;
	}
}
