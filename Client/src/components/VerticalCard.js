import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {formatDate, getBrief} from "../util/Utils";
import imagePlaceHolder from "../assets/imagePlaceHolder.jpg"

const useStyles = makeStyles((theme) => ({
        cardContainer: {
            display: "flex",
            flexDirection: "column",
            boxShadow: theme.shadows[8],
            margin: theme.spacing(1),
            borderRadius: theme.spacing(1),
            cursor: "pointer",
            maxWidth: theme.spacing(43),
            position: "relative",
            height: theme.spacing(60)

        },
        timeContainer: {
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            position: "absolute",
            bottom: "0",
            marginTop: theme.spacing(2)
        },
        cardContent: {
            padding: theme.spacing(2),
            '&:hover': {
                backgroundColor: theme.palette.hover.main
            },
            height: "100%"
        },
        text: {
            // textOverflow: "ellipsis",
            // overflow: "hidden",
            // whiteSpace: "nowrap",
            // WebkitLineClamp: "3",
            // display: "-webkit-box",
            // WebkitBoxOrient: 'vertical',
        },
        placeholder: {
            width: '100%',
            height: theme.spacing(30),
        },
        image: {
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundImage: `url(${imagePlaceHolder})`,
            width: "100%",
            height: theme.spacing(30)
        },
        date: {
            color: theme.palette.text.secondary
        }
    })
);

export default function VerticalCard({item, onClick}) {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer} onClick={() => onClick(item)}>
            <div className={classes.placeholder}>
                <img className={classes.image} alt={item.title}
                     src={item.pictureUrl ? item.pictureUrl : imagePlaceHolder}/>
            </div>
            <div className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h5">
                    {item.title}
                </Typography>
                <Typography className={classes.text} variant="body2" color="textSecondary"
                            component="p">
                    {getBrief(item.description, 44)}
                </Typography>
                <div className={classes.timeContainer}>
                    <p className={classes.date}>{formatDate(item.dateMillies)}</p>
                </div>
            </div>
        </Card>
    );
}
