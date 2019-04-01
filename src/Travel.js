import React, { Component } from "react";

class Travel extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.destination}</h1>
				<h2>{this.props.country}</h2>
				<img src={this.props.photo} />
				<p> {this.props.distance} </p>
			</div>
		);
	}
}

export default Travel;
