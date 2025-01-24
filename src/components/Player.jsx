import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            className="player-name"
            value={playerName}
            onChange={handleChange}
            placeholder="Your name here"
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </>
  );
};

export default Player;
