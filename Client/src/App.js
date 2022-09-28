import Page from "./pages/Page";
import {createMuiTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import React from "react";
import {cyan, grey, indigo, red} from "@material-ui/core/colors";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux'
import store from './store'

let theme = createMuiTheme({
    spacing: 8,
    palette: {
        primary: {
            light: cyan[100],
            main: indigo[900]
        },
        secondary: {
            light: red.A200,
            main: red[800]
        },
        text: {
            reverse: grey[50]
        },
        placeHolder: {
            main: grey[300],
            secondary: grey[200]
        },
        hover: {
            main: grey[200]
        }
    }
});
theme = responsiveFontSizes(theme);

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={theme}>
                    <Page/>
                </ThemeProvider>
            </Router>
        </Provider>
    );
}