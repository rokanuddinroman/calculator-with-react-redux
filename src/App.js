import { useSelector, useDispatch } from "react-redux"
import { incNumber, decNumber } from "./actions/index"

function App() {
  const myState = useSelector((state) => state.updatingNumber)
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(decNumber())}>Decrement</button>
      <input type="number" value={myState} />
      <button onClick={() => dispatch(incNumber())}>Increment</button>
    </>
  );
}

export default App;
