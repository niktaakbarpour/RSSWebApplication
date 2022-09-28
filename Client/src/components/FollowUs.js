import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL} from "../constants/Constants";

const useStyles = makeStyles((theme) => ({
        item: {
            color: theme.palette.primary.main,
            '&:visited': {
                color: theme.palette.primary.main
            },
            '&:hover': {
                color: theme.palette.secondary.main
            },
            marginRight: theme.spacing(3),
            display: "inline",
            margin: theme.spacing(0)
        }
    })
);

export default function FollowUs() {
    const classes = useStyles();

    return (
        <div>
            <a className={classes.item} href={FACEBOOK_URL} target="_blank" rel='noreferrer'>
                <FacebookIcon fontSize="large"/>
            </a>
            <a className={classes.item} href={INSTAGRAM_URL} target="_blank" rel='noreferrer'>
                <InstagramIcon fontSize="large"/>
            </a>
            <a className={classes.item} href={TWITTER_URL} target="_blank" rel='noreferrer'>
                <TwitterIcon fontSize="large"/>
            </a>
            <a className={classes.item} href={YOUTUBE_URL} target="_blank" rel='noreferrer'>
                <YouTubeIcon fontSize="large"/>
            </a>
        </div>
    );
}
