import React from "react"
import "../styles/header.css"
import img from "../Assets/images/bargh.png"
import { Navbar, Nav } from "react-bootstrap"
const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" fixed="top">
            <div className="container-fluid">
                <Navbar.Brand href="/" >
                    <img className="imglogo" src={img} alt="" />
                    <span className="texlogo">شرکت توانیر</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="navlink text-light">صفحه نخست</Nav.Link>
                        <Nav.Link href="/ticket/add" className="navlink text-light">اعلام خرابی</Nav.Link>
                        <Nav.Link href="/ticket/detail" className="navlink text-light">پیگیری خرابی</Nav.Link>
                        <Nav.Link href="/criticsAndsuggestions" className="navlink text-light">پیشنهادات و انتقادات</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
        //     <nav className="header navbar navbar-expand-lg navbar-dark sticky-top">
        //         <div className="container">
        //             <Link className="logo navbar-brand" to="/">
        //                 <img className="imglogo" src={img} alt="" />
        //                 <span className="texlogo">شرکت برق</span>
        //             </Link>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarNav">
        //                 <ul className="navbar-nav me-auto">
        //                     <li className="nav-item">
        //                         <Link className="nav-link navlink" to="/">
        //                             صفحه نخست
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link navlink" to="/ticket/add">اعلام خسارت</Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link navlink" to="/ticket/detail" >پیگیری خسارت</Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link navlink" to="/criticsAndsuggestions" >انتقادات و پیشنهادات</Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // 
    )
}
export default Header;