import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import {CirclePicker} from 'react-color'
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import {closeDrawer} from "../actions/drawerActions";
import {useDispatch} from "react-redux";
import FeedList from "./FeedList";
import ReactPlaceholder from "react-placeholder";
import FeedListPlaceHolder from "../placeholders/FeedListPlaceHolder";

const useStyles = makeStyles((theme) => ({
        form: {
            '& > *': {
                justifyContent: "space-evenly",
            },
            // justifyContent: "space-evenly",
            display: "flex",
            flexDirection: "column",
            margin: theme.spacing(2)
        },
        input: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            marginLeft: theme.direction === 'ltr' ? theme.spacing(1) : 0,
            marginRight: theme.direction === 'rtl' ? theme.spacing(1) : 0,
        },
        textFieldContainer: {
            marginBottom: theme.spacing(2),
            display: "flex",
            flexDirection: "column",
        },
        button: {
            display: "block",
            margin: "auto",
            width: "max-content"
        },
        colorPicker: {
            marginBottom: theme.spacing(2),
            margin: "auto"
        },
        empty: {
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }
    })
)

export default function DrawerContent() {
    const classes = useStyles()
    const [feeds, setFeeds] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [selectedColor, selectColor] = useState('#F44336')
    const history = useHistory()
    const dispatch = useDispatch()


    useEffect(() => {
        //API
        axios.get(`${BASE_URL}/api/feeds`)
            .then((response) => {
                setFeeds(response.data)
                setIsPending(false)
            })
    }, [])

    const onCategoryClick = (category) => {
        //ROUTING
        const url = `/${category.name.toLowerCase()}`
        if (history.location.pathname !== url) {
            history.push(url)
        }
        dispatch(closeDrawer())
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const addNewSource = () => {
        const feedName = document.getElementById('feedName')
        const categoryName = document.getElementById('feedCategory')
        const feedUrl = document.getElementById('feedLink')
        if (!(feedName.value && categoryName.value && feedUrl.value)) {
            alert("Please Fill All Field.")
            return
        }
        const category = {
            id: 0,
            name: categoryName.value,
            color: selectedColor
        }
        const newFeed = {
            id: 0,
            name: feedName.value,
            url: feedUrl.value,
            category: category
        }

        setIsPending(true)

        //API
        axios.post(`${BASE_URL}/api/feeds`, newFeed)
            .then((response) => {
                if (response.status === 200) {
                    reload()
                }
            })

        feedName.value = ""
        categoryName.value = ""
        feedUrl.value = ""
    }

    const deleteFeed = (feed) => {
        //API
        setIsPending(true)
        axios.delete(`${BASE_URL}/api/feeds/${feed.id}`)
            .then((response) => {
                if (response.status === 200) {
                    reload()
                }
            })
    }

    const reload = () => {
        //ROUTING
        if (history.location.pathname !== "/") {
            history.push("/")
        }
        window.location.reload()
    }

    return (
        <div>
            <form className={classes.form} noValidate autoComplete="off">
                <div className={classes.textFieldContainer}>
                    <TextField
                        id="feedName"
                        className={classes.input}
                        variant="outlined"
                        label="Name"
                        type='search'
                    />
                    <TextField
                        id="feedCategory"
                        className={classes.input}
                        variant="outlined"
                        label="Category"
                        type='search'
                    />
                    <TextField
                        id="feedLink"
                        className={classes.input}
                        variant="outlined"
                        label="Link"
                        type='search'
                    />
                </div>
                <div className={classes.colorPicker}>
                    <CirclePicker onChange={(color) => selectColor(color.hex)}/>
                </div>
                <Button className={classes.button} onClick={addNewSource} variant="contained" color="primary">
                    +
                </Button>
            </form>
            <ReactPlaceholder ready={!isPending}
                              showLoadingAnimation
                              customPlaceholder={<FeedListPlaceHolder count={5}/>}>
                {
                    feeds.length === 0 ?
                        <h2 className={classes.empty}>Please Add Feeds</h2> :
                        <FeedList feeds={feeds} onCategoryClick={onCategoryClick} deleteFeed={deleteFeed}/>
                }
            </ReactPlaceholder>

        </div>
    )
}