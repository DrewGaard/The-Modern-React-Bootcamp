class Slots extends React.Component {
	render() {
        let msg;
		if((this.props.s1 === this.props.s2) && (this.props.s2 === this.props.s3)) {
			msg = 
				<div className="win">
					<h2>CONGRATS YOU WIN!</h2>
					<img src="https://media.giphy.com/media/89x4osEodHEoo/giphy.gif" />
				</div>
		} else {
			msg = <p className="lose">Sorry You Lose!</p>
		}
		return (
        <div className="Slots">
			<p style={{fontSize: '50px', backgroundColor: 'purple'}}>
				{this.props.s1} {this.props.s2} {this.props.s3}
			</p>
            <p>{msg}</p>
        </div>
        )
	}
}