import React from "react";

interface ContactEntryProps {
  iconSource?: string;
  text: string;
}

export default function ContactEntry(props: ContactEntryProps) {
  return (
    <div className="flex gap-2 items-center">
      <img className="max-h-5" src={props.iconSource} alt=''/>
      <span >{props.text}</span>
    </div>
  );
}
