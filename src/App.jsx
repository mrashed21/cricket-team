import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Newsletter from "./assets/components/Footer/Newsletter";
import Banner from "./assets/components/Header/Banner";
import Navbar from "./assets/components/Header/Navbar";
import Players from "./assets/components/Main/players";
function App() {
  /* for credit */
  const [credit, setCredit] = useState(0);
  const handleCredit = () => {
    setCredit(credit + 100000);
  };
  const reduceCredit = (cdt) => {
    setCredit(credit - cdt);
  };
  const addedCredit = (cdt) => {
    setCredit(credit + cdt);
  };
  /* for active button */
  const [isActive, setIsActive] = useState({
    btn: true,
    status: "available",
  });
  const handleIsActiveBtn = (status) => {
    if (status == "available") {
      setIsActive({ btn: true, status: "available" });
    } else {
      setIsActive({ btn: false, status: "selected" });
    }
  };

  /* for selected player */
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const handleSelectedPlayer = (player) => {
    if (credit <= 0 || player.biddingPrice > credit) {
      toast.warn("No Enough Credit!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (selectedPlayer.length >= 6) {
      toast.warn("Already Added Maximum Player!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      const isexist = selectedPlayer.find((p) => p.playerId == player.playerId);
      if (isexist) {
        toast.warn(`Already Added ${player.name} `, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return
      } else {
        reduceCredit(player.biddingPrice);
        const newPlayer = [...selectedPlayer, player];
        setSelectedPlayer(newPlayer);
        toast.success(` You Have Added ${player.name} `, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  /* for deleted player */

  const deletedPlayer = (id, player) => {
    addedCredit(player.biddingPrice);
    const remainingPlayer = selectedPlayer.filter((p) => p.playerId != id);
    setSelectedPlayer(remainingPlayer);
  };

  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        <Navbar credit={credit}></Navbar>
        <Banner handleCredit={handleCredit}></Banner>
        <Players
          handleIsActiveBtn={handleIsActiveBtn}
          isActive={isActive}
          handleSelectedPlayer={handleSelectedPlayer}
          selectedPlayer={selectedPlayer}
          deletedPlayer={deletedPlayer}
        ></Players>
        <Newsletter></Newsletter>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
