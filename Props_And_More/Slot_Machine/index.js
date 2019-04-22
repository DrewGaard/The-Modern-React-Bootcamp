function getOption() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    if(randNum === 1){
        return "X";
    } else if(randNum === 1) {
        return "Y";
    } else {
        return "Z";
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