import React from "react";
import {TextBlock, TextRow, RectShape} from 'react-placeholder/lib/placeholders';
import {useTheme} from "@material-ui/core";
import HorizontalCardListPlaceHolder from "./HorizontalCardListPlaceHolder";
import 'react-placeholder/lib/reactPlaceholder.css';

const useClasses = () => {
    const theme = useTheme()
    return {
        hr: {
            height: theme.spacing(1),
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            width: "100%",
            display: "inline-flex",
        },
        categoryContainer: {
            marginBottom: theme.spacing(4)
        },
        moreButton: {
            width: theme.spacing(10),
            height: theme.spacing(5),
            borderRadius: theme.spacing(1),
            float: "right"
        },
        title: {
            width: "20%",
            justifyContent: true,
            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(3)
        },
        titleAndMoreButtonContainer: {
            display: "flex",
            justifyContent: "space-between"
        }
    }
}

export default function CategoryPlaceHolder() {
    const classes = useClasses();
    const theme = useTheme()
    return (
        <div className={"show-loading-animation"} style={classes.categoryContainer}>
            <div style={classes.titleAndMoreButtonContainer}>
                <TextBlock style={classes.title} rows={1} color={theme.palette.placeHolder.main}/>
                <RectShape style={classes.moreButton} color={theme.palette.placeHolder.main}/>
            </div>
            <TextRow style={classes.hr} color={theme.palette.placeHolder.main}/>
            <HorizontalCardListPlaceHolder count={3}/>
        </div>
    );
}