import React, { Component } from "react";
import Board from "./components/classComponents/board/Board";
import Sidebar from "./components/classComponents/sidebar/sidebar";
import icon1 from "./objects_icon/icon1.png";
import icon2 from "./objects_icon/2.png";
import icon3 from "./objects_icon/3.png";
import icon4 from "./objects_icon/4.png";
// import ico from "./objects_icon/icon1.png";
import "./App.css";
const objArray = [
  { id: 1, icon: icon1, class: "obj-prop one" },
  { id: 2, icon: icon2, class: "obj-prop two" },
  { id: 3, icon: icon3, class: "obj-prop three" },
  { id: 4, icon: icon4, class: "obj-prop four" }
];

class App extends Component {
  state = {
    foundId: []
  };
  clicked = ({ target: { id } }) => {
    console.log(typeof id);
    const element = document.getElementById(id);
    element.parentNode.removeChild(element);
    // console.log(this.state.foundId);
    let arr = this.state.foundId;
    arr.push(Number(id));

    // console.log(this.state.foundId);

    this.setState({ foundId: arr }, console.log(arr));
  };
  render() {
    return (
      <div className="App">
        <main className="main">
          <Board objArray={objArray} onClick={this.clicked} />
          <Sidebar objArray={objArray} id={this.state.foundId} />
        </main>
        {/* <img src={ico} /> */}
      </div>
    );
  }
}

export default App;
