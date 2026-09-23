import React from "react";
import useAuthUser from "../../auth/useAuthUser";
import { Link } from "react-router-dom";
const menuItems = [
    {
        name:"Inicio",
        icon:"🏠",
        roles:[
            "ROLE_USER",
            "ROLE_OPERATOR",
            "ROLE_ADMIN"
        ]
    },
    {
        name:"Mis solicitudes",
        icon:"📄",
        roles:[
            "ROLE_USER"
        ]
    },
    {
        name:"Gestión solicitudes",
        icon:"📋",
        roles:[
            "ROLE_OPERATOR"
        ]
    },
    {
        name:"Administración",
        icon:"⚙",
        roles:[
            "ROLE_ADMIN"
        ]
    }
];
function Sidebar(){
    const {
        roles
    } = useAuthUser();
    const visibleMenu = menuItems.filter(item =>
        item.roles.some(role =>
            roles.includes(role)
        )
    );
    return (
        <aside className="bg-dark text-white min-vh-100 p-3">
            <h4 className="fw-bold">
                MesaTech
            </h4>
            <nav className="mt-4">
                <ul className="nav flex-column">
                    {
                        visibleMenu.map((item,index)=>(
                            <li
                                key={index}
                                className="nav-item mb-2"
                            >
                                <Link to={item.path}>
                                    {item.icon}
                                    {" "}
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    );
}
export default Sidebar;