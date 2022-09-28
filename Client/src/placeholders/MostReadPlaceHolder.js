import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import MostReadHorizontalCardPlaceHolder from "./MostReadHorizontalCardPlaceHolder";

const useStyles = makeStyles((theme) => ({
        cardList: {
            display: "grid",
            gridTemplateColumns: "1fr",
        }
    })
);

export default function MostReadPlaceHolder({count}) {
    const classes = useStyles();
    const items = []
    for (let i = 0; i < count; i++) {
        items.push(i)
    }
    return (
        <div className={classes.cardList}>
            {
                items.map((index) => <MostReadHorizontalCardPlaceHolder key={index}/>)
            }
        </div>
    )
}