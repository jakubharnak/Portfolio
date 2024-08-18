import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ed67920a-5b43-4457-a8c8-b046af32f233");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Message sent successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="border-b border-transparent pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.2 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <section className="contact">
          <form onSubmit={onSubmit}>
            <div className="input-box">
              <label htmlFor="name"></label>
              <input
                type="text"
                className="field"
                id="name"
                placeholder="Enter your name"
                name="name"
                autoComplete="name"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="email"></label>
              <input
                type="email"
                className="field"
                id="email"
                placeholder="Enter your email"
                name="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="message"></label>
              <textarea
                className="field mess"
                id="message"
                placeholder="Enter your message"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
