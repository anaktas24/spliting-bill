
import './App.css'

function App() {


  return (
    <div className="App">
      <TipCalculator/>
    </div>
  )
}

function TipCalculator(){
  return(
    <div>
      <BillInput/>
      <SelectPercentage>How did you like the service?</SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <Output/>
      <Reset/>
    </div>
  )
}

function BillInput(){
  return(
    <div>
      <label>How much was the bill?</label>
      <input type='text' placeholder='Bill value'/>
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

function Output(){
  return(
    <div>
      <h3>
        You pay X ($A -$B tip)
      </h3>
    </div>
  )
}

function Reset(bgColor, textColor){
  return(
    <div>
      <button >

      </button>
    </div>
  )
}

export default App
