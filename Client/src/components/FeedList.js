import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FeedCard from "./FeedCard";

export default function FeedList({feeds, onCategoryClick, deleteFeed}) {
    return (
        <List>
            {feeds.map((feed) => (
                <ListItem key={feed.id}>
                    <FeedCard feed={feed} onCategoryClicked={onCategoryClick} onDelete={deleteFeed}/>
                </ListItem>
            ))}
        </List>
    )
}