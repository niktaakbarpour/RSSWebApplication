import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import HorizontalCardPlaceHolder from "./HorizontalCardPlaceHolder";

const useStyles = makeStyles((theme) => ({
        cardList: {
            display: "grid",
            gridTemplateColumns: "1fr",
            gridGap: theme.spacing(1),
            marginLeft: theme.spacing(-2)
        }
    })
);

export default function VerticalCardListPlaceHolder({count}) {
    const classes = useStyles();
    const items = []
    for (let i = 0; i < count; i++) {
        items.push(i)
    }
    return (
        <div className={classes.cardList}>
            {
                items.map(item => <HorizontalCardPlaceHolder key={item}/>)
            }
        </div>
    )
}