import React, { Component } from "react";
import axios from "axios";
import Player from "./Player";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

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
    const newData = data.map((p) => {
      let added = {
        uv: p.searches,
        pv: p.id,
        amt: p.searches,
      };
      return { ...p, ...added };
    });
    console.log(newData);
    return (
      <div className="main-container">
        <h1>Women's World Cup</h1>
        <div className="cards">
          {data.map((player) => (
            <div key={player.id} className="w-chart">
              <Player
                key={player.id}
                player={player}
                data-testid={player.name}
              />

              <AreaChart
                width={350}
                height={400}
                data={newData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MainApp;
