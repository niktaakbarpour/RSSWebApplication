import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardContent, useTheme} from "@material-ui/core";
import {TextBlock} from "react-placeholder/lib/placeholders";
import clsx from "clsx";
import 'react-placeholder/lib/reactPlaceholder.css';


const useStyles = makeStyles((theme) => ({
        card: {
            backgroundColor: theme.palette.placeHolder.secondary,
            boxShadow: theme.shadows[2],
            borderRadius: theme.spacing(1),
            margin: theme.spacing(1),
            width: theme.spacing(40)
        }
    })
)

export default function FeedCardPlaceHolder() {
    const classes = useStyles()
    const theme = useTheme();

    return (
        <Card className={clsx(classes.card, "show-loading-animation")}>
            <CardContent>
                <TextBlock rows={6} color={theme.palette.placeHolder.main}/>
            </CardContent>
        </Card>
    )
}