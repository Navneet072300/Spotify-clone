import { FaSpotify } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";

export default function Landing() {
  return (
    <>
      <div className="flex gap-2 text-white">
        <div>
          <div className="  bg-primary rounded-md p-5 w-full h-[150px]">
            <div className=" text-2xl flex items-center cursor-pointer">
              <FaSpotify />
              <span className="text-base font-medium">Spotify</span>
            </div>
            <div className=" inline">
              <span className=" text-2xl flex items-center gap-6 mt-4 cursor-pointer">
                <GoHomeFill />
                <p className=" font-[600] text-base">Home</p>
              </span>
              <span className=" text-3xl flex items-center gap-5 mt-4 text-[#DBD7D2] font-medium hover:text-white cursor-pointer">
                <IoSearchOutline />
                <p className=" text-base">Search</p>
              </span>
            </div>
          </div>
          <div className=" bg-primary rounded-md w-full h-full p-5 my-2 z-[99]">
            <div className=" flex items-center justify-between text-[#DBD7D2]">
              <span className=" flex items-center gap-2  text-2xl">
                <BiLibrary />
                <p className=" font-medium text-base ">Your Library</p>
              </span>
              <span className=" text-3xl font-light">+</span>
            </div>
          </div>
        </div>
        <div>
          <div className=" bg-primary rounded-md  w-full max-h-full p-5">
            GRID-3
          </div>
        </div>
      </div>
    </>
  );
}
