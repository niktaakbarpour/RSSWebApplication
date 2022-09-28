import React from "react";
import CategoryPlaceHolder from "./CategoryPlaceHolder";

export default function HomePagePlaceHolder() {
    const items = [1, 2, 3]
    return (
        <div>
            {
                items.map((index) => <CategoryPlaceHolder key={index}/>)
            }
        </div>
    )
}