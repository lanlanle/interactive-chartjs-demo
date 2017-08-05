import React from 'react';
import './App.css';

import {Chart,Line} from "react-chartjs-2";

class LineChart extends React.Component {
	constructor () {
		super();
		this.options= {
			maintainAspectRatio:false,
			legend: {
				display:false
			}
		}

	}
	findFittingLine(item) {
		return item.label ==="fitting line"
	}
	render() {
		var fittingLineData = {
				label: "fitting line",
				data:[90,null,null,null,null,11],
				spanGaps:true, 
				fill:false

		}

		var chartData = {
			labels: ["1st", "2nd", "3rd", "4th","5th","6th"], 
			datasets:[{
				label: "raw data",
				data:[90,72,65,70,23,11],
				lineTension:0,
				borderColor:"#06d6d6", 
				fill:false
		
			}]
		}
		if(this.props.fittingLine){
			chartData.datasets.push(fittingLineData)

		} else {
			var index = chartData.datasets.findIndex(this.findFittingLine)
			if (index !==-1) {
				chartData.datasets.splice(index,1)
			}
			
		}
		return (
			<Line data = {chartData} options = {this.options}/>

			)
	}
}

export default LineChart;