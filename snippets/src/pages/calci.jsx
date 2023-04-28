import * as React from "react";
import "../css/calci.css";
function Calci() {

  const [output, setOutput] = React.useState('')

  const clearfn = () => {
    // alert('Clear')
    setOutput('')
  }
  const display = (data) => {
    // alert(data)

    setOutput(output + String(data))

  }

  const solve = () => {
    setOutput(eval(output))
  }

  const back = () => {
    setOutput(output.slice(0, output.length - 1))

  }

  const generateButtons = () => {
    // let buttons = []
    // for (let i = 0; i <= 9; i++) {
    //   buttons.push(i)
    // }

    let buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    return buttons.map(each => (<button key={each} className='column' onClick={() => display(each)}>{each}</button>))
  }

  return (
    <div className="center">
      <div className="box">Calculator</div>
      <div className="display"> <label id="output">{output}</label> </div>
      <div>
        {generateButtons()}

        <button type="button" onClick={() => display('+')} className="column">
          +
        </button>
        <button type="button" onClick={() => display('-')} className="column">
          -
        </button>
        <button type="button" onClick={() => display('*')} className="column">
          *
        </button>
        <button type="button" onClick={() => display('/')} className="column">
          /
        </button>
        <button type="button" onClick={() => clearfn()} className="column">
          AC
        </button>
        <button type="button" onClick={() => solve()} className="column">
          =
        </button>
        <button type="button" onClick={() => display('.')} className="column">
          .
        </button>
        <button type="button" onClick={() => back()} className="column">
          x
        </button>
      </div>
    </div>
  )
}
export default Calci;
