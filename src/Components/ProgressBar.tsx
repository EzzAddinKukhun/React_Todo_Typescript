import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircularData {
    percent: number,
    title: string
}

export default function ProgressBar({percent, title}: CircularData) {
  return (
    <>
      <div className="prbar">
        <CircularProgressbar  value={percent} text={`${percent}%`} />
        <h4>{title}</h4>
      </div>
    </>
  );
}
