import PropTypes from "prop-types";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import cricket from "/images/banner-main.png";

function Banner({ handleCredit }) {
  const notify = () =>
    toast.success("Credit Added to your Account", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <header className="mx-3 lg:container lg:mx-auto bg-black mt-10 rounded-2xl">
      <div className="bg-banner rounded-2xl h-full bg-cover bg-no-repeat flex flex-col items-center justify-center py-16 px-5">
        <img src={cricket} alt="cricket" />
        <h1 className="text-4xl font-bold text-white mt-5 text-center">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="font-Inter text-xl text-[#FFFFFFB2] font-medium mt-4 text-center">
          Beyond Boundaries Beyond Limits
        </p>

        <button
          onClick={() => {
            handleCredit();
            notify();
          }}
          className="btn btn-warning bg-[#E7FE29] hover:bg-[#d9e758] font-bold py-1 px-5 mt-6"
        >
          Claim Free Credit
        </button>
        
      </div>
    </header>
  );
}

Banner.propTypes = {
  handleCredit: PropTypes.func.isRequired,
};

export default Banner;
