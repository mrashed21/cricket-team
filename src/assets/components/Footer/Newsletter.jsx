import Footer from "./Footer";

function Newsletter() {
  return (
    <>
      <div className=" md:relative">
        <div className="mx-3 lg:container lg:mx-auto  bg-[#ffffff26]  md:p-5 mt-10 rounded-2xl border-2 border-white z-50 ">
          <div className="bg-gradient-to-r from-blue-100 via-white to-orange-100 p-8 rounded-lg shadow-md py-14">
            <h2 className="text-2xl font-bold text-[#131313] text-center">
              Subscribe to our Newsletter
            </h2>
            <p className=" text-[#131313B2] font-Inter font-medium text-xl text-center my-3">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex flex-col md:flex-row gap-3 justify-center ">
              <input
                className="border border-gray-300 rounded-lg p-2"
                type="email"
                placeholder="Enter your email"
              />
              <button className=" btn bg-gradient-to-r from-pink-500 to-yellow-500 text-[#131313] font-bold px-4 py-2 rounded-lg ">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="md:absolute top-[40%] -z-50">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
