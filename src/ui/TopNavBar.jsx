import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function TopNavBar() {
  return (
    <div className="flex justify-between  drop-shadow-[0_0.5px_4px_rgba(211,211,211,0.8)] bg-white rounded-lg">
      <div className="flex justify-self-center items-center">
        <img src="/logos/dark-logo.svg" width="160" className="ml-6" />
      </div>
      <div className="flex justify-between w-[120px] h-16 mr-6">
        <div className="flex items-center my-[17px] px-[14px] py-4 rounded-md border-custom-blue border hover:bg-blue-500 transition-all duration-300 hover:text-white text-blue-500">
          <FontAwesomeIcon icon={faMoon} className=" w-[10.5px] h-[14px] " />
        </div>
        <img
          src="/profile/user-1.jpg"
          className="object-cover rounded-full p-4"
        />
      </div>
    </div>
  );
}

export default TopNavBar;
