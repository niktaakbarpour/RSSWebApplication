import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import VerticalCardPlaceHolder from "./VerticalCardPlaceHolder";

const useStyles = makeStyles((theme) => ({
        cardList: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            [theme.breakpoints.down('md')]: {
                gridTemplateColumns: "1fr 1fr"
            },
            [theme.breakpoints.down('xs')]: {
                gridTemplateColumns: "1fr"
            },
            gridGap: theme.spacing(2)
        }
    })
);

export default function HorizontalCardListPlaceHolder({count}) {
    const classes = useStyles();
    const items = []
    for (let i = 0; i < count; i++) {
        items.push(i)
    }
    return (
        <div className={classes.cardList}>
            {
                items.map((index) => <VerticalCardPlaceHolder key={index}/>)
            }
        </div>
    )
}