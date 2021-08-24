import React from "react"
import { Link } from "react-router-dom"
import "../styles/banner.css"
const Banner = () => {

    return (
        <section className="banner">
            <div className="container h-100">
                <div className="row h-100 justify-content-end">
                    <div className="col-6 align-self-center">
                        <h4 className="textTitle p-2 px-5">
                              مشهد شرکت توانیر
                        </h4>
                        <p className="texbanner p-2 px-5">
                            در صورت تمایل به ثبت درخواست جدید، به بخش ثبت درخواست و در صورت تمایل به پیگیری درخواست قبلی ، با در دست داشتن کد رهگیری درخواست خود، به بخش پیگیری درخواست مراجعه نمایید.
                        </p>
                        <div className="row p-2 px-5">
                            <Link to="/ticket/add">
                                <button className="btn btn-danger rounded-pill w-100 btnbaner">
                                    اعلام خسارت
                                </button>
                            </Link>

                        </div>
                        <div className="row p-2 px-5">
                            <Link to="ticket/detail">
                                <button className="btn btn-danger rounded-pill w-100 btnbaner">
                                    پیگیری خسارت
                                </button>
                            </Link>

                        </div>
                        <div className="row p-2 px-5">
                        <Link to="ticket/detail">
                        <button className="btn  btn-danger rounded-pill w-100 btnbaner">
                                راهنمای کاربر
                            </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner