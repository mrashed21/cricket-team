import PropTypes from "prop-types";
import coin from "/images/coin.svg";
import logo from "/images/logo.svg";

function Navbar({ credit }) {
  return (
    <>
      <nav className=" flex items-center justify-between mt-5 sticky top-0 backdrop-blur-md bg-white/50 p-4 z-50 lg:px-16 border-b shadow-bottom">
        {/* logo section */}
        <div className="">
          <img className="w-16 " src={logo} alt="logo" />
        </div>

        {/* menu section */}
        <div className=" flex items-center gap-5 lg:gap-12">
          <ul className=" hidden lg:flex items-center gap-12 text-[#131313]  ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Fixture</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Schedules</a>
            </li>
          </ul>

          {/* coin button */}
          <div className=" px-3 py-2 border rounded-md">
            <div className="flex gap-1 font-semibold">
              <span>{credit}</span> Coin <img src={coin} alt="coin" />
            </div>
          </div>

          {/*  dropdown menu */}
          <div className="  dropdown lg:hidden">
            <div
              tabIndex="0"
              role="button"
              className="btn-ghost text-right h-14 w-14 rounded-full bg-transparent flex items-center justify-center flex-shrink-0"
            >
              <i className="fa-solid fa-bars text-4xl"></i>
            </div>
            <ul
              tabIndex="0"
              className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-svw h-[80vh] p-2 shadow-md flex items-center justify-center text-center right-0 text-[#131313] gap-10"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Fixture</a>
              </li>
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Schedules</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  credit: PropTypes.number,
};
export default Navbar;
