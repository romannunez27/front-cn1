import React from "react";

import Sidebar from "../organisms/Sidebar";
import Header from "../organisms/Header";


function MainLayout({children}) {


    return (

        <div className="container-fluid">


            <div className="row">


                <div className="col-md-3 col-lg-2 p-0">

                    <Sidebar />

                </div>



                <div className="col-md-9 col-lg-10 p-0">


                    <Header />


                    <main className="p-4">

                        {children}

                    </main>

                </div>

            </div>

        </div>

    );

}

export default MainLayout;