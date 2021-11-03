import React from "react";

import ContactEntry from "../ContactEntry";
import email from "../../../assets/email.svg";
import phone from "../../../assets/phone.svg";
import gitHub from "../../../assets/git-hub.svg";

export default function Contact() {
  return (
    <footer id="contact" className="bg-gray-100 rounded-t-md p-5">
      <ContactEntry iconSource={email} text="lpradopostigo@gmail.com" />
      <ContactEntry iconSource={phone} text="+51 987 704 882" />
      <ContactEntry iconSource={gitHub} text="lpradopostigo" />
    </footer>
  );
}
