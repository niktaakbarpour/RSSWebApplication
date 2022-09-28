import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import VerticalCardList from "../components/VerticalCardList";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import ReactPlaceholder from "react-placeholder";
import VerticalCardListPlaceHolder from "../placeholders/VerticalCardListPlaceHolder";
import FilterListIcon from '@material-ui/icons/FilterList';
import {IconButton} from "@material-ui/core";
import NewsFilter from "../components/NewsFilter";
import {toggleFilterIsOpen} from "../actions/filtersActions";
import EmptyText from "../components/EmptyText";
import SortIcon from '@material-ui/icons/Sort';
import {sortNewsByDate} from "../util/Utils";

const useStyles = makeStyles((theme) => ({
        hr: {
            color: theme.palette.secondary.main,
            height: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
            width: "100%",
            display: "inline-flex",
        },
        titleContainer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'center',
            '& > *': {
                marginLeft: theme.spacing(2),
                marginBottom: theme.spacing(-1)
            }
        }
    })
);

export default function CategoryPage() {
    const classes = useStyles();
    const {category} = useParams()
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories.list)
    const [news, setNews] = useState([])
    const [ascending, setAscending] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const onItemClicked = (item) => {
        //ROUTING
        window.open(item.link, '_blank')
    }

    useEffect(() => {
        const selectedCategory = categories.find((item) => {
            return item.name.toLowerCase() === category
        })
        setIsLoading(true)
        //API
        axios.get(`${BASE_URL}/api/categories/${selectedCategory.id}/news`)
            .then((response) => {
                setNews(response.data)
                setIsLoading(false)
            })
    }, [category])

    const selectedCategory = categories.find((item) => {
        return item.name.toLowerCase() === category
    })

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
                <h1>{selectedCategory.name.toUpperCase()}</h1>
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
                        <EmptyText text='There Is Nothing To Show'/> :
                        <VerticalCardList items={filteredNews} onClick={onItemClicked}/>
                }
            </ReactPlaceholder>
        </div>
    )
}