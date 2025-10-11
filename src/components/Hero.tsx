import Navbar from "./Navbar";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Hero = () => {
  const [heroRef, , getHeroStyles] = useScrollAnimation(0.1, 'slideUp', 0, 1200);
  const [contentRef, , getContentStyles] = useScrollAnimation(0.1, 'slideLeft', 200, 1000);
  const [imageRef, , getImageStyles] = useScrollAnimation(0.1, 'slideRight', 400, 1000);

  return (
    <div id="home" className="relative">
      <Navbar />
      <div 
        ref={heroRef}
        style={getHeroStyles()}
        className="pt-20 lg:pt-26 p-5 lg:p-10 flex flex-col lg:flex-row justify-between gap-12 lg:gap-10"
      >
      {/* Left section */}
      <div 
        ref={contentRef}
        style={getContentStyles()}
        className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2 items-center lg:items-center text-center lg:text-left "
      >
        {/* Headline */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-tight flex flex-col gap-3">
          <h1>
            Best <span className="">place to</span>
          </h1>
          <div className="flex justify-center lg:justify-start items-center gap-2 sm:gap-4">
            <h1>partner</h1>
            <img
              src="https://framerusercontent.com/images/pHeNoUaGUEbE10uydcGyM1Rk1xA.webp?scale-down-to=512"
              alt="Partner"
              className="h-12 w-20 sm:h-16 sm:w-28 rounded-full object-cover"
            />
            <h1 className="">finding</h1>
          </div>
          <h1>
            <span className="">your</span> dream house{" "}
          </h1>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full border border-slate-300 rounded-3xl p-4">
          {/* Location Dropdown */}
          <div className="relative w-full sm:min-w-[200px] flex-1">
            {/* MapPin Icon */}
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4.97-4.97 8-9.18 8-13a8 8 0 10-16 0c0 3.82 3.03 8.03 8 13z" />
              <circle cx="12" cy="8" r="3" />
            </svg>
            {/* ChevronDown */}
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <select className="w-full pl-10 pr-10 py-3 text-base rounded-xl shadow-sm focus:outline-none appearance-none">
              <option>Location</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Gurgaon</option>
              <option>Pune</option>
              <option>Chennai</option>
              <option>Hyderabad</option>
              <option>Kolkata</option>
              <option>Noida</option>
              <option>Ahmedabad</option>
            </select>
          </div>

          {/* Filter Input Field */}
          <div className="relative w-full sm:min-w-[200px] flex-1">
            {/* Building2 */}
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18V8a2 2 0 00-2-2h-4V3H9v3H5a2 2 0 00-2 2v13z" />
            </svg>
            <input
              type="text"
              placeholder="Search by address, landmark, pincode..."
              className="w-full pl-10 pr-3 py-3 text-base rounded-xl shadow-sm focus:outline-none"
            />
          </div>

          {/* Type Dropdown */}
          <div className="relative w-full sm:min-w-[200px] flex-1">
            {/* Layers3 */}
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l9 4.5-9 4.5L3 6.5 12 2zm0 9l9 4.5-9 4.5-9-4.5 9-4.5z" />
            </svg>
            {/* ChevronDown */}
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <select className="w-full pl-10 pr-10 py-3 text-base rounded-xl shadow-sm focus:outline-none appearance-none">
              <option>Type</option>
              <option>Buy</option>
              <option>Rent</option>
              <option>Investment</option>
              <option>Commercial</option>
            </select>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex md:flex-row flex-col h-full w-full gap-10 items-center justify-center p-4 rounded-3xl text-black md:-mt-7">
          <button className="bg-[#fff7ed] border-2 border-orange-300 rounded-3xl px-6 py-3 text-black hover:bg-orange-100 transition flex items-center gap-2">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              width="18"
              height="18"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Search property
          </button>

          <div className="flex gap-2 items-center">
            <p className=" font-semibold tracking-tighter">
              Trusted By Buyers
              <br /> and purchases
            </p>
            <div className="flex -space-x-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User 2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="User 3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/71.jpg"
                alt="User 4"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/85.jpg"
                alt="User 5"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black font-bold text-sm border-2 border-white">
                +5
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right section - Images */}
      <div 
        ref={imageRef}
        style={getImageStyles()}
        className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
      >
        <img
          src="https://framerusercontent.com/images/93Cxsep5zX8709HWfq8ZQUjdrOc.png?scale-down-to=512"
          alt="House 1"
          className="w-full lg:h-60 sm:h-72 object-cover rounded-xl"
        />
        <img
          src="https://framerusercontent.com/images/9iOCryNrB7hYwEiN51ZC4yacRdg.png?scale-down-to=512"
          alt="House 2"
          className="w-full lg:h-48 sm:h-64 object-cover rounded-xl"
        />
        <img
          src="https://framerusercontent.com/images/eqdRD2hUbm9mF1btVinGnGOwpsw.png?scale-down-to=512"
          alt="House 3"
          className="w-full lg:h-52 sm:h-60 object-cover rounded-xl"
        />
        <img
          src="https://framerusercontent.com/images/LbrZluq2fZHITWnzE2pd0uc.png?scale-down-to=512"
          alt="House 4"
          className="w-full lg:h-72 sm:h-80 object-cover rounded-xl"
        />
      </div>
    </div>
    </div>
  );
};

export default Hero;
