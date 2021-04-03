const Person = props => {
	let name = props.name.length > 8 ? props.name.substring(0, 6) : props.name;
	let over18 = props.age >= 18 ? 'Please go vote!' : 'You must be 18 to vote!';
	let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

	return (
		<div>
			<p>Learn some information about this person...</p>
			<ul>
				<li>
					<b>Name:</b> {name}
				</li>
				<li>
					<b>Age:</b> {props.age}
				</li>
			</ul>
			<h3>{over18}</h3>
			<p>Hobbies:</p>
			<ul>{hobbies}</ul>
		</div>
	);
};
