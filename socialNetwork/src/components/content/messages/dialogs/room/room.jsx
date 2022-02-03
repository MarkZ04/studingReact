import React from "react";
import { NavLink } from "react-router-dom";

export const Room = (props) => {
  return (
    <a href="#">
      {props.name}
    </a>
  )
}