import React from "react"

const Header = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary sticky-top">
            <div class="container">
                <a class="navbar-brand">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" >صفحه نخست</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">اعلام خرابی</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >پیگیری گزارش</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;