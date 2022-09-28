import {handleActions} from "redux-actions";
import {setEndDate, toggleFilterIsOpen, setLimitCount, setStartDate} from "../actions/filtersActions";

const initialState = {
    startDate: null,
    endDate: null,
    limitCount: null,
    isOpen: false
}

export default handleActions({
    [setStartDate]: ((state, action) => {
        return {...state, startDate: action.payload}
    }),
    [setEndDate]: ((state, action) => {
        return {...state, endDate: action.payload}
    }),
    [setLimitCount]: ((state, action) => {
        return {...state, limitCount: action.payload}
    }),
    [toggleFilterIsOpen]: ((state) => {
        return {...state, isOpen: !state.isOpen}
    }),
}, initialState)