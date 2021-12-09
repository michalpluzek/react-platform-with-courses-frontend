import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";
import { Routes, Route } from "react-router-dom";

import { default as ContentStyles } from "./Content.module.scss";
import { StoreContext } from "../../store/StoreProvider";

import Courses from "../Courses/Courses";

const style = bemCssModules(ContentStyles);

const ADMIN_TYPE = 1;

const Content = () => {
  const { user } = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdmin = user?.accessLevel === ADMIN_TYPE;

  const ifUserLogged = isUserLogged && (
    <Route exact path="/my-courses" element={<p>Moje kursy</p>} />
  );

  const ifAdminLogged = isAdmin && (
    <Route exact path="/manage-courses" element={<p>Zarządzanie kursami</p>} />
  );

  return (
    <main className={style()}>
      <Routes>
        <Route exact path="/" element={<Courses />} />
        {ifUserLogged}
        {ifAdminLogged}
        <Route path="*" />
      </Routes>
    </main>
  );
};

export default Content;
