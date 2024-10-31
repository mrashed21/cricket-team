import footerLogo from "/images/logo-footer.png";

function Footer() {
  return (
    <footer className=" bg-[#06091A]  mt-14">
      <div className="flex items-center justify-center pt-10 md:pt-36">
        <img src={footerLogo} alt="logo" />
      </div>

      <div className="flex flex-col md:flex-row  justify-between space-y-6 md:space-y-0 p-10">
        <div className="flex flex-col items-center md:items-start md:w-1/5">
          <h6 className="text-lg  text-white  font-bold  ">About Us</h6>
          <p className="text-[#FFFFFF99] text-center md:text-start">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-3 md:w-2/5">
          <h6 className="text-lg font-semibold text-white ">Quick Links</h6>
          <ul className=" list-disc text-[#FFFFFF99] space-y-2">
            <li>
              <a href="#" className="link link-hover ">
                Home
              </a>
            </li>
            <li>
              <a className="link link-hover ">About Us</a>
            </li>
            <li>
              <a className="link link-hover">Services </a>
            </li>
            <li>
              <a className="link link-hover ">About </a>
            </li>
            <li>
              <a className="link link-hover ">Contact</a>
            </li>
          </ul>
        </div>

        <form className="mt-10 md:mt-0 md:w-2/5">
          <h6 className="text-lg font-semibold text-white text-center">
            Subscribe
          </h6>
          <p className="text-[#FFFFFF99] text-center md:text-start">
            Subscribe to our newsletter for the latest updates.
          </p>
          <fieldset className="form-control mt-3 md:w-80">
            <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-center ">
              <input
                className="border border-gray-300 rounded-lg p-2 md:rounded-r-none"
                type="email"
                placeholder="Enter your email"
              />
              <button className=" btn bg-gradient-to-r from-pink-500 to-yellow-500 text-[#131313] font-bold px-4 py-2 rounded-lg md:rounded-l-none ">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <hr className="" />
      <p className="text-[#FFFFFF99] py-8 text-center">
        @2024 Your Company All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
