import React from "react";

import {
    NavLink
} from "react-router-dom";


import "./SidebarItem.css";



function SidebarItem({
                         icon,
                         label,
                         path
                     }){
    return (
        <NavLink
            to={path}

            className={({isActive}) =>
                isActive
                    ? "sidebar-item active"

                    : "sidebar-item"
            }
        >
<span className="sidebar-icon">
    {icon}
</span>
            <span>
    {label}
</span>
        </NavLink>
    );
}
export default SidebarItem;