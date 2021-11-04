import React from "react";

interface ContactEntryProps {
  iconSource?: string;
  text: string;
}

export default function ContactEntry(props: ContactEntryProps) {
  return (
    <div className="flex gap-2 items-center">
      <img className="max-h-4" src={props.iconSource} alt=''/>
      <span className="text-sm" >{props.text}</span>
    </div>
  );
}
