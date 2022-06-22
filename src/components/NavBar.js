import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import "../css/navBar.css";
import Cart from "./Cart";
import Avatar from "./Avatar";

export default function NavBar() {
	const [menu, setMenu] = useState("open");

	function toggleMenu() {
		if (menu === "open") {
			setMenu("close");
		} else {
			setMenu("open");
		}
	}

	return (
		<nav className={"navbar " + menu}>
			<button className="menu-open" onClick={toggleMenu}>
				<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" />
				</svg>
			</button>

			<NavLogo />
			<NavMenu toggleMenu={toggleMenu} />
			<Cart />
			<Avatar />
		</nav>
	);
}
