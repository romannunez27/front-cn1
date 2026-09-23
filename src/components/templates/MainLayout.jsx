import React from "react";

import SideBar from "../organisms/SideBar";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

function MainLayout({children}){

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-lg-2 p-0">
                    <SideBar />
                </div>
                <div className="col-md-9 col-lg-10 p-0 d-flex flex-column min-vh-100">
                    <Header />
                    <main className="p-4 flex-grow-1">
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
export default MainLayout;