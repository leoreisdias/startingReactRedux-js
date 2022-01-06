import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector(state => state);
  console.log(state);
  const dispatch = useDispatch()

  return (
    <div className="App">
      Total: {state}

      <button onClick={() => dispatch({type: 'ADD'})}>Add on Total</button>
    </div>
  );
}

export default App;
