import React from "react";
import { useLocalStorage, useFetch } from "../costumHooks/useCostumsHooks";

const Player = ({ player }) => {
  const [value, setValue] = useLocalStorage(false);
  const data = useFetch("http://localhost:5000/api/players", []);

  //   console.log(data);

  const toggleItem = () => {
    setValue(!value);
  };
  const { name, country, searches, id } = player;
  const addClass = value ? "add-to-list player-container" : "player-container";
  return (
    <div className={addClass} onClick={() => toggleItem(id)}>
      <h2>name: {name}</h2>
      <p>country: {country}</p>
      <p>searches: {searches}</p>
    </div>
  );
};

export default Player;
