import {handleActions} from "redux-actions";
import {addCarouselItem, addMostReadItem} from "../actions/collectionsAction";

const initialState = {
    carousel: {
        list: []
    },
    mostRead: {
        list: []
    }
}

export default handleActions({
    [addCarouselItem]: ((state, action) => {
        const newItem = action.payload
        if (state.carousel.list.find((item) => item.id === newItem.id) === undefined) {
            return {...state, carousel: {list: [...state.carousel.list, newItem]}}
        }
        return state
    }),
    [addMostReadItem]: ((state, action) => {
        const newItem = action.payload
        if (state.mostRead.list.find((item) => item.id === newItem.id) === undefined) {
            return {...state, mostRead: {list: [...state.mostRead.list, newItem]}}
        }
        return state
    })
}, initialState)