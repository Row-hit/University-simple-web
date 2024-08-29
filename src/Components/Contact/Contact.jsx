import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import location_icon from "../../assets/location-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7fa23edb-2fbd-430e-9968-0d53c5bfe08f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a massage <img src={msg_icon} alt="" />
        </h3>
        <p>
          Fee1 free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            MArkjasof@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            331 + 2534 265 562
          </li>
          <li>
            <img src={location_icon} alt="" />
            los angelos , degtree street, wiliam unsuk , USA
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label> Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name here"
            required
          />
          <label> Phone Number</label>
          <input type="tel" name="phone" required />

          <label> Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
