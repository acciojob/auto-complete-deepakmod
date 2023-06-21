
import React from "react";
import './../styles/App.css';
import AutoComplete from "./AutoComplete";

const App = () => {

  let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

  return (
    <div>
        {/* Do not remove the main div */}
        <AutoComplete items={fruits} />
    </div>
  )
}

export default App
