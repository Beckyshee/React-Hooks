import './App.css';
import { useReducer } from 'react';


function reducer ( state, action )
{
  switch (action.type)
  {
    case 'handleIncrement':
      return { count: state.count + 1 };
    case 'handleDecrement':
       return { count: state.count - 1 };
    default:
      return state
  }
 
}

const App = () =>
{
  const [ state, dispatch ] = useReducer( reducer, { count: 0 } )

  function handleIncrement ()
  { 
    dispatch({type: 'handleIncrement'})
  }

  function handleDecrement ()
  {
    dispatch({type: 'handleDecrement'})
  }
  


  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <span>{state.count}</span>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App