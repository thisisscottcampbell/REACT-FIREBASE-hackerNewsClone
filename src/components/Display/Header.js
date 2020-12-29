import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../src/utils/logo.png';
import '../../styles/index.css';

const Header = () => {
	return (
		<div className="header">
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

			<div className="flex">
				<NavLink to="/submit" className="header-link">
					submit
				</NavLink>
			</div>

			<div className="divider">|</div>

			<div className="flex">
				<NavLink to="/login" className="header-link">
					login
				</NavLink>
			</div>
			<img src={logo} alt="Hooks logo" className="logo" />
		</div>
	);
};
export default Header;
