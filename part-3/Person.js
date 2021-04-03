const Person = props => {
	let name = props.name;
	if (props.name.length > 8) {
		name = props.name.substring(0, 6);
	}

	let over18;
	if (props.age >= 18) {
		over18 = 'Please go vote!';
	}
	else {
		over18 = 'You must be 18 to vote.';
	}

	return (
		<div>
			<p>Learn some information about this person...</p>
			<p>
				<b>Name:</b> {name}
			</p>
			<p>
				<b>Age:</b> {props.age}
			</p>
			<h3>{over18}</h3>
			<p>Hobbies:</p>
			<ul>{props.hobbies.map(hobby => <li>{hobby}</li>)}</ul>
		</div>
	);
};
