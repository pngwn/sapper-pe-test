const redirect = require("@polka/redirect");

export function post(req, _, next) {
	const { firstname, othername, age } = req.body;
	const values = {};

	if (!firstname) {
		values.firstname = {
			value: firstname,
			invalid: "First Name is a required field"
		};
	}

	if (!othername) {
		values.othername = {
			value: othername,
			invalid: "Other Name is a required field"
		};
	}

	if (!age) {
		values.age = {
			value: age,
			invalid: "Ahe is a required field"
		};
	}

	if (!firstname || !othername || !age) {
		req.path = "/form_validate";
		req.session = values;
		return next();
	}

	if (firstname[0] === firstname[0].toUpperCase()) {
		values.firstname = { value: firstname, invalid: false };
	} else {
		values.firstname = {
			value: firstname,
			invalid: "Names should be capitalised"
		};
	}

	if (othername[0] === othername[0].toUpperCase()) {
		values.othername = { value: othername, invalid: false };
	} else {
		values.othername = {
			value: othername,
			invalid: "Names should be capitalised"
		};
	}

	if (age < 99) {
		values.age = { value: age, invalid: false };
	} else {
		values.age = { value: age, invalid: "How are you still alive" };
	}

	req.session = values;

	req.path = "/form_validate";
	return next();
}

export function get(req, res) {
	redirect(res, "/");
}
