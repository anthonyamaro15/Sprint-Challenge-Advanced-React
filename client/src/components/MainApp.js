import React, { Component } from "react";
// import {useFetch} from '../costumHooks/useFetch';
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
    //   const players = useFetch("http://localhost:5000/api/players", [])
    axios
      .get("http://localhost:5000/api/players")
      .then((res) => {
        console.log(res.data);
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
        <h1>title herer</h1>
        <div className="cards">
          {data.map((player) => (
            <Player key={player.id} player={player} />
          ))}
        </div>
      </div>
    );
  }
}

export default MainApp;
