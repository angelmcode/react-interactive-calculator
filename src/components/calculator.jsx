import React from 'react'
import Button from "./button.jsx";
import Screen from "./screen.jsx";
import ClearButton from "./clear_button.jsx";
import '../stylesheets/calculator.css';
import { useState } from 'react'

function Calculator() {

    let [input, setInput] = useState("0");

    function addInput(value) {
        if (input != "0" && input != "Enter a valid operation") {
            setInput(input+value);
        } else {
            input="";
            setInput(input+value);
        }     
    };

    function clear() {
        setInput("0");
    };

    function result() {
        if (input) {
            try {
                setInput(eval(input));
                // console.log(input);
                // console.log(setInput);
                // console.log(result);
            } catch(error) {
                setInput("Enter a valid operation");
            }  
        }
    }

  return (
    <div className="container_calculator">
        <Screen input={input}/>
        <div className="row">
            <Button manageClick={addInput}>1</Button>
            <Button manageClick={addInput}>2</Button>
            <Button manageClick={addInput}>3</Button>
            <Button manageClick={addInput}>+</Button>
        </div>
        <div className="row">
            <Button manageClick={addInput}>4</Button>
            <Button manageClick={addInput}>5</Button>
            <Button manageClick={addInput}>6</Button>
            <Button manageClick={addInput}>-</Button>
        </div>
        <div className="row">
            <Button manageClick={addInput}>7</Button>
            <Button manageClick={addInput}>8</Button>
            <Button manageClick={addInput}>9</Button>
            <Button manageClick={addInput}>*</Button>
        </div>
        <div className="row">
            <Button manageClick={addInput}>0</Button>
            <Button manageClick={result}>=</Button>
            <Button manageClick={addInput}>.</Button>
            <Button manageClick={addInput}>/</Button>
        </div>
        <div className="row">
            <ClearButton manageClear={clear}>Clear</ClearButton>
        </div>
    </div>
  )
}

export default Calculator