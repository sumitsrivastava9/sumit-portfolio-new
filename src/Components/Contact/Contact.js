import React from "react";
import "./Contact.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function clearFields() {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  async function submitDetails(event) {
    event.preventDefault();

    const details = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    const response = await axios.post("https://backend-dk-portfolio.herokuapp.com/contact/newcontact", details);
    if (response.data.success === true) {
      Swal.fire("Message Sent Successfully");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Fill the fields correctly and try again.",
      });
    }

    clearFields();
  }

  useEffect(() => {
    // console.log(data)
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div id="contact">
        <div className="contact__main__parent">
          <div className="contact__heading" data-aos="fade-up">
            <p>CONTACT ME</p>
            <h1>Ready for projects or a friendly chat? Let's connect!</h1>
          </div>
          <div className="contact__form" data-aos="fade-up">
            <form onSubmit={submitDetails} className="contact__left">
              <p>SEND ME MESSAGE</p>
              <input
                type="text"
                placeholder="Your Name"
                className="input__field"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input__field"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                className="input__field"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Your Message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input type="submit" value="submit" />
            </form>

            <div className="contact__right">
              <p className="contact__info__p">CONTACT INFO</p>
              <div className="contact__right__box">
                <p>My offline Presence</p>
                <h1>Jal vihar sector 46, Gurgaon</h1>
              </div>
              <div className="contact__right__box">
                <p>Email Me</p>
                <h1>sumkumar723@gmail.com</h1>
              </div>
              <div className="contact__right__box">
                <p>Call Me</p>
                <h1>Mobile: (+91)8292359259</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
