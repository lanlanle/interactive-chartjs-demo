import React, { Component } from 'react';
import './App.css';
import {Collapse,CardBlock, Button, Card} from "reactstrap"
import LineChart from './lineChart.js'


class App extends Component {
  constructor () {
    super();
    this.state = {
      fittingLine:false, 
      collapse: false 
    }
    this.addFittingLine = this.addFittingLine.bind(this);
    this.collapseCode = this.collapseCode.bind(this);
  }

  addFittingLine() {
    this.setState({
      fittingLine:!this.state.fittingLine
    })
  }

  collapseCode() {
    this.setState({ collapse: !this.state.collapse });
    
  }

  render() {
    return (
      <div>
        <Card style= {{height:"400px"}}>
           <LineChart  fittingLine = {this.state.fittingLine}/>    
        </Card>
        <Button color= "info" onClick = {this.addFittingLine}> Add fitting line </Button>
        <Button color= "info" onClick = {this.collapseCode}> Show Code Snippet</Button>
         <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBlock>
              <code><samp>data:[90,null,null,null,null,11] <br></br>spanGaps:true</samp></code>
            </CardBlock>
          </Card>
        </Collapse>
      </div>

    );
  }
}

export default App;
