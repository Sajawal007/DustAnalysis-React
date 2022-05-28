import React from "react";
import inputData from "./inputData";
import Option from "./Option";

export default function Menu(props) {
  return (
    <>
      {inputData.map((val) => {
        return (
          <Option
            id={val.id}
            text={val.text}
            percentage={val.percentage}
            fav1={val.fav1}
            fav2={val.fav2}
            fav3={val.fav3}
          />
        );
      })}
    </>
  );
}
