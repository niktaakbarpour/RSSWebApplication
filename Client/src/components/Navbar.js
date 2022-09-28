import React, {useState} from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch, useSelector} from "react-redux";
import {openDrawer} from "../actions/drawerActions";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
        root: {
            position: 'sticky',
            top: 0,
            zIndex: theme.zIndex.appBar,
            paddingBottom: theme.spacing(3)
        },
        toolbar: {
            justifyContent: "space-between",
        },
        iconButtonContainer: {},
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('lg')]: {
                display: 'block',
            },
            color: theme.palette.text.reverse
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            // height: '100%',
            // position: 'absolute',
            // pointerEvents: 'none',
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            cursor: "pointer",
            color: theme.palette.text.reverse
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 1),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
        searchContainer: {
            display: "flex",
            justifyContent: "right"
        }
    })
);

export default function NaveBar() {
    const categories = useSelector(state => state.categories.list)
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()
    const [query, setQuery] = useState("")

    const onMenuClick = () => {
        dispatch(openDrawer())
    }

    const onHomeClick = () => {
        //ROUTING
        if (history.location.pathname !== "/") {
            history.push("/")
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const startSearch = () => {
        if (!query) {
            return
        }
        //ROUTING
        history.push(`/search/${query}`)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const onQueryChanged = (ev) => {
        const query = ev.target.value
        setQuery(query)
        if (!query) {
            onHomeClick()
        }
    }

    const onNavItemClicked = (itemId) => {
        //ROUTING
        const category = categories.find((category) => {
            return category.id === itemId
        })
        const url = `/${category.name.toLowerCase()}`
        if (history.location.pathname !== url) {
            history.push(url)
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <div>
                <AppBar
                    position="sticky"
                >
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.iconButtonContainer}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onMenuClick}
                                edge="start"
                                className={classes.menuButton}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <IconButton onClick={onHomeClick}>
                                <Typography className={classes.title} variant="h6" noWrap>
                                    Home
                                </Typography>
                            </IconButton>
                            {
                                categories.map(category =>
                                    (<IconButton key={category.id} onClick={onNavItemClicked.bind(null, category.id)}>
                                        <Typography className={classes.title} variant="h6" noWrap>
                                            {category.name}
                                        </Typography>
                                    </IconButton>)
                                )
                            }
                        </div>
                        <div className={classes.searchContainer}>
                            <div className={classes.search}>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    onChange={onQueryChanged}
                                    inputProps={{'aria-label': 'search'}}
                                    type='search'
                                />
                            </div>
                            <IconButton onClick={startSearch} className={classes.searchIcon} variant="outlined">
                                <SearchIcon/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}
