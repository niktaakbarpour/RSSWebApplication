import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from "@material-ui/core/styles";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {Button, TextField} from "@material-ui/core";
import {setEndDate, setLimitCount, setStartDate, toggleFilterIsOpen} from "../actions/filtersActions";
import {getDateWithoutTime} from "../util/Utils";

const useStyles = makeStyles(() => ({
        container: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'center',
        }
    })
);

export default function NewsFilter() {
    const classes = useStyles();
    const dispatch = useDispatch()

    const startDateFilter = useSelector((state) => state.filters.startDate)
    const endDateFilter = useSelector((state) => state.filters.endDate)
    const limitCountFilter = useSelector((state) => state.filters.limitCount)
    const isOpen = useSelector((state) => state.filters.isOpen)

    const [startDate, setStartDateLocal] = useState(startDateFilter)
    const [endDate, setEndDateLocal] = useState(endDateFilter)
    const [limitCount, setLimitCountLocal] = useState(limitCountFilter)

    return (
        <Collapse in={isOpen} unmountOnExit>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className={classes.container}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        label="Start Date"
                        value={startDate}
                        onChange={date => setStartDateLocal(getDateWithoutTime(date))}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        label="End Date"
                        value={endDate}
                        onChange={date => setEndDateLocal(getDateWithoutTime(date))}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                    <TextField
                        error={limitCount < 0}
                        id="limitCount"
                        variant="standard"
                        label="Count"
                        type='number'
                        value={limitCount || ""}
                        InputProps={{inputProps: {min: 0}}}
                        onChange={(ev) => setLimitCountLocal(ev.target.value)}
                    />

                    <Button variant="contained" color="secondary" onClick={() => {
                        dispatch(setStartDate(startDate))
                        dispatch(setEndDate(endDate))
                        dispatch(setLimitCount(limitCount))
                        dispatch(toggleFilterIsOpen())
                    }}>
                        Apply
                    </Button>
                </div>
            </MuiPickersUtilsProvider>
        </Collapse>
    )
}