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
                        {/* <p className="texbanner p-3">
                            در صورت تمایل به ثبت درخواست جدید، به بخش ثبت درخواست و در صورت تمایل به پیگیری درخواست قبلی ، با در دست داشتن کد رهگیری درخواست خود، به بخش پیگیری درخواست مراجعه نمایید.
                        </p> */}
                    </div>
                    <div className=" col-xl-6  col-sm-12 col-md-12 col2">
                        <div className="row">
                            <p className="texbanner p-2 pt-xl-5 px-3" >
                                در صورت تمایل به ثبت درخواست جدید، به بخش ثبت درخواست و در صورت تمایل به پیگیری درخواست قبلی ، با در دست داشتن کد رهگیری درخواست خود، به بخش پیگیری درخواست مراجعه نمایید.
                            </p>
                            <div className="  p-2 btn1  ">
                                <Link to="/ticket/add" className="w-100 d-flex justify-content-center btnlink">
                                    <button className="btn btn-danger rounded-pill w-75 btnbaner">
                                        اعلام خسارت
                                    </button>
                                </Link>
                            </div>
                            <div className=" p-2 btn1">
                                <Link to="ticket/detail" className="w-100 d-flex justify-content-center btnlink">
                                    <button className="btn btn-danger rounded-pill w-75 btnbaner">
                                        پیگیری خسارت
                                    </button>
                                </Link>
                            </div>
                            <div className=" p-2 btn1">
                                <Link to="ticket/detail" className="w-100 d-flex justify-content-center btnlink">
                                    <button className="btn  btn-danger rounded-pill w-75 btnbaner">
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