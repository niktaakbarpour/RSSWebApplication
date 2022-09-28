import {combineReducers} from "redux";
import drawerReducer from "./drawerReducer";
import categories from "./categoriesReducer";
import collections from "./collectionsReducer";
import filters from "./filtersReducer";

export default combineReducers({
    drawer: drawerReducer,
    categories: categories,
    collections: collections,
    filters: filters
})

