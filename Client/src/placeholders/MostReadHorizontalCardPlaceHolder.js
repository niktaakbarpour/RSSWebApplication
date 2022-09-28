import React from "react";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import {TextBlock} from "react-placeholder/lib/placeholders";
import {useTheme} from "@material-ui/core";
import 'react-placeholder/lib/reactPlaceholder.css';

const useStyles = makeStyles((theme) => ({
        cardContainer: {
            backgroundColor: theme.palette.placeHolder.secondary,
            display: "flex",
            flexDirection: "row",
            boxShadow: theme.shadows[2],
            margin: theme.spacing(1),
            borderRadius: theme.spacing(1),
        },
        content: {
            display: 'flex',
            width: '100%',
            alignItems: 'center'
        },
        image: {
            minHeight: theme.spacing(12),
            width: theme.spacing(13),
        }
    })
);

export default function MostReadHorizontalCardPlaceHolder() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={clsx(classes.cardContainer, "show-loading-animation")}>
            <div className={classes.image}/>
            <CardContent className={classes.content}>
                <TextBlock rows={2} color={theme.palette.placeHolder.main}/>
            </CardContent>
        </Card>
    )
}