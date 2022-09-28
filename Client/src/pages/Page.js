import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import NaveBar from "../components/Navbar";
import HomePage from "./HomePage";
import {Route, Switch} from "react-router-dom";
import CategoryPage from "./CategoryPage";
import {Drawer} from "@material-ui/core";
import DrawerContent from "../components/DrawerContent";
import {useDispatch, useSelector} from "react-redux";
import {closeDrawer} from "../actions/drawerActions";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import {setCategories, setCategoryLoading} from "../actions/categoriesActions";
import SearchPage from "./SearchPage";
import MostRead from "../components/MostRead";
import Grid from "@material-ui/core/Grid";
import Weather from "../components/Weather";
import Footer from "../components/Footer";
import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
        routerRoot: {
            marginRight: theme.spacing(3)
        },
        drawer: {
            flexShrink: 0,
        },
        drawerPaper: {
            width: theme.spacing(48)
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        carouselAndPage: {
            // marginRight: theme.spacing(38),
            // marginLeft: theme.spacing(38),
            [theme.breakpoints.down('sm')]: {
                marginLeft: theme.spacing(0),
                marginRight: theme.spacing(0),
            },
            [theme.breakpoints.up('md')]: {
                marginLeft: theme.spacing(10),
                marginRight: theme.spacing(10),
            },
            [theme.breakpoints.up('lg')]: {
                marginLeft: theme.spacing(30),
                marginRight: theme.spacing(30),
            },
        },
        calendar: {
            marginTop: theme.spacing(7),
            boxShadow: theme.shadows[4],
            borderRadius: theme.spacing(1),
        }
    })
)

export default function Page() {
    const classes = useStyles();
    const isDrawerOpen = useSelector(state => state.drawer.isOpen)
    const dispatch = useDispatch()
    const theme = useTheme();
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        //API
        axios.get(`${BASE_URL}/api/categories`)
            .then((response) => {
                dispatch(setCategories(response.data))
                dispatch(setCategoryLoading(false))
            })
    }, [])

    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="temporary"
                anchor="left"
                open={isDrawerOpen}
                onClose={() => dispatch(closeDrawer())}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                    <h3>News Sources</h3>
                    <IconButton onClick={() => dispatch(closeDrawer())}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <DrawerContent/>
            </Drawer>
            <Header/>
            <NaveBar/>
            <div className={classes.carouselAndPage}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <div className={classes.routerRoot}>
                            <Switch>
                                <Route exact path="/">
                                    <HomePage/>
                                </Route>
                                <Route exact path="/search/:query">
                                    <SearchPage/>
                                </Route>
                                <Route exact path="/:category">
                                    <CategoryPage/>
                                </Route>
                            </Switch>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <MostRead/>
                        <Weather/>
                        <Card className={classes.calendar}>
                            <Calendar onChange={onChange} value={value}/>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}