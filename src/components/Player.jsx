import React, { useState } from "react";
const Player = ({ initialName, symbol ,isActive ,onChangeName}) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);

    if(isEditing){

      onChangeName(symbol,playerName)
    }
  };

  function handleNameChange(event) {
    console.log(event.target.value);
    setPlayerName(event.target.value);
  }

  let editablePlayerNmae = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerNmae = <input type="text" required value={playerName} onChange={handleNameChange} />;
  }

  return (
    <li className={isActive? 'active' : ''}>
      <span className="player">
        {editablePlayerNmae}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
