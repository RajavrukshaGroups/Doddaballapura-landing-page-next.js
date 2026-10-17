"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Filter } from "bad-words";
import Loader from "../utils/loader";
import "./styles/ContactUs.css";
import location from "../images/qrcode.png";
import contactBanner from "../images/c.webp";
import { API_ENDPOINTS } from "../services/api";

// Next.js App Router manages head metadata via page.jsx metadata export
const Helmet = () => null;

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // Track submission status
  const [fieldErrors, setFieldErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null); // 👈 store captcha token
  const recaptchaRef = useRef();

  const filter = new Filter();

  const handleProfanityCheck = (fieldName, value) => {
    if (filter.isProfane(value)) {
      setFieldErrors((prev) => ({
        ...prev,
        [fieldName]: "Please avoid using foul language",
      }));
    } else {
      setFieldErrors((prev) => {
        const updateErrors = { ...prev };
        delete updateErrors[fieldName];
        return updateErrors;
      });
    }
  };

  const onSubmit = async (data) => {
    if (!captchaValue) {
      toast.error("Please verify that you are not a robot!");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.CONTACT_US, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, captchaValue }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        toast.success("Form submitted successfully");
        setCaptchaValue(null);
        reset();
      } else {
        setSubmitStatus("error");
        const errorData = await response.json();
        toast.error(
          errorData.error || "Error submitting form. Please try again.",
        );
      }
      recaptchaRef.current?.reset();
      setCaptchaValue(null);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus("error");
      toast.error("Error submitting form. Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Toaster position="top-right" />
      <Helmet>
        <title>Contact Us | Defence Housing Society</title>
        <meta
          name="description"
          content="Get in touch with Defence Housing Society for inquiries, support, membership information. Contact our team today."
        />
        <link
          rel="canonical"
          href="https://defencehousingsociety.co.in/contact-us"
        />
      </Helmet>

      <div className="contactus">
        {isLoading && <Loader />}
        <div
          className="banner-contact"
          style={{ backgroundImage: `url(${contactBanner?.src || contactBanner})` }}
        >
          <div className="banner-content-contact">
            <h1>Contact Us</h1>
          </div>
        </div>

        <div className="contact-content">
          <h2 className="contact-quote">
            &ldquo;Get in touch with us today to find out how we can help you with all
            your real estate needs.&rdquo;
          </h2>
          <div className="contact-form-details-row">
            <div className="contact-form-col">
              <div className="contact-form-container">
                <h3 className="form-heading">
                  Get in Contact with Our Team
                </h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-form"
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        {...register("name", {
                          required: "Name is required",
                        })}
                        onChange={(e) =>
                          handleProfanityCheck("name", e.target.value)
                        }
                      />
                      {errors.name && (
                        <p className="error-message">{errors.name.message}</p>
                      )}
                      {fieldErrors.name && (
                        <p className="error-message">{fieldErrors.name}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        maxLength="10"
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                        }}
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[1-9]\d{9}$/,
                            message: "Invalid phone number. It must be 10 digits and cannot start with 0",
                          },
                        })}
                      />
                      {errors.phone && (
                        <p className="error-message">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                          },
                        })}
                        onChange={(e) =>
                          handleProfanityCheck("email", e.target.value)
                        }
                      />
                      {errors.email && (
                        <p className="error-message">{errors.email.message}</p>
                      )}
                      {fieldErrors.email && (
                        <p className="error-message">{fieldErrors.email}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                        onChange={(e) =>
                          handleProfanityCheck("subject", e.target.value)
                        }
                      />
                      {errors.subject && (
                        <p className="error-message">
                          {errors.subject.message}
                        </p>
                      )}
                      {fieldErrors.subject && (
                        <p className="error-message">{fieldErrors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">Message</label>
                    <textarea
                      style={{ resize: "none" }}
                      id="message"
                      name="message"
                      {...register("message", {
                        required: "Message is required",
                      })}
                      onChange={(e) =>
                        handleProfanityCheck("message", e.target.value)
                      }
                    ></textarea>
                    {errors.message && (
                      <p className="error-message">{errors.message.message}</p>
                    )}
                    {fieldErrors.message && (
                      <p className="error-message">{fieldErrors.message}</p>
                    )}
                  </div>

                  <div>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LfarqkrAAAAAFUBBVCodI4OdoTheC6uB1hdtITz"
                      onChange={(value) => setCaptchaValue(value)}
                    />
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label" htmlFor="declaration-checkbox">
                      <input
                        id="declaration-checkbox"
                        type="checkbox"
                        className="declaration-input"
                        {...register("declaration", {
                          required: "You must accept the Terms and Conditions and Privacy Policy",
                        })}
                      />
                      <span className="checkbox-text">
                        I accept the{" "}
                        <a
                          href="/terms-and-conditions"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                    {errors.declaration && (
                      <p className="error-message">
                        {errors.declaration.message}
                      </p>
                    )}
                  </div>

                  <button type="submit" className="submit-button">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="contact-details-col">
              <div className="info-card">
                <div className="contact-info-item">
                  <h3 className="contact-info-heading">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="contact-blue-icon"
                    />
                    <span>Address</span>
                  </h3>
                  <p className="contact-info-text">
                    Defence Habitat Housing Co-Operative Society Ltd.
                    <br />
                    Behind Swathi Gardenia Hotel, Sahakarnagar E Block
                    <br />
                    Bangalore - 560092
                  </p>
                </div>

                <div className="contact-info-item">
                  <h3 className="contact-info-heading">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="contact-blue-icon"
                    />
                    <span>Email</span>
                  </h3>
                  <p className="contact-info-text">
                    <a
                      href="mailto:mail@defencehousingsociety.co.in"
                      className="contact-info-link"
                    >
                      mail@defencehousingsociety.co.in
                    </a>
                  </p>
                </div>

                <div className="contact-info-item">
                  <h3 className="contact-info-heading">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="contact-blue-icon"
                    />
                    <span>Phone</span>
                  </h3>
                  <p className="contact-info-text">
                    <a href="tel:080-29903931" className="contact-info-link">
                      080 - 29903931
                    </a>
                  </p>
                </div>
              </div>

              <div className="scan-location">
                <h2 className="scan-heading">
                  SCAN HERE FOR <br /> OFFICE LOCATION
                </h2>
                <div className="scan-image">
                  <img src={location?.src || location} alt="Office Location QR Code" />
                </div>
              </div>
            </div>
          </div>

          <div className="map-row">
            <div className="map-col">
              <div className="map-container">
                <iframe
                  className="iframe-container"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.61915046687!2d77.58879931482295!3d13.059896990797979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzM1LjYiTiA3N8KwMzUnMjcuNiJF!5e0!3m2!1sen!2sin!4v1636363430335"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Defence Habitat Location"
                ></iframe>
              </div>
            </div>
            <div className="crm-col">
              <div className="iframe-container crm-iframe-container">
                <h2 className="crm-heading">
                  Solid Performers CRM
                </h2>

                <iframe
                  id="WebLead"
                  src="https://account.solidperformers.com/capture_form_data/MTI3Mg=="
                  style={{ border: "0px", height: "760px", width: "100%" }}
                  title="Web Lead"
                  scrolling="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
