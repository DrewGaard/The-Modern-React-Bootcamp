function getMood() {
	const moods = ['Happy', 'Angry', 'Sad', 'Silly', 'Paranoid'];
	return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>My Current Mood Is: {getMood()}</h1>
				<h1>An Image!</h1>
				<img src="https://images.unsplash.com/photo-1555748663-9f016d2c0b0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));