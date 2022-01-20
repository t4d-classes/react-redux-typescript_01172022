import { useState } from 'react';

import { useCalcToolStore } from '../hooks/useCalcToolStore';

export const CalcTool = () => {

  const { result, history, add, subtract, multiply, divide } = useCalcToolStore();

  const [ numInput, setNumInput ] = useState(0);

  return (
    <>
      <div>Result: {result}</div>
      <form>
        <label>
          Num Input:
          <input type="number" value={numInput}
          onChange={e => setNumInput(parseFloat(e.target.value))} />
        </label>

        <fieldset>
          <button type="button" onClick={() => add(numInput)}>+</button>
          <button type="button" onClick={() => subtract(numInput)}>-</button>
          <button type="button" onClick={() => multiply(numInput)}>*</button>
          <button type="button" onClick={() => divide(numInput)}>/</button>
        </fieldset>
      </form>

      <ul>
        {history.map(entry => <li key={entry.id}>
          {entry.opName} {entry.opValue}
        </li>)}
      </ul>
    </>
  )

};