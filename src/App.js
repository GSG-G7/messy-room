import React, { Component } from "react";
import Level from "./components/funComponents/level/level";
import { boardLevels } from "./Data";
import "./App.css";

class App extends Component {
  state = {
    foundId: [],
    score: 0,
    level: 1,
    objects: [...boardLevels[0].objects].map(e => e),
    sideObjects: [...boardLevels[0].objects].map(e => e),
    boardUrl: boardLevels[0].backgroundUrl
  };

  handleDeleteObject = id => {
    this.state.objects.forEach((element, index) => {
      if (element.id === Number(id)) this.state.objects.splice(index, 1);
    });
  };
  handleFoundObject = id => {
    let arr = [...this.state.foundId];
    arr.push(Number(id));
    this.setState({ foundId: arr });
  };

  score = id => {
    const preScore = this.state.score;
    if (id === "board") {
      if (this.state.score !== 0) this.setState({ score: preScore - 10 });
    } else {
      this.setState({ score: preScore + 100 });
    }
  };

  handleBoardLevel = () => {
    const preLevel = this.state.level;
    this.setState({ level: preLevel + 1 }, () => {
      boardLevels.forEach((element, index) => {
        if (element.level === this.state.level) {
          this.setState({
            foundId: [],
            boardUrl: element.backgroundUrl,
            objects: [...boardLevels[index].objects].map(e => e),
            sideObjects: [...boardLevels[index].objects].map(e => e)
          });
        }
      });
    });
  };

  functions = ({ target: { id } }) => {
    //handle the click
    if (id === "board") {
      this.score(id);
    } else {
      this.handleFoundObject(id);
      this.handleDeleteObject(id);
      this.score(id);
    }
    //move to the next level
    if (this.state.objects.length === 0) {
      this.handleBoardLevel();
    }
  };

  render() {
    return (
      <div className="App">
        <Level
          boardUrl={this.state.boardUrl}
          sideArray={this.state.sideObjects}
          boardArray={this.state.objects}
          onClick={this.functions}
          foundId={this.state.foundId}
          score={this.state.score}
        />
      </div>
    );
  }
}

export default App;
