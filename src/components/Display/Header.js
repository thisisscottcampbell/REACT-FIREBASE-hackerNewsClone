import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import logo from '../../../src/utils/logo.png';

const Header = () => {
	return (
		<div className="header">
			<div className="flex">
				<img src={logo} alt="Hooks logo" className="logo" />

				<NavLink to="/" className="header-title">
					Hooks News
				</NavLink>
				<NavLink to="/" className="header-link">
					new
				</NavLink>

				<div className="divider">|</div>

				<NavLink to="/top" className="header-link">
					top
				</NavLink>

				<div className="divider">|</div>

				<NavLink to="/search" className="header-link">
					search
				</NavLink>

				<div className="divider">|</div>

				<NavLink to="/submit" className="header-link">
					submit
				</NavLink>
			</div>
		</div>
	);
};
export default Header;
