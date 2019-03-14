import React from "react";

import "./BurgerButton.scss";

class BurgerButton extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		const { ...props } = this.props;
		const { open } = props;
		delete props.open;

		return (
			<div
				className={open ? "burger-menu open" : "burger-menu"}
				{...props}
			>
				<div className="bar1" key="b1" />
				<div className="bar2" key="b2" />
				<div className="bar3" key="b3" />
			</div>
		);
	}
}

export default BurgerButton;
