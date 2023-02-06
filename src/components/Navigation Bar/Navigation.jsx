import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

import "./navigation.css";
import { Fragment, useState } from "react";

import { useDispatch } from "react-redux";
import { uiActions } from "../../store";

function NavigationBar(props) {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  return (
    <Fragment>
      <nav>
        <h1>{props.name}</h1>
        <ul>
          {props.navlinks.map((link) => {
            return (
              <NavLink activeClassName="active" to={link.link}>
                {link.title}
              </NavLink>
            );
          })}
        </ul>
        <div>
          {props.login && (
            <Button
              onClick={() => {
                dispatch(uiActions.toggleAuth(true))
              }}
            >
              Log In
            </Button>
          )}
          {props.signup && (
            <Button
              onClick={() => {
                setModal(!modal);
              }}
              className="filled"
            >
              Sign Up
            </Button>
          )}
          {props.getstarted && (
            <Button
              onClick={() => {
                setModal(!modal);
              }}
              className="light"
            >
              Get Started
            </Button>
          )}
        </div>
      </nav>
    </Fragment>
  );
}

export default NavigationBar;
