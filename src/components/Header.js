import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="inner-content">
            <div className="brand">
              <Link to="/">WatchList App</Link>
            </div>

            <ul className="nav-links">
              <li>
                <Link to="/">Movie List</Link>
              </li>
              <li>
                <Link to="/watchlist">Watch List</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
