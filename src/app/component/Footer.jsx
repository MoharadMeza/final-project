import React from "react"
import { Link } from "react-router-dom"
import "../styles/footer.css"
import imgfoot from "../Assets/images/Laye.jpg"
import { Card, CardHeader, CardContent, Typography, CardActionArea, CardMedia } from "@material-ui/core";
const Footer = () => {
    return (
        <div className="footer containerFooter">
            <div className="row ">
                <div className="col-12 ">
                    <span className="col-12 d-flex justify-content-center pt-5 titlefooter">خسارات مشمول</span>
                </div>
                <div className="col-xl-6  col-sm-12 col-md-12 pt-5 pb-5  d-flex justify-content-center ">
                    <div className="imgback">
                        <img src={imgfoot} alt="" className="imgfoot" />
                    </div>

                </div>
                <div className="col-xl-6  col-sm-12 col-md-12 pt-5 pb-5  d-flex justify-content-center ">
                    <div className="row">
                        <Typography className="texcardTitle">
                            <span>چه خساراتی شامل بیمه است؟</span>
                            <Typography variant="body2" component="p" className="texcardfoot pt-2">
                                <span>   قانون سال خسارت را مطالعه نمایید</span>
                            </Typography>
                            <Typography variant="body2" component="p" className="texcardfoot1 pt-5">
                                <a>   قانون سال خسارت را مطالعه نمایید</a>
                            </Typography>
                            <Typography variant="body2" component="p" className="texcardfoot1 pt-2">
                                <a>   قانون سال خسارت را مطالعه نمایید</a>
                            </Typography>
                        </Typography>


                    </div>


                </div>
            </div>
        </div>
    )
}
export default Footer