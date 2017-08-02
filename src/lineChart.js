import React from 'react';
import './App.css';
import {Chart,Line} from "react-chartjs-2";

class LineChart extends React.Component {
	constructor () {
		super();
		this.data = {
			labels: ["1st", "2nd", "3rd", "4th","5th","6th"], 
			datasets:[{
				label: "raw data",
				data:[90,72,65,70,23,11],
				lineTension:0,
				borderColor:"#06d6d6", 
				fill:false
		
			}, {
				label: "fitting line",
				data:[90,null,null,null,null,11],
				spanGaps:true, 
				fill:false

			}]
		},
		this.options= Chart.defaults.global.options
		
		
		

	}
	render() {
		return (
			<Line data = {this.data } options = {this.options}/>
			)
	}
}

export default LineChart;