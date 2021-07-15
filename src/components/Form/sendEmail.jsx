import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm('service_4k0oxcm', 'template_jjonxy4', e.target, 'user_L88bJdNFhrP3czgos9xjl')
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="text" name="contact_number" />
      <label>Name</label>
      <input type="text" name="clientsName" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
