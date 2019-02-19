import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30328,us&appid=482c145ce8edf1d69ea5168f9d06460c';
        const axiosPromise = axios.get(url);

        axiosPromise.then((weatherData) =>{
            console.log(weatherData);
            // let weatherResults = weatherData.data.props;
            // let iconName = weatherData.data.weather[0].icon
            // const iconPath = `https://openweathermap.org/img/w/${iconName}.png`
			this.setState({
                icon: weatherData.data.weather[0].icon,
				temp: weatherData.data.main.temp,
				temp_min: weatherData.data.main.temp_min,
				temp_max: weatherData.data.main.temp_max,
				desc: weatherData.data.weather[0].description,

			})
		});
	}

	render(){
		let iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
				<h1><img src={iconUrl} /></h1>
				<h1>{this.state.temp}</h1>
				<h1>{this.state.temp_min}</h1>
				<h1>{this.state.temp_max}</h1>
				<h1>{this.state.desc}</h1>
			</div>
		);
	}
}

export default Weather;
