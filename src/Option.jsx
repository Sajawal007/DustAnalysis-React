import React from "react";
import SingleOptionFav from "./SignleOptionFavicon";
import SingleOptionText from "./SingleOptionText";

const Option = (props) => {
  return (
    <>
      <div className="row">
        <div className="col s2 margind-top">
          <SingleOptionFav id="1" icon_name={props.fav1} />
        </div>
        <div className="col s2">
          <SingleOptionText id="2" text={props.text} />
        </div>
        <div className="col s2">
          <SingleOptionText id="3" text={props.percentage} />
        </div>
        <div className="col s2 margind-top">
          <SingleOptionFav id="4" icon_name={props.fav2} />
        </div>
        <div className="col s2 margind-top">
          <SingleOptionFav id="5" icon_name={props.fav3} />
        </div>
      </div>
    </>
  );
};

export default Option;
