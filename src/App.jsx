import React, { Component } from 'react';
import './App.css';
import {Button, Card} from "reactstrap"
import LineChart from './lineChart.js'


class App extends Component {
  constructor () {
    super();
    this.state = {
      fittingLine:false
    }
    this.addFittingLine = this.addFittingLine.bind(this);
  }

  addFittingLine() {
    this.setState({
      fittingLine:!this.state.fittingLine
    })
  }
  render() {
    return (
      <div>
        <Card style= {{height:"400px"}}>
           <LineChart  fittingLine = {this.state.fittingLine}/>    
        </Card>
        <Button color= "info" onClick = {this.addFittingLine}> Add fitting line </Button>
      </div>

    );
  }
}

export default App;
