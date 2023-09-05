import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faVideo,
  faFilm,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

function SummaryCountBar() {
  return (
    <div className="grow md:p-[24px] pt-8 dark:text-white">
      <h5 className="font-semibold text-lg mb-[24px]">Dashboard</h5>
      <div className="grid grid-rows-2 grid-flow-col gap-y-[10px] md:flex md:flex-row gap-x-[10px]">
        <div className="group flex-auto dark:rounded-lg dark:border dark:border-solid dark:border-gray-600/70  dark:drop-shadow-none drop-shadow-[0_0.8px_2px_rgba(211,211,211,0.8)] text-center dark:text-white">
          <div className="p-[20px] bg-white dark:bg-dark-card-bg rounded-lg group-hover:bg-custom-blue group-hover:text-white transition-all duration-300 cursor-pointer">
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
        <div className="group flex-auto dark:rounded-lg dark:border dark:border-solid dark:border-gray-600/70  dark:drop-shadow-none drop-shadow-[0_0.8px_2px_rgba(211,211,211,0.8)] text-center dark:text-white">
          <div className="p-[20px] bg-white dark:bg-dark-card-bg rounded-lg group-hover:bg-custom-blue group-hover:text-white transition-all duration-300 cursor-pointer">
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
        <div className="group flex-auto dark:rounded-lg dark:border dark:border-solid dark:border-gray-600/70  dark:drop-shadow-none drop-shadow-[0_0.8px_2px_rgba(211,211,211,0.8)] text-center dark:text-white">
          <div className="p-[20px] bg-white dark:bg-dark-card-bg rounded-lg group-hover:bg-custom-blue group-hover:text-white transition-all duration-300 cursor-pointer">
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
        <div className="group flex-auto dark:rounded-lg dark:border dark:border-solid dark:border-gray-600/70  dark:drop-shadow-none drop-shadow-[0_0.8px_2px_rgba(211,211,211,0.8)] text-center dark:text-white">
          <div className="p-[20px] bg-white dark:bg-dark-card-bg rounded-lg group-hover:bg-custom-blue group-hover:text-white transition-all duration-300 cursor-pointer">
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
