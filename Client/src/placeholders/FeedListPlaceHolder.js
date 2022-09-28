import React from "react";
import {ListItem} from "@material-ui/core";
import FeedCardPlaceHolder from "./FeedCardPlaceHolder";

export default function FeedListPlaceHolder({count}) {
    const items = []
    for (let i = 0; i < count; i++) {
        items.push(i)
    }
    return (
        <div>
            {
                items.map(item => <ListItem key={item}><FeedCardPlaceHolder/></ListItem>)
            }
        </div>
    )

}