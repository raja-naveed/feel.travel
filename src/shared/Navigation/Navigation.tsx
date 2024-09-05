import React from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO_4 } from "@/data/navigation";

function Navigation() {
  return (
		<ul className="nc-Navigation relative hidden lg:flex lg:flex-wrap lg:space-x-1">
			{NAVIGATION_DEMO_4.map((item) => (
				<NavigationItem key={item.id} menuItem={item} />
			))}
		</ul>
	)
}

export default Navigation;
