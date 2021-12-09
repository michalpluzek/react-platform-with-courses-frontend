import React from "react";
import bemCssModules from "bem-css-modules";
import { Link } from "react-router-dom";

import { default as AsideMenuStyles } from "../AsideMenu.module.scss";

const style = bemCssModules(AsideMenuStyles);

const UserMenu = ({ isUserLogged }) => {
  const ifUserLogged = isUserLogged && (
    <li className={style("link")}>
      <Link to="/my-courses">Moja zakupione kursy</Link>
    </li>
  );

  return (
    <>
      <p className={style("title")}>Panel użytkownika</p>
      <nav>
        <ul>
          <li className={style("link")}>
            <Link to="/">Kursy w sprzedaży</Link>
          </li>
          {ifUserLogged}
        </ul>
      </nav>
    </>
  );
};

export default UserMenu;
