import React from "react";
import "../css/navMenu.css";

const MENU = ["Collections", "Men", "Women", "About", "Contact"];

export default function NavMenu({ toggleMenu }) {
	function setActiveMenu(e) {
		const menuItems = document.querySelectorAll(".nav-menu-item");
		menuItems.forEach((item) => item.classList.remove("active"));
		e.target.parentElement.classList.add("active");
	}

	return (
		<div>
			<ul className="nav-menu">
				<button className="menu-close" onClick={toggleMenu}>
					<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
							fill="#69707D"
						/>
					</svg>
				</button>
				{MENU.map((item) => {
					return (
						<li key={item} className="nav-menu-item">
							<button onClick={setActiveMenu} href="#">
								{item}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
