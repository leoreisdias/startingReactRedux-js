import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add } from "./store/reducers";

function App() {
  const state = useSelector(state => state.total);
  const dispatch = useDispatch()
  return (
    <div className="App">
      Total: {state}

      <button onClick={() => dispatch(add())}>Add on Total</button>
    </div>
  );
}

export default App;
