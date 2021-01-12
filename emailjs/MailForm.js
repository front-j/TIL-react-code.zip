import React from "react";
import emailjs from "emailjs-com";

function MailForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(["SERVICE_ID"], ["TEMPLATE_ID"], e.target, ["USER_ID"])
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for your message!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <input type="text" name="from_name" placeholder="Name"></input>
      <input type="email" name="from_email" placeholder="Email Address"></input>
      <textarea name="message" placeholder="Message"></textarea>
      <button type="submit" value="Send">
        SEND MESSAGE
      </button>
    </form>
  );
}

export default Contact;
