import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class DefaultLink extends Component {
	constructor() {
		super();

		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		if (this.props.itemProps.hasSubMenu) {
			this.props.itemProps.toggleSubMenu(e)
		} else {

			this.props.itemProps.activateMe({
				newLocation: this.props.to,
				selectedMenuLabel: this.props.label,
			});
		}
	}
	render() {
		const { itemProps } = this.props
		if (itemProps.id === 'main' || itemProps.id === 'app' || itemProps.id === 'extra' || itemProps.id === 'ui') {
			return (
				itemProps.label
			);
		} else {
			return (
				itemProps.children[0].props.className ?
					<NavLink to={`${itemProps.to}`} onClick={(e) => this.onClick(e)} className={`${itemProps.hasSubMenu ? "has-arrow" : ""}`}>
						<i className={itemProps.children[0].props.className}></i>
						<span>{itemProps.label}</span>
					</NavLink> :
					<NavLink to={`${itemProps.to}`} onClick={(e) => this.onClick(e)}>
						<span>{itemProps.label}</span>
					</NavLink>
			);
		}
	}
};
const mapStateToProps = state => ({
	subMenuIcon: state.settings.isSubMenuIcon,
	menuIcon: state.settings.isMenuIcon
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(DefaultLink);