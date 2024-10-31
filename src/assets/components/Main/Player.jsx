import PropTypes from "prop-types";
// import { toast } from "react-toastify";
function Player({ player, handleSelectedPlayer }) {
  
  return (
    <div className=" w-80 md:w-full mx-auto  border  rounded-xl p-2 shadow-md  ">
      <img
        className="w-full h-60  rounded-lg mb-3 shadow-bottom"
        src={player.image}
        alt={`${player.name} image`}
      />
      <div className=" mt-6">
        <h2 className="text-xl font-semibold">
          <i className="fa-solid fa-user text-2xl mr-1"></i> {player.name}
        </h2>

        <div className="flex items-center justify-between">
          <p className="text-[#131313] opacity-50">
            <i className="fa-solid fa-flag  text-lg mr-2"></i>
            {player.country}
          </p>
          <p className=" px-6 py-3 bg-[#1313130d] text-sm rounded-lg">
            {player.role}
          </p>
        </div>
        <hr className="my-3 border" />

        <div className="flex items-center justify-between mt-2">
          <p className="text-[#131313] font-semibold">Rating</p>
          <p className=" text-[#131313] font-semibold">{player.rating}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-[#131313] font-bold">{player.b_Type}</p>
          <p className=" text-[#131313B2] opacity-70">{player.b_Type}</p>
        </div>

        <div className="flex items-center justify-between my-3 text-[#131313]">
          <p className=" font-semibold"> Price: ${player.biddingPrice}</p>
          <button
            onClick={() => {
              handleSelectedPlayer(player);
              // succesNotify(player.name);
            }}
            className="btn bg-transparent text-sm"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
}
Player.propTypes = {
  player: PropTypes.object,
  handleSelectedPlayer: PropTypes.func,
};
export default Player;
