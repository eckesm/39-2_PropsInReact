const App = () => (
	<div>
		<Tweet
			username="eckesm"
			name="Matt Eckes"
			date={new Date().toDateString()}
			message="This is my first tweet!!!  Ummmm.... what to say, what to say... I LOVE CATS!"
		/>
		<Tweet
			username="jlatchaw"
			name="John Latchaw"
			date={new Date(2021, 1, 1).toDateString()}
			message="Happy birthday to me!"
		/>
		<Tweet
			username="prosenberg"
			name="Penny Rosenberg"
			date={new Date(2021, 3, 1).toDateString()}
			message="Happy birthday to John... APRIL FOOLS snitches!"
		/>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
