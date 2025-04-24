import { AppRoutes } from "@/shared/routes";
import { NavLink } from "react-router-dom";
import { useUser } from "@/shared/context/user";
import { Button } from "../button";
import s from "./nav.module.css";
import clsx from "clsx";

export const Nav = () => {
  const { user, toggleLogged } = useUser();
  const btnText = user.isLogged ? "Sign Out" : "Sign In";
  const btnStyles = clsx(s.btn, user.isLogged ? s.signout : s.signin);

  return (
    <nav className={s.nav}>
      <Button
        handleClick={toggleLogged}
        text={btnText}
        ariaLabel={btnText}
        className={btnStyles}
      />
      <NavLink to={AppRoutes.public.HOME}>Home</NavLink>
      <NavLink to={AppRoutes.public.ABOUT}>About</NavLink>
      {user.isLogged && (
        <NavLink to={AppRoutes.private.DASHBOARD}>Dashboard</NavLink>
      )}
    </nav>
  );
};
