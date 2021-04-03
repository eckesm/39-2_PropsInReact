const App = () => (
	<div>
    <Tweet
      username="eckesm"
      name="Matt Eckes"
      date="4/3/2021"
      message="This is my first tweet!!!  Ummmm.... what to say, what to say... I LOVE CATS!"
    />
    <Tweet
      username="jlatchaw"
      name="John Latchaw"
      date="2/1/2021"
      message="Happy birthday to me!"
    />
    <Tweet
      username="prosenberg"
      name="Penny Rosenberg"
      date="4/1/2021"
      message="Happy birthday to John... APRIL FOOLS snitches!"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
