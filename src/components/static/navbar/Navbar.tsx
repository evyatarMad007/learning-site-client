import React from "react";
import { NavbarStyled } from "./Navbar.styled";
import { NavLink } from "react-router-dom";
import {
	MdLocationOn,
	MdOutlineBugReport,
	MdManageAccounts,
} from "react-icons/md";
import { SiMatrix } from "react-icons/si";

const Header: React.FC = () => {
	return (
		<NavbarStyled>
			<nav className='nav'>
				<NavLink className='nav-link' to='/'>
					<span>Executive</span>
					<MdManageAccounts />
				</NavLink>
				<NavLink className='nav-link' to='/ip-range'>
					<span> IP Range </span>
					<MdLocationOn />
				</NavLink>
				<NavLink className='nav-link' to='/mitre-matrix'>
					<span> Mitre Matrix </span>
					<SiMatrix />
				</NavLink>
				<NavLink className='nav-link' to='/testing-scenarios-details'>
					<span>Testing Scenarios Details</span>
					<MdOutlineBugReport />
				</NavLink>
			</nav>
		</NavbarStyled>
	);
};

export default Header;
