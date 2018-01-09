import React, { Component } from 'react';
import './App.css';
import {Container,Collapse,CardBlock, Button, Card, Input,Row,Col,FormGroup,Label} from "reactstrap"
import LineChart from './lineChart.js';
import {extendObservable} from 'mobx';
import {observer} from 'mobx-react';


export default observer(class App extends Component {
  constructor () {
    super();
    extendObservable(this, {
      data :[] 
    })
    this.state = {
      fittingLine:false, 
      fillArea: false,
      collapse: false, 
      lineTension:0,
      steppedLine: false,
      pointRadius:1, 
      value:null
    }
    this.addFittingLine = this.addFittingLine.bind(this);
    this.collapseCode = this.collapseCode.bind(this);
    this.addFillArea = this.addFillArea.bind(this);
    this.changeLineTension = this.changeLineTension.bind(this);
    this.changePointRadius = this.changePointRadius.bind(this);
    this.addSteppedLine = this.addSteppedLine.bind(this);
    this.addNumber = this.addNumber.bind(this);
    this.getNumber = this.getNumber.bind(this);
  }

  addFittingLine() {
    this.setState({
      fittingLine:!this.state.fittingLine
    })
  }

  addSteppedLine () {
    this.setState({
      steppedLine:!this.state.steppedLine
    })
  }

  addFillArea () {
    this.setState({
      fillArea:!this.state.fillArea
    })
  }

  collapseCode() {
    this.setState({ collapse: !this.state.collapse });
    
  }
  changeLineTension(event) {
    console.log(event.target.value)
    this.setState({ lineTension: event.target.value});
  }
  changePointRadius(event) {
    this.setState({ pointRadius: event.target.value});
  }
  getNumber(event){
    this.setState({value:event.target.value});
  }
  addNumber() {
    this.data.push(this.state.value)

  }

  render() {
    
    return (
      <Container>
        <h1 className ="mt-3"> Exploring ChartJS Options</h1>
        <Row className = "mt-3">
          <Col>
             <Card style= {{height:"400px"}}>
                <LineChart steppedLine = {this.state.steppedLine} fittingLine = {this.state.fittingLine} fillArea = {this.state.fillArea} lineTension = {this.state.lineTension}
           pointRadius = {this.state.pointRadius} data = {this.data} />    
              </Card>
          </Col>
          <Col>
          
            <Button color= "info" onClick = {this.addFittingLine}> Add Fitting Line </Button>
            <Button color= "info" onClick = {this.addFillArea}> Add Fill Area </Button>
             <Button color= "info" onClick = {this.addSteppedLine}> Add Steppedline </Button>

             <div className = "slider">
            <h5> Change Line Tension</h5>
                <Input style = {{width:"40%"}} type = "range" value ={this.state.lineTension} onChange={this.changeLineTension} min="0" max="0.6" step="0.01"/>
            </div>

            <div className = "slider">
            <h5> Change Point Radius </h5>
                <Input style = {{width:"40%"}} type = "range" value ={this.state.pointRadius} onChange={this.changePointRadius} min="1" max="5" step="0.1"/>
            </div>
        
        

          </Col>
        </Row>
     
     </Container>  
        
    );
  }
})


