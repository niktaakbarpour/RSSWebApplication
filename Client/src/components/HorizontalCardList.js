import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import VerticalCard from "./VerticalCard";

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
export default function HorizontalCardList({items, onClick}) {
    const classes = useStyles();
    return (
        <div className={classes.cardList}>
            {
                items.map(item =>
                    <VerticalCard key={item.id} item={item} onClick={onClick}/>
                )
            }
        </div>
    )
}

