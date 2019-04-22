class App extends React.Component {
	render() {
		return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul"
                    bangs={4}
                    img="https://images.unsplash.com/photo-1516956566-e9fbebf4842f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                />
            </div>
        )
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))