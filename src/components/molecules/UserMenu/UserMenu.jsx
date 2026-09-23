import React from "react";

import Avatar from "../../atoms/Avatar";

import Button from "../../atoms/Button";


function UserMenu({

                      name,

                      role,

                      onLogout


                  }){


    const initials = name

        ?.split(" ")

        .slice(0,2)

        .map(word => word[0])

        .join("")

        .toUpperCase();



    return (

        <div className="user-menu">


            <Avatar

                initials={initials}

            />


            <div>


                <strong>

                    {name}

                </strong>


                <small>

                    {role}

                </small>


            </div>

            <Button
                variant="danger"
                onClick={onLogout}
            >
                Salir
            </Button>

        </div>
    );
}
export default UserMenu;