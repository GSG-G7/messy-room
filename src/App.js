import React, { Component } from "react";
import icon1 from "./objects_icon/icon1.png";
import icon2 from "./objects_icon/2.png";
import icon3 from "./objects_icon/3.png";
import icon4 from "./objects_icon/4.png";
import Level1 from './components/classComponents/level1/level1';
import Header from './components/classComponents/header/Header';
import Footer from './components/classComponents/footer/Footer';
import End from './components/functionComponents/end/end'

import "./App.css";
import { classDeclaration } from "@babel/types";
const objArray = [
  { id: 1, icon: icon1, class: "obj-prop one" },
  { id: 2, icon: icon2, class: "obj-prop two" },
  { id: 3, icon: icon3, class: "obj-prop three" },
  { id: 4, icon: icon4, class: "obj-prop four" }
];

class App extends Component {
  state = {
    foundId: [],
    score: 0,
    level: 1,
    objects: [...objArray]
  };

  clicked = (e) => {
    let arr = [...this.state.foundId];
    arr.push(Number(e.id));
    this.setState({ foundId: arr })

    this.state.objects.forEach((element, index) => {
      if (element.id === Number(e.id))
        this.state.objects.splice(index, 1);
    })
  };


  score = (id) => {
    const preScore = this.state.score;
    if (id === 'board') {
      if (this.state.score !== 0)
        this.setState({ score: preScore - 10 })
    } else {
      this.setState({ score: preScore + 100 });
    }
  }


  functions = ({ target }) => {
    if (target.id === 'board') {
      this.score(target.id);
    } else {
      this.clicked(target);
      this.score(target.id);
    }
  }





  render() {
    return (
      <div className="App">
        <Header level={this.state.level} />
        <Level1 sideArray={objArray} boardArray={this.state.objects} onClick={this.functions} foundId={this.state.foundId} score={this.state.score} />
        <Footer />
      </div>
    );
  }
}

export default App;
