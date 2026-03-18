import React from 'react';
import './contact-page.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p className="contact-intro">Get in touch with us</p>
                
                <div className="contact-info">
                    <p className="email-label">Our Email:</p>
                    <a href="mailto:fakemail@fake.com" className="email-link">
                        fakemail@fake.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;