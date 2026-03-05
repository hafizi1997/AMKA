"use client";

import emailjs from "@emailjs/browser";
import { type FormEvent, useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResultMessage("");

    const serviceId =
      process.env.NEXT_PUBLIC_EMAIL_SERVICEID || process.env.VITE_EMAIL_SERVICEID;
    const templateId =
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATEID ||
      process.env.VITE_EMAIL_TEMPLATEID;
    const publicKey =
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ||
      process.env.VITE_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setResultMessage("Email service is not configured.");
      alert("Email service is not configured.");
      return;
    }

    try {
      setIsSubmitting(true);
      const formElement = event.currentTarget;
      const formData = new FormData(formElement);

      const payload = {
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        subject: String(formData.get("Subject") || ""),
        message: String(formData.get("message") || ""),
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        payload,
        publicKey
      );

      console.log("Email sent successfully!", response.status, response.text);
      alert("Message sent successfully!");
      setResultMessage("Message sent successfully!");
      formElement.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again later.");
      setResultMessage("Failed to send email. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact">
        {/*Google Map Start*/}
        <section className="google-map-one">
          <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.016972429654!2d101.62124867581336!3d3.090140053510808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4be0d0219e99%3A0xecc3cbbaa08ca8ca!2sCube%20Self%20Storage%20(Petaling%20Jaya)!5e0!3m2!1sen!2ssg!4v1772613969972!5m2!1sen!2ssg"
              className="google-map__one"
              allowFullScreen=""
            />
          </div>
        </section>
        {/*Google Map End*/}

        {/*Contact Page Start*/}
        <section className="contact-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <div className="contact-page__left">
                  <h3 className="contact-page__title">Get In Touch</h3>
                  <ul className="contact-page__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-location" />
                      </div>
                      <div className="content">
                        <h3>Address</h3>
                        <p>
                          Cube Self Storage Suite 2.1, Seksyen 51a, 46100,
                          Petaling Jaya,
                          <br /> Selangor, Malaysia.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-telephone" />
                      </div>
                      <div className="content">
                        <h3>Phone</h3>
                        <p>
                          <Link href="tel:60193623141">+60 19-3623141</Link>
                        </p>
                        <p>
                          <Link href="tel:60198176949">+60 19-8176949</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-open-mail" />
                      </div>
                      <div className="content">
                        <h3>Address</h3>
                        <p>
                          <Link href="mailto:info-team@amkatechnologies.com">
                            info-team@amkatechnologies.com
                          </Link>
                        </p>
                        <p>
                          <Link href="mailto:info-team@amkatechnologies.com">
                            contact@amkatech.com
                          </Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="contact-page__right">
                  <div className="contact-page__form-box">
                    <form
                      onSubmit={handleSubmit}
                      className="contact-page__form contact-form-validated"
                      noValidate
                    >
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="contact-page__input-box">
                            <input
                              type="text"
                              placeholder="Full name"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="contact-page__input-box">
                            <input
                              type="email"
                              placeholder="Email Address"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="contact-page__input-box">
                            <input
                              type="text"
                              placeholder="Phone"
                              name="phone"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="contact-page__input-box">
                            <input
                              type="text"
                              placeholder="Subject"
                              name="Subject"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="contact-page__input-box text-message-box">
                            <textarea
                              name="message"
                              placeholder="Your Message"
                              defaultValue={""}
                            />
                          </div>
                          <div className="contact-page__btn-box">
                            <button
                              type="submit"
                              className="contact-page__btn"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Sending..." : "Send Message"}
                              <span>+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="result">{resultMessage}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Contact Page End*/}
        {/*Newsletter One Start*/}
        <section className="newsletter-one">
          <div className="container">
            <div className="newsletter-one__inner">
              <div
                className="newsletter-one__bg float-bob-y"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/newsletter-one-bg.jpg)",
                }}
              />
              <h3 className="newsletter-one__title">Newsletter</h3>
              <p className="newsletter-one__sub-title">Stay updated</p>
              <div
                className="newsletter-one__form mc-form"
                data-url="MC_FORM_URL"
              >
                <input type="email" name="EMAIL" placeholder="Email address" />
                <button type="submit" className="newsletter-one__btn">
                  <span>
                    Subscribe
                    <i className="icon-arrow" />
                  </span>
                </button>
              </div>
              {/* /.subscribe-one__form */}
              <div className="mc-form__response" />
              {/* /.mc-form__response */}
            </div>
          </div>
        </section>
        {/*Newsletter One End*/}
      </Layout>
    </>
  );
}
