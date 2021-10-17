
import React, { Component } from "react";
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleClear() {
    this.setState({ display: "0" });
  }

  handleNumbers(e) {
    if (this.state.display === "0") {
      this.setState({
        display: e.target.innerHTML,
      });
    } else {
      this.setState((state) => ({
        display: state.display + e.target.innerHTML,
      }));
    }
  }

  handleDecimal() {
    const { display } = this.state;
    const checkDisplay = display.split(/[^0-9.]/);
    const last = checkDisplay[checkDisplay.length - 1];
    if (!last.includes(".")) {
      this.setState({ display: display + "." });
    }
  }

  handleOperators(e) {
    const operator = e.target.innerHTML;
    const { display } = this.state;
    let newDisplay = display;
    //*

    if (operator === "-") {
      if (
        display.endsWith("+-") ||
        display.endsWith("*-") ||
        display.endsWith("/-")
      ) {
        newDisplay = newDisplay.slice(0, newDisplay.length - 2) + "-";
      } else if (display.endsWith("-")) {
        newDisplay = newDisplay.slice(0, newDisplay.length - 1) + "+";
      } else {
        newDisplay = newDisplay + "-";
      }
    } else {
      if (
        display.endsWith("+-") ||
        display.endsWith("*-") ||
        display.endsWith("/-")
      ) {
        newDisplay = newDisplay.slice(0, newDisplay.length - 2) + operator;
      } else if (
        display.endsWith("+") ||
        display.endsWith("-") ||
        display.endsWith("*") ||
        display.endsWith("/")
      ) {
        newDisplay = newDisplay.slice(0, newDisplay.length - 1) + operator;
      } else {
        newDisplay = newDisplay + operator;
      }
    }

    this.setState({ display: newDisplay });
  }

  handleEquals() {
    let { display } = this.state;
    const result = eval(display).toString();
    this.setState({ display: result });
  }

  render() {
    return (
      <div className="calculator">
        <Display display={this.state.display} />
        <ButtonsPanel
          handleClear={this.handleClear}
          handleNumbers={this.handleNumbers}
          handleDecimal={this.handleDecimal}
          handleOperators={this.handleOperators}
          handleEquals={this.handleEquals}
        />
      </div>
    );
  }
}

export default App;