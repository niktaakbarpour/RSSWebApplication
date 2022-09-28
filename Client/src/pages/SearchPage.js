import React, {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import {useParams} from "react-router-dom";
import VerticalCardList from "../components/VerticalCardList";
import {makeStyles} from "@material-ui/core/styles";
import ReactPlaceholder from "react-placeholder";
import VerticalCardListPlaceHolder from "../placeholders/VerticalCardListPlaceHolder";
import {toggleFilterIsOpen} from "../actions/filtersActions";
import FilterListIcon from "@material-ui/icons/FilterList";
import {IconButton} from "@material-ui/core";
import NewsFilter from "../components/NewsFilter";
import {useDispatch, useSelector} from "react-redux";
import EmptyText from "../components/EmptyText";
import SortIcon from '@material-ui/icons/Sort';
import {sortNewsByDate} from "../util/Utils";

const useStyles = makeStyles((theme) => ({
        titleContainer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'center',
            '& > *': {
                marginLeft: theme.spacing(2),
                marginBottom: theme.spacing(-1)
            }
        },
        hr: {
            color: theme.palette.secondary.main,
            height: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
            width: "100%",
            display: "inline-flex",
        },
    })
);

export default function SearchPage() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const {query} = useParams()
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [ascending, setAscending] = useState(false)

    useEffect(() => {
        //API
        setIsLoading(true)
        axios.get(`${BASE_URL}/api/news?query=${query}`)
            .then((response) => {
                setIsLoading(false)
                setNews(response.data)
            })
    }, [query])

    const onItemClicked = (item) => {
        //ROUTING
        window.open(item.link, '_blank')
    }

    const startDateFilter = useSelector((state) => state.filters.startDate)
    const endDateFilter = useSelector((state) => state.filters.endDate)
    const limitCountFilter = useSelector((state) => state.filters.limitCount)

    let filteredNews = news.filter(news => {
        if (startDateFilter && news.dateMillies < startDateFilter) {
            return false
        }
        if (endDateFilter && news.dateMillies > endDateFilter) {
            return false
        }
        return true
    })
    if (limitCountFilter && limitCountFilter >= 0 && filteredNews.length > limitCountFilter) {
        filteredNews = filteredNews.slice(0, limitCountFilter)
    }

    filteredNews = sortNewsByDate(filteredNews, ascending)

    return (
        <div>
            <div className={classes.titleContainer}>
                <h1>Search For "{query}"</h1>
                <div>
                    <IconButton onClick={() => setAscending(!ascending)}>
                        <SortIcon color={ascending ? 'disabled' : 'primary'}/>
                    </IconButton>
                    <IconButton onClick={() => dispatch(toggleFilterIsOpen(true))}>
                        <FilterListIcon color='primary'/>
                    </IconButton>
                </div>
            </div>
            <NewsFilter/>
            <hr className={classes.hr}/>
            <ReactPlaceholder ready={!isLoading}
                              showLoadingAnimation
                              customPlaceholder={<VerticalCardListPlaceHolder count={10}/>}>
                {
                    filteredNews.length === 0 ?
                        <EmptyText text='Nothing Found'/> :
                        <VerticalCardList items={filteredNews} onClick={onItemClicked}/>
                }
            </ReactPlaceholder>
        </div>
    )
}