import React from "react";
import {
    useMsal
} from "@azure/msal-react";
import {
    ROLE_LABELS
} from "../../auth/roles";
import useAuthUser from "../../auth/useAuthUser";
import UserMenu from "../molecules/UserMenu/UserMenu";
import "./Header.css";
function Header() {
    const {
        instance
    } = useMsal();
    const {
        user,
        roles
    } = useAuthUser();
    const logout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri:
            window.location.origin
        });
    };
    return (
        <header className="header">
            <h4>
                Panel MesaTech Cloud
            </h4>
            <UserMenu
                name={user?.name}
                role={ROLE_LABELS[roles[0]]}
                onLogout={logout}
            />
        </header>
    );
}
export default Header;