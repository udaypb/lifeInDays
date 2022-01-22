import logo from "./logo.svg";
import "./App.css";
import Box from "./Box";
import PastBox from "./PastBox";
import Button from "./Button";
import React, { Component } from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [], // week,
      dob:null, 
      helperDate:null
    }; 
    
    for(var i = 1; i < 4577; i++) {
      this.state.boxes.push(i);
    }
    this.onDobSet = this.onDobSet.bind(this); // this keyword won't work within the function if it is not set here using bind


  }
  onDobSet(event) {
    console.log(event.target.value);
    if(event.target.value.split('/').length === 3 && event.target.value.split('/')[2].length === 4) {
      let dob = new Date(event.target.value);
      this.setState({dob:dob, helperDate:new Date(dob.setDate(dob.getDate() - (7)))});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="">
        <input type="input" placeholder="Enter dob in MM/DD/YYYY" onChange = {this.onDobSet} />
        </header>
        {this.state.dob && this.state.boxes.map((b, i) => {
          console.log(this.state.dob, b);
          let boxDate = this.state.helperDate;
          boxDate.setDate(boxDate.getDate() + (7));
          this.state.helperDate = boxDate;
          let dateString = boxDate.getDate().toString() + " " + boxDate.toLocaleString('default', { month: 'short' }) + " " + boxDate.getFullYear().toString();
          if (boxDate < new Date()) {
            //return past box
            return(<PastBox key = {b} date = {dateString}></PastBox>)
          }else {
            return(<Box key = {b} date = {dateString}></Box>)

          }
        })}
      </div>
    );
  }
}

function zoomOut() {}

export default App;
