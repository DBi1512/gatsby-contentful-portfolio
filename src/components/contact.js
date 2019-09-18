import React from "react";
import "./index.css";

const Contact = () => (
    <section id="contact">
        <h1>Contact</h1>

        <div className="contact-information container">
            <p>Have any question? Feel free to contact me by filling in the form below:</p>

            <form action="https://formspree.io/dean.t.phan@gmail.com" method="POST">
                <label htmlFor="name" />
                <input
                    class="personal-information"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    pattern="[A-Z]{1}[a-z]{1,15}+[A-Z]{1}[a-z]{1,15}"
                    required
                />

                <label htmlFor="email" />
                <input
                    class="personal-information"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    pattern="[a-zA-Z0-9._-]+@+[a-z0-9]+.+[a-z0-9]"
                    required
                />
                <br />
                <textarea
                    className="comment-area"
                    rows="5"
                    cols="30"
                    name="comment"
                    placeholder="Your message"
                    required
                />
                <br />
                <input className="comment-button" type="submit" value="Get in touch" />
            </form>
        </div>
    </section>
);

export default Contact;
