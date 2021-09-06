import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/overview.css"
import { warningsMessages } from "../enums/messages"
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
const useStyles = makeStyles({
    media: {
        textAlign: "center",
        height: 140,
    },
    content: {
        height: "100%"
    }

});
const Overview = () => {
    const classes = useStyles();
    const setting = {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <section className="overview">

            <div className="containerOver  p-5 ">
                <Typography className=" pb-5">
                    <span className="titleOverwiew">
                        پیام ها
                    </span>

                </Typography>
                <div className="row rowOver">
                    <Slider
                        className="sliderdesktap"
                        {...setting}
                    >
                        {warningsMessages.map((messages, index) => (
                            <Card
                                className="card"
                                key={index}
                            >
                                <CardContent
                                    className="cardC"
                                    className={classes.content}
                                >
                                    <div className="row h-100">
                                        <div className="col-8 py-5">
                                            <Typography className="texcardTitle">
                                                توجه
                                            </Typography>
                                            <hr />
                                            <Typography variant="body2" color="textSecondary" component="p" className="texcard">
                                                {messages.msg}
                                            </Typography>
                                        </div>
                                        <div className="col-4 p-5">
                                            <CardMedia
                                                className={classes.media}
                                            >
                                                <span className="icon">
                                                    <FontAwesomeIcon className="lightBulb" icon={faLightbulb} size="5x" />
                                                </span>
                                            </CardMedia>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                        ))}
                    </Slider>
                    <Slider
                        className="slidermobile"
                        dots={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={false}
                        autoplaySpeed={1000}
                    >
                        {warningsMessages.map((messages, index) => (
                            <Card
                                className="card"
                                key={index}>
                                <CardContent
                                    className="cardC"
                                    className={classes.content}
                                >
                                    <div className="row h-100">
                                        <div className="col-8 py-5">
                                            <Typography className="texcardTitle">
                                                توجه
                                            </Typography>
                                            <hr />
                                            <Typography variant="body2" color="textSecondary" component="p" className="texcard">
                                                {messages.msg}
                                            </Typography>
                                        </div>
                                        <div className="col-4 p-5">
                                            <CardMedia
                                                className={classes.media}
                                            >
                                                <span className="icon">
                                                    <FontAwesomeIcon className="lightBulb" icon={faLightbulb} size="5x" />
                                                </span>
                                            </CardMedia>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                        ))}
                    </Slider>
                </div>
            </div>
        </section >
    )
}
export default Overview