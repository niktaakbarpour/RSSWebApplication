import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import HorizontalCard from "./HorizontalCard";

const useStyles = makeStyles((theme) => ({
        cardList: {
            display: "grid",
            gridTemplateColumns: "1fr",
            gridGap: theme.spacing(1),
            marginLeft: theme.spacing(-2)
        }
    })
);
export default function VerticalCardList({items, onClick}) {
    const classes = useStyles();
    return (
        <div className={classes.cardList}>
            {
                items.map(item =>
                    <HorizontalCard key={item.id} item={item} onClick={onClick}/>
                )
            }
        </div>
    )
}

