import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import CategoryBadge from "./CategoryBadge";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            height: 500,
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3),
            backgroundColor: theme.palette.placeHolder.main,
        },
        item: {
            cursor: "pointer"
        },
        image: {
            width: '100%',
            height: 500
        },
        textContainer: {
            position: "absolute",
            bottom: 0,
            paddingTop: theme.spacing(20),
            paddingBottom: theme.spacing(4),
            width: "100%",
            background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))",
            color: "#fff",
            padding: "10px",
            fontSize: "12px",
            textAlign: "start",
        },
        badge: {
            position: "absolute",
            top: 0,
            right: 0,
            margin: theme.spacing(2)
        },
        text: {
            textOverflow: "ellipsis",
            overflow: "hidden",
            WebkitLineClamp: "3",
            display: "-webkit-box",
            WebkitBoxOrient: 'vertical',
        }
    })
);

export default function CustomizedCarousel({items}) {
    const classes = useStyles();
    const history = useHistory()

    const onNewsClick = (news) => {
        //ROUTING
        window.open(news.link, '_blank')
    }

    const onCategoryClick = (category) => {
        //ROUTING
        const url = `/${category.name.toLowerCase()}`
        if (history.location.pathname !== url) {
            history.push(url)
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className={classes.root}>
            <Carousel autoPlay showStatus={false} showArrows={false} showThumbs={false} infiniteLoop>
                {
                    items.map(news => (
                        <div className={classes.item} key={news.id} onClick={onNewsClick.bind(null, news)}>
                            <img className={classes.image} src={news.pictureUrl} alt={news.title}/>
                            <CategoryBadge className={classes.badge}
                                           text={news.category.name}
                                           color={news.category.color}
                                           onClick={onCategoryClick.bind(null, news.category)}/>
                            <div className={classes.textContainer}>
                                <h1>{news.title}</h1>
                                <p className={classes.text}>{news.description}</p>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}