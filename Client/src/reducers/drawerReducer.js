import {handleActions} from "redux-actions";
import {openDrawer, closeDrawer} from "../actions/drawerActions";

const initialState = {
    isOpen: false,
}

export default handleActions({
    [openDrawer]: ((state) => {
        return {...state, isOpen: true}
    }),
    [closeDrawer]: ((state) => {
        return {...state, isOpen: false}
    }),
}, initialState)