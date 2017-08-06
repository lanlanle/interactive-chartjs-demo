import React, { Component } from 'react';
import './App.css';
import {Container,Collapse,CardBlock, Button, Card, Input,Row,Col,FormGroup,Label} from "reactstrap"
import LineChart from './lineChart.js'


class App extends Component {
  constructor () {
    super();
    this.state = {
      fittingLine:false, 
      fillArea: false,
      collapse: false, 
      lineTension:0,
      steppedLine: false,
      pointRadius:1
    }
    this.addFittingLine = this.addFittingLine.bind(this);
    this.collapseCode = this.collapseCode.bind(this);
    this.addFillArea = this.addFillArea.bind(this);
    this.changeLineTension = this.changeLineTension.bind(this);
    this.changePointRadius = this.changePointRadius.bind(this);
    this.addSteppedLine = this.addSteppedLine.bind(this);
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
    this.setState({ lineTension: event.target.value});
  }
  changePointRadius(event) {
    this.setState({ pointRadius: event.target.value});
  }

  render() {
    return (
      <Container>
        <h1 className ="mt-3"> Exploring ChartJS Options</h1>
        <Row className = "mt-3">
          <Col>
             <Card style= {{height:"400px"}}>
                <LineChart steppedLine = {this.state.steppedLine} fittingLine = {this.state.fittingLine} fillArea = {this.state.fillArea} lineTension = {this.state.lineTension}
           pointRadius = {this.state.pointRadius}/>    
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
    
        <Button color= "info" onClick = {this.collapseCode}> Show Code Snippet</Button>
         <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBlock>
              <code>
                <samp>
                   data:[90,null,null,null,null,11] <br></br> 
                   spanGaps:true</samp>
                   </code><br></br> 
                   <code>fill:true</code>
            </CardBlock>
          </Card>
        </Collapse>
        

          </Col>
        </Row>
     
     </Container>  
        
    );
  }
}

export default App;
