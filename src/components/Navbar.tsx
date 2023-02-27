import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 border-gray-200 bg-[#393E46]">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">KOE MOVIES</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-square btn-ghost">
            <div className="w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Light</a>
            </li>
            <li>
            <Link
              to="/favorite"
              className=" btn bg-zinc-500 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90"
            >
              Favorite
            </Link>
          </li>
            <li>
              <a>login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;