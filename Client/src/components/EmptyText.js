import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ChildCareIcon from "@material-ui/icons/ChildCare";

const useStyles = makeStyles((theme) => ({
        empty: {
            boxShadow: theme.shadows[8],
            padding: theme.spacing(5, 0, 5, 0),
            margin: theme.spacing(2, 0, 2, 0),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            borderRadius: theme.spacing(2)
        }
    })
)

export default function EmptyText({text}) {
    const classes = useStyles();
    return (
        <div className={classes.empty}>
            <ChildCareIcon color='secondary' style={{fontSize: 100}}/>
            <h1>{text}</h1>
        </div>
    )

}