
import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className="App">
      <TipCalculator/>
    </div>
  )
}

function TipCalculator(){
  const [bill, setBill] = useState("")
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)


  return(
    <div>
      <BillInput bill={bill} onSetBill={setBill}/>
      <SelectPercentage percentage1={percentage1} onSelect={setPercentage1}>How did you like the service?</SelectPercentage>
      <SelectPercentage percentage1={percentage2} onSelect={setPercentage2}>How did your friend like the service?</SelectPercentage>
      <Output bill={bill}/>
      <Reset/>
    </div>
  )
}

function BillInput({bill,onSetBill}){
  return(
    <div>
      <label>How much was the bill?</label>
      <input
        type='text'
        placeholder='Bill value'
        value={bill}
        onChange={(e)=>onSetBill(Number(e.target.value))}/>
    </div>
  )
}

function SelectPercentage({children}){
  return(
    <div>
      <label>{children}</label>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Acceptable (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="20">Excelent (20%)</option>
      </select>
    </div>
  )
}

function Output({bill}){
  return(
    <div>
      <h3>
        You pay X (${bill} -$B tip)
      </h3>
    </div>
  )
}

function Reset(){
  return(
    <div>
      <button >
        Reset
      </button>
    </div>
  )
}

export default App
