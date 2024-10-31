import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Player from "./Player";
import Selected from "./Selected";

function Players({
  handleIsActiveBtn,
  isActive,
  handleSelectedPlayer,
  selectedPlayer,
  deletedPlayer,
}) {
  const [players, setPlayes] = useState([]);
  useEffect(() => {
    fetch("/cricket-tram.json")
      .then((res) => res.json())
      .then((data) => setPlayes(data));
  }, []);
  return (
    <>
      <div className="mx-3 lg:container lg:mx-auto flex flex-col md:flex-row md:items-center md:justify-between mt-6">
        <div className="text-center font-bold text-2xl mt-6 ">
          {isActive.btn
            ? "Available Players"
            : `Selected Player (${selectedPlayer.length}/6)`}
        </div>
        <div className=" flex justify-between items-center gap-3">
          <button
            onClick={() => {
              handleIsActiveBtn("available");
            }}
            className={`${
              isActive.btn
                ? " btn-warning bg-[#E7FE29] hover:bg-[#d9e758] btn font-bold py-1 px-5 mt-6"
                : "  btn font-bold py-1 px-5 mt-6 "
            }`}
          >
            Available
          </button>
          <button
            onClick={() => {
              handleIsActiveBtn("selected");
            }}
            className={`${
              isActive.btn
                ? "btn font-bold py-1 px-5 mt-6"
                : " btn-warning bg-[#E7FE29] hover:bg-[#d9e758] btn font-bold py-1 px-5 mt-6 "
            }`}
          >
            Selected<span>({selectedPlayer.length})</span>
          </button>
        </div>
      </div>

      {/*  */}
      <div className="">
        {isActive.btn ? (
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center mt-10">
            {players.map((player) => (
              <Player
                key={player.playerId}
                player={player}
                handleSelectedPlayer={handleSelectedPlayer}
              ></Player>
            ))}
          </div>
        ) : (
          <div className="container mx-auto">
            <Selected
              selectedPlayer={selectedPlayer}
              deletedPlayer={deletedPlayer}
              handleIsActiveBtn={handleIsActiveBtn}
            ></Selected>
          </div>
        )}
      </div>
    </>
  );
}
Players.propTypes = {
  handleIsActiveBtn: PropTypes.func.isRequired,
  isActive: PropTypes.object,
  handleSelectedPlayer: PropTypes.func,
  selectedPlayer: PropTypes.array,
  deletedPlayer: PropTypes.func,
};
export default Players;
