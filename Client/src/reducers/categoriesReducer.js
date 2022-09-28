import {handleActions} from "redux-actions";
import {setCategories, setCategoryLoading} from "../actions/categoriesActions";

const initialState = {
    list: [],
    isLoading: true
}

export default handleActions({
    [setCategories]: ((state, action) => {
        return {...state, list: action.payload}
    }), [setCategoryLoading]: ((state, action) => {
        return {...state, isLoading: action.payload}
    })
}, initialState)