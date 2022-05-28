import React from "react";
import "materialize-css/dist/css/materialize.min.css";

export default function CustomButton(props) {
  return <button className={props.style}>{props.text}</button>;
}
