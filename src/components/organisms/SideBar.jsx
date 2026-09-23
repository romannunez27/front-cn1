import React from "react";
import SideBarItem from "../molecules/SideBarItem/SideBarItem";
import useAuthUser from "../../auth/useAuthUser";

import "./SideBar.css";

const menuItems = [


    {
        name:"Inicio",
        path:"/",
        icon:"🏠",
        roles:[
            "ROLE_USER",
            "ROLE_OPERATOR",
            "ROLE_ADMIN"
        ]
    },


    {
        name:"Crear solicitud",
        path:"/crear-solicitud",
        icon:"➕",
        roles:[
            "ROLE_USER","ROLE_OPERATOR","ROLE_ADMIN"
        ]
    },


    {
        name:"Mis solicitudes",
        path:"/solicitudes",
        icon:"📄",
        roles:[
            "ROLE_USER"
        ]
    },


    {
        name:"Gestión solicitudes",
        path:"/operador",
        icon:"📋",
        roles:[
            "ROLE_OPERATOR"
        ]
    },
    {
        name:"Administración",
        path:"/admin",
        icon:"⚙️",
        roles:[
            "ROLE_ADMIN"
        ]
    }
];

function SideBar(){
    const {
        roles
    } = useAuthUser();

    const visibleMenu = menuItems.filter(item =>
        item.roles.some(role =>
            roles.includes(role)
        )
    );

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <h3>
                    MesaTech
                </h3>
                <small>
                    Cloud Platform
                </small>
            </div>
            <nav>
                {
                    visibleMenu.map(item => (
                        <SideBarItem
                            key={item.path}
                            icon={item.icon}
                            label={item.name}
                            path={item.path}
                        />
                    ))
                }
            </nav>
        </aside>
    );
}
export default SideBar;