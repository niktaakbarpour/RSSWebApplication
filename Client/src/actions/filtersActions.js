import {createAction} from "redux-actions";

export const setStartDate = createAction('filter/startDate')
export const setEndDate = createAction('filter/endDate')
export const setLimitCount = createAction('filter/limitCount')
export const toggleFilterIsOpen = createAction('filter/visibility')
