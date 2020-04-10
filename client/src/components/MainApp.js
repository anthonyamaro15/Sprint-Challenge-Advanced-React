import React, { Component } from "react";
// import {useFetch} from '../costumHooks/useFetch';
import axios from "axios";

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
    return (
      <div className="main-container">
        <h2>title herer</h2>
        <div className="cards">
          <p>sigle cards go here</p>
        </div>
      </div>
    );
  }
}

export default MainApp;
