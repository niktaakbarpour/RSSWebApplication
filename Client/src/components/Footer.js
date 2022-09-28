import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SendIcon from '@material-ui/icons/Send';
import InputBase from "@material-ui/core/InputBase";
import {FACEBOOK_URL, GMAIL_URL, INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL} from "../constants/Constants";

const useStyles = makeStyles((theme) => ({

        footer: {
            textAlign: "center",
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(3),
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.reverse,
            marginTop: theme.spacing(5)
        },

        footerTitle: {
            marginBottom: theme.spacing(0),
            fontSize: "1em"
        },

        newsLetter: {
            display: "inline-flex",
            whiteSpace: "nowrap",
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            margin: "auto",
            border: "1px solid #555",
            justifyContent: "center"
        },

        newsLetterInput: {
            border: "0",
            display: "inline-block",
            fontSize: ".9em",
            background: "transparent",
            color: theme.palette.text.reverse,
            paddingTop: theme.spacing(1),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(2),
            marginTop: theme.spacing(0),
            marginRight: theme.spacing(-1),
            marginBottom: theme.spacing(0),
            marginLeft: theme.spacing(-1),

        },

        newsLetterBtn: {
            display: "inline-block",
            textDecoration: "none",
            color: theme.palette.text.reverse,
            // backgroundColor: "999",
            // marginTop: theme.spacing(1),
            marginRight: theme.spacing(-1),
            marginBottom: theme.spacing(0),
            marginLeft: theme.spacing(-1),
            paddingTop: theme.spacing(1),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(2),
        },

        socialLinks: {
            padding: theme.spacing(0),
            margin: "auto",
            listStyle: "none",
            textAlign: "center",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },

        socialLinkLi: {
            display: "inline-block",
            marginTop: theme.spacing(0),
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(0),
            marginLeft: theme.spacing(2),
        },

        socialLink: {
            display: "block",
            padding: theme.spacing(1.5),
            fontSize: "1.5em",
            textDecoration: "none",
            color: "#ccc",
            '&:hover': {
                color: "#fff"
            }
        },

        copyRight: {
            fontSize: ".9em"
        }

    })
);

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>

            <p className={classes.footerTitle}>Get Latest News</p>
            <div className={classes.newsLetter}>
                <InputBase
                    placeholder="Enter Your Email"
                    // inputProps={{ 'aria-label': 'Enter Your Email' }}
                    className={classes.newsLetterInput}
                />
                <a className={classes.newsLetterBtn} href={GMAIL_URL} target='_blank'
                   rel='noreferrer'><SendIcon/></a>
            </div>

            <ul className={classes.socialLinks}>
                <li className={classes.socialLinkLi}>
                    <a className={classes.socialLink} href={INSTAGRAM_URL} target='_blank' rel='noreferrer'>
                        <InstagramIcon/>
                    </a>
                </li>
                <li className={classes.socialLinkLi}>
                    <a className={classes.socialLink} href={TWITTER_URL} target='_blank' rel='noreferrer'>
                        <TwitterIcon/>
                    </a>
                </li>
                <li className={classes.socialLinkLi}>
                    <a className={classes.socialLink} href={FACEBOOK_URL} target='_blank' rel='noreferrer'>
                        <FacebookIcon/>
                    </a>
                </li>
                <li className={classes.socialLinkLi}>
                    <a className={classes.socialLink} href={YOUTUBE_URL} target='_blank' rel='noreferrer'>
                        <YouTubeIcon/>
                    </a>
                </li>
            </ul>

            <p className={classes.copyRight}>copyright 2021</p>

        </footer>
    );
}
