import React, { Component } from 'react';
import { connect } from 'react-redux';
import MetisMenu from 'react-metismenu';
import { Link } from 'react-router-dom';

import { setOffcanvas } from '../../actions/settingsAction';
import metisMenu from './metisMenu';
import DefaultLink from './DefaultLink';
import { Dropdown } from 'react-bootstrap';
import { setMiniSidebarMenuOn, setMiniHover } from '../../actions/settingsAction';


class Menu extends Component {
	constructor(props) {
		super(props);
		this.toggleSubMenu = this.toggleSubMenu.bind(this);
		this.minisidebarMouseOver = this.minisidebarMouseOver.bind(this);
		this.minisidebarMouseOut = this.minisidebarMouseOut.bind(this);
	}
	toggleSubMenu1(e) {
		console.log(e, 'eeeee')
		// let menucClass = ''
		return "sdsdfszd";
	}
	toggleSubMenu(e) {
		let menucClass = ''
		if (e.itemId) {
			const subClass = e.items.map((menuItem) => {
				if (menuItem.id === 'main' || menuItem.id === 'app' || menuItem.id === 'extra' || menuItem.id === 'ui') {
					menucClass = "header";
				}
				if (menuItem.to === this.props.location.pathname) {
					menucClass = "";
				} else {
					menucClass = "collapse";
				}
				return menucClass;
			})
			return subClass
			// return "collapse";
		} else {
			return e.visible ? "collapse" : "metismenu";
		}
	}

	minisidebarMouseOver() {
		this.props.setMiniSidebarMenuOn(false);
		this.props.setMiniHover(true);
	}

	minisidebarMouseOut() {
		this.props.setMiniSidebarMenuOn(true);
		this.props.setMiniHover(false);
	}

	componentDidMount() {
		const getLitext = document.querySelectorAll('li');
		getLitext.forEach(function(el) {
			if (el.innerText === 'Main' || el.innerText === "App" || el.innerText === "UI Elements" || el.innerText === "Extra") {
				el.className = "header"
			}
		  });
	}

	render() {
		if (document.getElementById('left-sidebar') && this.props.miniSidebar) {
			document.getElementById('left-sidebar').addEventListener('mouseover', this.minisidebarMouseOver);
		}
		if (document.getElementById('left-sidebar') && this.props.miniHover) {
			document.getElementById('left-sidebar').addEventListener('mouseout', this.minisidebarMouseOut);
		}
		return (
			<>
				<div id="left-sidebar" className={`sidebar${this.props.miniSideMenuOn ? ' mini_sidebar_on' : ''}`}>
					<div className="navbar-brand">
						<Link to="/"><span>Creative Platform</span></Link>
						<button type="button" className="btn-toggle-offcanvas btn btn-sm float-right" onClick={() => this.props.setOffcanvas(!this.props.offcanvas)}><i className="lnr lnr-menu icon-close"></i></button>
					</div>
					<div className="sidebar-scroll">
						<div className="user-account d-flex ">
							<div className="user_div">
								<img src="../assets/images/user.png" className="user-photo" alt="User Profile" />
							</div>
							<div className="dropdown">
								<span>Welcome,</span>
								<br />
								<Dropdown className="ml-0">
									<Dropdown.Toggle variant="success" id="dropdown-basic" className="user-name left_dropdown_btn">
										<strong>Louis Pierce</strong>
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Link className="dropdown-item" to="/page-profile"><i className="icon-user"></i>My Profile</Link>
										<Link className="dropdown-item" to="/app-inbox"><i className="icon-envelope-open"></i>Messages</Link>
										<Link className="dropdown-item" to="/"><i className="icon-settings"></i>Settings</Link>
										<li className="divider" />
										<Link className="dropdown-item" to="/login"><i className="icon-power"></i>Logout</Link>
									</Dropdown.Menu>
								</Dropdown>
								<ul className="dropdown-menu dropdown-menu-right account vivify flipInY">

								</ul>
							</div>
						</div>
						<nav id="left-sidebar-nav" className="sidebar-nav">
							<MetisMenu
								content={metisMenu}
								noBuiltInClassNames={true}
								classNameItemActive="active"
								classNameContainer={(e) => this.toggleSubMenu(e)}
								classNameContainerVisible="in"
								iconNamePrefix=""
								LinkComponent={(e) => <DefaultLink itemProps={e} />}
							/>
						</nav>
					</div>
				</div>

			</>
		)
	}
}

const mapStateToProps = state => ({
	offcanvas: state.settings.offcanvas,
	miniSidebar: state.settings.miniSidebar,
	miniSideMenuOn: state.settings.miniSideMenuOn,
	miniHover: state.settings.miniHover,
})

const mapDispatchToProps = dispatch => ({
	setOffcanvas: (e) => dispatch(setOffcanvas(e)),
	setMiniSidebarMenuOn: (e) => dispatch(setMiniSidebarMenuOn(e)),
	setMiniHover: (e) => dispatch(setMiniHover(e)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Menu);