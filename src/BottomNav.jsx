import React from "react";
import CustomButton from "./CustomButton";

export default function BottomNav(props) {
  return (
    <>
      <CustomButton style="btn grey darken-1" text="BACK" />
      <CustomButton style="btn blue" text="Save Analysis" />
    </>
  );
}
