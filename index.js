import React, { Component } from "react";
import { render } from "react-dom";
import MultiSelect from "./MultiSelect";

const options = [{id: 0, value: "Option 1"},{id: 1, value: "Option 2"},{id: 2, value: "Option 3"}]

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="p-4">
        <MultiSelect placeholder="Select an option" options={options}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
