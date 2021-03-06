import React from "react";
import "./index.css";

const Contact = () => (
    <section id="contact" className="Section-container">
        <div className="Section-title">
            <h1 className="Section-title-text">Contact</h1>
        </div>

        <div className="Container">
            <p className="Information-text">Have any question? Feel free to contact me by filling in the form below:</p>

            {/* Using Formspree free package (50 emails/month) */}
            <form action="https://formspree.io/dean.t.phan@gmail.com" method="POST">
                <div className="personal">
                    <div>
                        <label htmlFor="name" />
                        <input
                            className="personal-information"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            pattern="[A-Z]{1}[a-z]{1,15}+[A-Z]{1}[a-z]{1,15}"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" />
                        <input
                            className="personal-information"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            pattern="[a-zA-Z0-9._-]+@+[a-z0-9]+.+[a-z0-9]"
                            required
                        />
                    </div>
                </div>

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
