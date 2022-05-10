import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Directory from "./Directory";
import Feed from "./Feed";

function Dashboard(){
    return(
        <div>
            <Header />
            <Directory />
            <Feed />
        </div>
    );
}

export default Dashboard;