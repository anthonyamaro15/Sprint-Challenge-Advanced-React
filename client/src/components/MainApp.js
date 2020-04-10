import React, { Component } from "react";
import axios from "axios";
import Player from "./Player";

class MainApp extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="main-container">
        <h1>Women's World Cup</h1>
        <div className="cards">
          {data.map((player) => (
            <Player key={player.id} player={player} data-testid={player.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default MainApp;
