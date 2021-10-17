import React from "react"
import App from "./App"

function Calculator(props) {

    return (
      <main id="calculatorFace" className="container">
          <div id="display">test</div>


          <div id="keypad">
              <div id="functionKeys">
                 <button id="equals">=</button>
                 <button id="add">+</button>
                 <button id="subtract">-</button>
                 <button id="divide">/</button>
                 <button id="multiply">X</button>
                 <button id="clear">Clear</button>
              </div>

              <div id="numbers" className="container">
                 <button className="numbers" id="zero" onClick={props.handleClick}>0</button>
                 <button className="numbers" id="one" onClick={props.handleClick}>1</button>
                 <button className="numbers" id="two" onClick={props.handleClick}>2</button>
                 <button className="numbers" id="three" onClick={props.handleClick}>3</button>
                 <button className="numbers" id="four" onClick={props.handleClick}>4</button>
                 <button className="numbers" id="five" onClick={props.handleClick}>5</button>
                 <button className="numbers" id="six" onClick={props.handleClick}>6</button>
                 <button className="numbers" id="seven" onClick={props.handleClick}>7</button>
                 <button className="numbers" id="eight" onClick={props.handleClick}>8</button>
                 <button className="numbers" id="nine" onClick={props.handleClick}>9</button>
                 <button className="numbers" id="decimal" onClick={props.handleClick}>.</button>

              </div>

          </div>
 
      


      </main>
    
    )
}

export default Calculator