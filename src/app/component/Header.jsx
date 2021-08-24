import React from "react"
import "../styles/header.css"
import img from "../Assets/images/bargh.png"
const Header = () => {

    return (
        <nav className="header navbar navbar-expand-lg navbar-dark sticky-top">
            <div class="container">
                <a class="logo navbar-brand">
                    <img className="imglogo" src={img} alt="" />
                    <span className="texlogo">شرکت برق</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link active navlink1" aria-current="page" >
                                صفحه نخست
                             
                                </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navlink">اعلام خسارت</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navlink" >پیگیری خسارت</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;