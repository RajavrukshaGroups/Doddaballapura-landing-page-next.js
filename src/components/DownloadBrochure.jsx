"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Card } from "react-bootstrap";
import { saveAs } from "file-saver";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Loader from "../utils/loader";
import "./styles/DownloadBrochure.css";
import { API_ENDPOINTS } from "../services/api";

const DownloadBrochure = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        API_ENDPOINTS.BROCHURE,
        data,
        { responseType: "blob" },
      );
      if (response.status === 200 || response.status === 201) {
        const blob = new Blob([response.data], { type: "application/pdf" });
        saveAs(blob, "DHS_Brochure.pdf");
        toast.success("Brochure downloaded successfully!");
        reset();
      } else {
        toast.error("Failed to download brochure. Please try again.");
      }
    } catch (error) {
      console.error("API Error downloading brochure:", error);
      const serverMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Server connection error: Unable to submit brochure request. Please try again later.";
      toast.error(serverMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="download-brochure-container">
      <Toaster position="top-right" />
      {isLoading && <Loader />}
      <Container className="d-flex justify-content-center">
        <Card className="download-brochure-card">
          <Card.Body>
            <h1>Download Brochure</h1>
            <Form
              className="download-brochure-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-grid">
                <Form.Group controlId="formName" className="form-group">
                  <Form.Label className="form-label">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", { required: "Name is required" })}
                    className="form-control"
                  />
                  {errors.name && (
                    <p className="error-message">{errors.name.message}</p>
                  )}
                </Form.Group>

                <Form.Group controlId="formEmail" className="form-group">
                  <Form.Label className="form-label">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="form-control"
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}
                </Form.Group>

                <Form.Group controlId="formMobile" className="form-group">
                  <Form.Label className="form-label">Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    maxLength="10"
                    placeholder="Enter your 10-digit mobile number"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                    }}
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[1-9]\d{9}$/,
                        message:
                          "Mobile number must be exactly 10 digits and cannot start with 0",
                      },
                    })}
                    className="form-control"
                  />
                  {errors.mobile && (
                    <p className="error-message">{errors.mobile.message}</p>
                  )}
                </Form.Group>

                <Form.Group controlId="formAddress" className="form-group">
                  <Form.Label className="form-label">Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    {...register("address", { required: "Address is required" })}
                    className="form-control"
                  />
                  {errors.address && (
                    <p className="error-message">{errors.address.message}</p>
                  )}
                </Form.Group>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label" htmlFor="declaration-checkbox-brochure">
                  <input
                    id="declaration-checkbox-brochure"
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
                  <p className="error-message">{errors.declaration.message}</p>
                )}
              </div>

              <div className="button-container">
                <Button
                  variant="primary"
                  type="submit"
                  className="download-button"
                >
                  Download Now
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default DownloadBrochure;
