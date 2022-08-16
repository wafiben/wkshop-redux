import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incremet,decrement,Reste } from "./Redux/actions";
import Home from "./Home";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incremet());
  };
  const handleDecrement=()=>{
    dispatch(decrement());
  }
  const handleRest=()=>{
    dispatch(Reste());
  }

  return (
    <div className="App">
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleRest}>Reset</button>
      <h1>{state && state.count}</h1>
      <Home />
    </div>
  );
}

export default App;
