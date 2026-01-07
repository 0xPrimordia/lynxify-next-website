"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_PROJECT_ID || '');

  if (state.succeeded) {
    return (
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="contact-title">Thank You!</h2>
          <p className="contact-subtitle">
            We've received your message and will get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="contact-title">Let's Build Together</h2>
        <p className="contact-subtitle">
          Ready to create something exceptional? Let's discuss how we can help bring your vision to life with integrity, innovation, and proven expertise.
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button type="submit" className="btn-gradient" disabled={state.submitting}>
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

