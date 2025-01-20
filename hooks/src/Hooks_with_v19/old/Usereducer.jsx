import { useReducer } from "react";
import { Fragment } from "react";

// Component using useReducer to manage complex state
const Like_module_upgrade = () => {
  // Reducer function to manage state
  const reducer = (state, action) => {
    switch (action.type) {
      case "dbclick":
        return { ...state, src: "red.png", count: state.count + 1 };
      case "oneclick":
        return { ...state, src: "white.png", count: state.count - 1 };
      default:
        return state;
    }
  };

  // Initial state for useReducer
  const initialState = {
    src: "white.png",
    count: 0,
  };

  // useReducer hook for complex state management
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <div>
        {/* Button with onDoubleClick and onClick handlers for dispatching actions */}
        <button
          onDoubleClick={() => dispatch({ type: "dbclick" })}
          onClick={() => dispatch({ type: "oneclick" })}
        >
          <img src={state.src} alt="Like toggle" />
        </button>
      </div>

      <div>
        {/* Display the count of likes */}
        <p>Your likes: {state.count > 0 ? state.count : "none"}</p>
      </div>
    </Fragment>
  );
};

export default Like_module_upgrade;

/*
Difference between useState and useReducer:

1. **useState**:
   - Simpler to use and suitable for managing small, straightforward state.
   - Typically used when the state has a single value or a few unrelated values.
   - Example use case: A simple counter or toggling a boolean value.

2. **useReducer**:
   - Designed for managing more complex state logic.
   - Useful when state transitions depend on specific actions or require multiple values to be updated simultaneously.
   - Offers better organization by centralizing state transitions in a reducer function.
   - Example use case: Managing the state of a form with multiple fields or handling complex toggling logic, as demonstrated in this component.

When to use:
- Use `useState` for simplicity when dealing with straightforward state.
- Use `useReducer` for larger applications or when you need to manage complex state logic or multiple related states.
*/
