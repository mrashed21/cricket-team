import PropTypes from "prop-types";
import { toast } from "react-toastify";
function Selected({ selectedPlayer, deletedPlayer, handleIsActiveBtn }) {
  const removeNotify = (name) =>
    toast.warn(`${name} Removed`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div className="flex flex-col gap-3 md:gap-5 mt-7">
      {selectedPlayer.map((player) => (
        <div key={player.playerId}>
          <div className=" flex p-1 md:p-4 border-2 shadow-md rounded-xl justify-between items-center hover:bg-gray-100 ">
            <div className="flex gap-2 md:gap-3 items-center">
              <img
                className="w-16 md:w-20 h-16 md:h-20 rounded-lg"
                src={player.image}
                alt={player.name}
              />
              <div className="font-Sora">
                <h2 className="text-[#131313] font-semibold  md:text-xl">
                  {player.name}
                </h2>
                <p className="text-[#13131399] text-sm ">{player.b_Type}</p>
              </div>
            </div>
            <p className="text-sm md:text-lg font-semibold font-Inter">
              Price: ${player.biddingPrice}
            </p>
            <button
              onClick={() => {
                deletedPlayer(player.playerId, player);
                removeNotify(player.name);
              }}
            >
              <i className="fa-regular fa-trash-can text-3xl text-red-600"></i>
            </button>
          </div>
        </div>
      ))}

      <div className="">
        <button
          onClick={() => handleIsActiveBtn("available")}
          className="btn btn-warning bg-[#E7FE29] hover:bg-[#d9e758] font-bold py-1 px-5 mt-6 "
        >
          Add More Player
        </button>
      </div>
    </div>
  );
}
Selected.propTypes = {
  selectedPlayer: PropTypes.array,
  deletedPlayer: PropTypes.func,
  handleIsActiveBtn: PropTypes.func,
};
export default Selected;
