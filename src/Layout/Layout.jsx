import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";


export default function Layout(){
    return(
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </>
    )
}