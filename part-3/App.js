const App = () => (
	<div>
		<Person name="Matt" age={19} hobbies={['ceramics','Swedish','birding','coding','running','cooking','travel']} />
		<Person name="Bethaniel" age={16} hobbies={['being fashionable','personal hygiene']} />
		<Person name="Dana Scully" age={49} hobbies={['Yelling at Mulder','Getting abducted','Being a medical doctor... but also a medical examiner.']} />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));