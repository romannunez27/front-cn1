///Rescata el usuario y el rol del msal
import {
    useMsal
} from "@azure/msal-react";

function useAuthUser(){
    const {
        accounts
    } = useMsal();
    const user =
        accounts.length > 0
            ? accounts[0]
            : null;
    const roles =
        user?.idTokenClaims?.roles || [];
    console.log("ROLES:", roles);///quitar
    return {
        user,
        roles
    };
}
export default useAuthUser;