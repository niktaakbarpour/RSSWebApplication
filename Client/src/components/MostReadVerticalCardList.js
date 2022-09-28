import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MostReadHorizontalCard from "./MostReadHorizontalCard";

const useStyles = makeStyles((theme) => ({
        cardList: {
            display: "grid",
            gridTemplateColumns: "1fr",
        }
    })
);
export default function MostReadVerticalCardList({items, onClick}) {
    const classes = useStyles();
    return (
        <div className={classes.cardList}>
            {
                items.map(item =>
                    <MostReadHorizontalCard key={item.id} item={item} onClick={onClick}/>
                )
            }
        </div>
    )
}

