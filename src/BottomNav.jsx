import React from "react";
import CustomButton from "./CustomButton";

export default function BottomNav(props) {
  return (
    <>
      <div className="margin-for-nav">
        <CustomButton style="btn grey darken-1" text="BACK" />
        <CustomButton style="btn blue" text="Save Analysis" />
      </div>
    </>
  );
}
