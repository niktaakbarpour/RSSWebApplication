import React from "react";
import {Card, CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CategoryBadge from "./CategoryBadge";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
        card: {
            boxShadow: theme.shadows[4],
            borderRadius: theme.spacing(1),
            margin: theme.spacing(1),
            width: theme.spacing(40)
        },
        badge: {},
        link: {
            wordWrap: "break-word"
        },
        badgeAndDeleteContainer: {
            display: "flex",
            alignItems: 'center',
            justifyContent: "space-between",
        }
    })
)

export default function FeedCard({feed, onDelete, onCategoryClicked}) {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" component="h5">
                    {feed.name}
                </Typography>
                <Typography color="textSecondary" className={classes.link}>
                    {feed.url}
                </Typography>
                <div className={classes.badgeAndDeleteContainer}>
                    <CategoryBadge className={classes.badge}
                                   text={feed.category.name}
                                   color={feed.category.color}
                                   onClick={() => onCategoryClicked(feed.category)}
                    />
                    <IconButton onClick={() => onDelete(feed)}>
                        <DeleteIcon color="primary"/>
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    )
}