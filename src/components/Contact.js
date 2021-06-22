import React from 'react';

export default function Contact() {

    return (
        <section >
            <h2>CONTACT</h2>
            <div>
                <form
                    name="contact-form"
                    method="POST"
                    // action="/contact/?success=true"
                    data-netlify="true"
                >

                    <input type="hidden" name="form-name" value="contact-form" />
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />

                    </div>
                    <div>
                        <label htmlFor>Email</label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor>Message</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
}