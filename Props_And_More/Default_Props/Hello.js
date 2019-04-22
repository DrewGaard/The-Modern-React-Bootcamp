class Hello extends React.Component {
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1
    }
	render() {
        let bangs = "!".repeat(this.props.bangs);
        console.log(this.props);
		return (
        <div>
            <h1>Hello There!!! From: {this.props.from} To: {this.props.to}{bangs}</h1>
            <img src={this.props.img} />
        </div>
        )
	}
}