import ReactWeather, {useWeatherBit} from 'react-open-weather';
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from 'react';

const useStyles = makeStyles((theme) => ({
        container: {
            marginTop: theme.spacing(6)
        }
    })
)

export default function Weather() {
    const classes = useStyles();
    const {data, isLoading, errorMessage} = useWeatherBit({
        key: '596543690638483298d6fcfc4879896a',
        lat: '48.137154',
        lon: '11.576124',
        lang: 'en',
        unit: 'M', // values are (M,S,I)
    });

    return (
        <div className={classes.container}>
            <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel="Isfahan"
                unitsLabels={{temperature: 'C', windSpeed: 'km/h'}}
                showForecast
            />
        </div>
    );
}