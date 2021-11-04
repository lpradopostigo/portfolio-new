import React from "react";

import ContactEntry from "../ContactEntry";
import email from "../../../assets/email.svg";
import phone from "../../../assets/phone.svg";
import gitHub from "../../../assets/git-hub.svg";

export default function Contact() {
  return (
    <footer id="contact" className="bg-gray-100 px-10 py-5 flex flex-col">
      <ContactEntry iconSource={email} text="lpradopostigo@gmail.com" />
      <ContactEntry iconSource={phone} text="+51 987 704 882" />
      <ContactEntry iconSource={gitHub} text="lpradopostigo" />
    </footer>
  );
}
