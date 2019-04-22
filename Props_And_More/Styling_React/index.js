function getOption() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    if(randNum === 1){
        return "🍒";
    } else if(randNum === 1) {
        return "🍇";
    } else {
        return "🍋";
    }
}

class App extends React.Component {
	render() {
		return (
            <div>
                <Slots 
                    s1={getOption()}
                    s2={getOption()}
                    s3={getOption()}
                />
            </div>
        )
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))