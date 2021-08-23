import React from 'react';
import emailjs from 'emailjs-com';

import data from '../storage/informaitonWeb.json'

import "../css/contactForm.css"
export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('s', 'tempID', e.target, 'Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <>
    <div className="contactWrapper">
    <div className="contactTitle"><p>Skontaktuj się z nami!</p></div>

    <form className="contact-form" onSubmit={sendEmail}>
      <p>{data.titleForm}</p>
      <input type="hidden" name="contact_number" />
      <div className="input">
      <label>Email</label>
      <input type="email" name="user_email" />
      </div>
      <div className="button">
        <input type="submit" value="Wyślij" />
      </div>
      <div className="socialmedia">
      <p><i class="fas fa-phone-alt"></i>{data.phone}</p>
      <p><i class="far fa-envelope-open"></i>{data.email}</p>
      <p><i class="fab fa-facebook-square"></i>{data.fanpage}</p>
      </div>
      </form>
    <div className="map">
    <p>Tu nas znajdziesz</p>
    <iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1024.8291653726124!2d18.637179050553858!3d51.03662417709503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47109baa6ec18faf%3A0x2e7ac11234345f31!2sMINI%20NARZ%C4%98DZIOWNIA%20Karol%20Struga%C5%82a!5e0!3m2!1spl!2spl!4v1627132581771!5m2!1spl!2spl" allowfullscreen="" loading="lazy"></iframe></div>
    </div>
    </>
  );
}
