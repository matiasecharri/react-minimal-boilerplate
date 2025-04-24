import { AppRoutes } from "@/shared/routes";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "@/shared/context/user";
import { Button } from "../button";
import clsx from "clsx";
import s from "./nav.module.css";

export const Nav = () => {
  const { user, toggleLogged } = useUser();
  const navigate = useNavigate();
  const btnText = user.isLogged ? "Sign Out" : "Sign In";
  const btnStyles = clsx(s.btn, user.isLogged ? s.signout : s.signin);

  const handleSignIn = () => {
    user.isLogged
      ? toggleLogged()
      : (toggleLogged(), navigate(AppRoutes.private.DASHBOARD));
  };

  return (
    <nav className={s.nav}>
      <Button
        handleClick={handleSignIn}
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
