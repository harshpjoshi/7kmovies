import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faVideo,
  faFilm,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

function SummaryCountBar() {
  return (
    <div className="grow p-[24px]">
      <h5 className="font-semibold text-lg mb-[24px]">Dashboard</h5>
      <div className="flex flex-row gap-x-[10px]">
        <div className="group flex-auto drop-shadow-[0_0.8px_2px_rgba(211,211,211,0.8)] text-center">
          <div className="p-[20px] bg-white rounded-lg group-hover:bg-custom-blue group-hover:text-white transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-center">
              <div className="bg-custom-blue mb-[20px] w-[50px] h-[50px] flex items-center justify-center rounded-md text-white">
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-[18.88px] h-[25px]"
                />
              </div>
            </div>
            <h5 className="font-semibold text-sm">Total Users</h5>
            <h5 className="group-hover:text-white font-extrabold text-2xl text-custom-blue transition-all duration-300">
              53
            </h5>
          </div>
        </div>
        <div className="group flex-auto drop-shadow-[0_0.8px_2px_rgba(211,211,211,0.8)] text-center">
          <div className="p-[20px] bg-white rounded-lg group-hover:bg-custom-blue group-hover:text-white transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-center">
              <div className="bg-custom-blue mb-[20px] w-[50px] h-[50px] flex items-center justify-center rounded-md text-white">
                <FontAwesomeIcon
                  icon={faVideo}
                  className="w-[18.88px] h-[25px]"
                />
              </div>
            </div>
            <h5 className="font-semibold text-sm">Total Movies</h5>
            <h5 className="group-hover:text-white font-extrabold text-2xl text-custom-blue transition-all duration-300">
              53
            </h5>
          </div>
        </div>
        <div className="group flex-auto drop-shadow-[0_0.8px_2px_rgba(211,211,211,0.8)] text-center">
          <div className="p-[20px] bg-white rounded-lg group-hover:bg-custom-blue group-hover:text-white transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-center">
              <div className="bg-custom-blue mb-[20px] w-[50px] h-[50px] flex items-center justify-center rounded-md text-white">
                <FontAwesomeIcon
                  icon={faFilm}
                  className="w-[18.88px] h-[25px]"
                />
              </div>
            </div>
            <h5 className="font-semibold text-sm">Total Cinemas</h5>
            <h5 className="group-hover:text-white font-extrabold text-2xl text-custom-blue transition-all duration-300">
              53
            </h5>
          </div>
        </div>
        <div className="group flex-auto drop-shadow-[0_0.8px_2px_rgba(211,211,211,0.8)] text-center">
          <div className="p-[20px] bg-white rounded-lg group-hover:bg-custom-blue group-hover:text-white transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-center">
              <div className="bg-custom-blue mb-[20px] w-[50px] h-[50px] flex items-center justify-center rounded-md text-white">
                <FontAwesomeIcon
                  icon={faTicket}
                  className="w-[18.88px] h-[25px]"
                />
              </div>
            </div>
            <h5 className="font-semibold text-sm">Total Tickets</h5>
            <h5 className="group-hover:text-white font-extrabold text-2xl text-custom-blue transition-all duration-300">
              53
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryCountBar;
