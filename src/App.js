import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addUser, reset, removeUser } from "./actions";

function App() {
  const count = useSelector((state) => state.counterReducer);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const userRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userRef.current.value));
    userRef.current.value = "";
  };
  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <h2>User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" ref={userRef} />
      </form>
      <ul>
        {user.map((user, index) => (
          <>
            <li key={index}>{user.name}</li>
            <button onClick={() => dispatch(removeUser(index))}>&times;</button>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
