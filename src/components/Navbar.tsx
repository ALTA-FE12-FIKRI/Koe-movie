import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";



import { RiHome6Line } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  const [enabled, setEnabled] = useState(false);

  const dispatch = useDispatch();
  

  return (
    <div className={`navbar sticky top-0 z-50 ${enabled ? "bg-black" : "bg-white"}`}>
      <div className="flex-1">
        <a className={`btn btn-ghost normal-case text-xl ${enabled ? "text-white" : "text-black"}`}>KOE MOVIES</a>
      </div>
      <div className="flex-none ">
        <div>
          <Link to="/" className={`btn btn-square btn-ghost ${enabled ? "bg-zinc-700" : "bg-black"} `}>
            <RiHome6Line />
          </Link>
          <Link to="/favorite" className={`btn btn-square btn-ghost ${enabled ? "bg-zinc-700" : "bg-black"}`}>
            <MdOutlineFavoriteBorder />
          </Link>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className={`btn btn-square btn-ghost ${enabled ? "bg-zinc-700" : "bg-black"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 right-5 ${
              enabled ? "bg-gray-800" : "bg-base-100"
            }`}
          >
            <li>
              <div className="justify-start">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${enabled ? "bg-zinc-800" : "bg-white"}
                  relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-9" : "translate-x-0"}
                    pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white dark:bg-black shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
                <h1>{`${enabled ? "Dark" : "Light"}`}</h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
