import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import imagePlaceHolder from "../assets/imagePlaceHolder.jpg";
import CategoryBadge from "./CategoryBadge";
import {useHistory} from "react-router-dom";
import {getBrief} from "../util/Utils";

const useStyles = makeStyles((theme) => ({
        cardContainer: {
            display: "flex",
            flexDirection: "row",
            boxShadow: theme.shadows[8],
            margin: theme.spacing(1),
            borderRadius: theme.spacing(1),
            cursor: "pointer",
            // height: theme.spacing(15)
            // width: theme.spacing(40)
        },
        badge: {
            marginBottom: theme.spacing(1)
        },
        cardContent: {
            width: "100%"
        },
        container: {
            padding: theme.spacing(1),
            '&:hover': {
                backgroundColor: theme.palette.hover.main
            }
        },
        title: {
            fontSize: "small",
        },
        placeholder: {
            width: theme.spacing(13),
            height: '100%',
        },
        image: {
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundImage: `url(${imagePlaceHolder})`,
            width: theme.spacing(13),
            minHeight: theme.spacing(12),
            height: "100%",
            display: "block",
        }
    })
);

export default function MostReadHorizontalCard({item, onClick}) {
    const classes = useStyles();
    const history = useHistory()

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
        <Card className={classes.cardContainer} onClick={() => onClick(item)}>
            <div className={classes.placeholder}>
                <img className={classes.image} alt={item.title}
                     src={item.pictureUrl ? item.pictureUrl : imagePlaceHolder}/>
            </div>
            <div className={classes.container}>
                <CategoryBadge className={classes.badge}
                               text={item.category.name}
                               color={item.category.color}
                               onClick={onCategoryClick.bind(null, item.category)}/>
                <Typography className={classes.title} gutterBottom>
                    {getBrief(item.title, 44)}
                </Typography>
            </div>
        </Card>
    );
}
