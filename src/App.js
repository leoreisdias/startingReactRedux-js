import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchToken } from "./store/login";
import { add } from "./store/reducers";

function App() {
  const {reducer} = useSelector(state => state);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchToken({username: 'dog', password: 'dog'}));

  },[dispatch])

  return (
    <div className="App">
      Total: {reducer.total}

      <button onClick={() => dispatch(add())}>Add on Total</button>
    </div>
  );
}

export default App;
