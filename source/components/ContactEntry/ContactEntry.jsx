import React from "react";

export default function ContactEntry(props) {
  return (
    <div className="flex gap-2 items-center">
      <img className="max-h-4" src={props.iconSource} alt="" />
      <span className="text-sm">{props.text}</span>
    </div>
  );
}
