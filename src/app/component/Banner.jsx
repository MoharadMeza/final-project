import React from "react"
import { Link } from "react-router-dom"
import "../styles/banner.css"
const Banner = () => {

    return (
        <section className="banner">
            <div className="container h-100">
                <div className="row h-100 justify-content-end">
                    <div className="col-xl-6  col-sm-12 col-md-12 col1">
                    {/* <h4 className="textTitle p-2 ">
                            شرکت توانیر
                        </h4> */}
                        <p className="texbanner p-3">
                            در صورت تمایل به ثبت درخواست جدید، به بخش ثبت درخواست و در صورت تمایل به پیگیری درخواست قبلی ، با در دست داشتن کد رهگیری درخواست خود، به بخش پیگیری درخواست مراجعه نمایید.
                        </p>
                    </div>
                    <div className=" col-xl-6  col-sm-12 col-md-12 col2">
                        <div className="row">
                        
                        <div className=" pt-5 p-2 p-sm-unset ">
                            <Link to="/ticket/add">
                                <button className="btn btn-danger rounded-pill w-100 btnbaner">
                                    اعلام خسارت
                                </button>
                            </Link>
                        </div>
                        <div className=" p-2 ">
                            <Link to="ticket/detail">
                                <button className="btn btn-danger rounded-pill w-100 btnbaner">
                                    پیگیری خسارت
                                </button>
                            </Link>
                        </div>
                        <div className=" p-2 ">
                            <Link to="ticket/detail">
                                <button className="btn  btn-danger rounded-pill w-100 btnbaner">
                                    راهنمای کاربر
                                </button>
                            </Link>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner