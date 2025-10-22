"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import Bubbles from "../../components/animated-bg/bubbles";
import TargetCursor from "../../components/ui/targetcursor";

// Define the structure for form data
interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  // Updated state to track success status along with submission
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false, // Tracks if the submission was successful
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handles changes in form inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for the field being edited
    if (errors[e.target.name as keyof FormData]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  // Validates the form fields
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  // Handles form submission, calling the API route
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    // Reset status before attempting submission
    setFormStatus({ submitted: false, success: false, message: "" });

    try {
      const response = await fetch("/api/contact", {
        // API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      const result = await response.json(); // Parse the JSON response from the API

      if (response.ok) {
        // Successful submission
        setFormStatus({
          submitted: true,
          success: true,
          message: result.message || "Thank you! We'll be in touch soon.",
        });
        // Optionally clear the form upon successful submission
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        // Handle API errors (e.g., validation errors, server issues)
        if (response.status === 409) {
          // Specific handling for duplicate email (Conflict)
          setErrors({
            email: result.error || "This email has already been submitted.",
          });
          setFormStatus({ submitted: false, success: false, message: "" }); // Keep form visible to show error
        } else {
          // Throw an error for other non-OK responses
          throw new Error(
            result.error || `HTTP error! status: ${response.status}`
          );
        }
      }
    } catch (error) {
      // Handle network errors or errors thrown from the try block
      console.error("Submission error:", error);
      setFormStatus({
        submitted: true, // Mark as submitted to show a message
        success: false, // Indicate failure
        message:
          "Submission failed. Please try again later or contact us directly.",
      });
    } finally {
      // Always stop the loading indicator
      setIsSubmitting(false);
    }
  };

  // List of services for the dropdown
  const services = [
    "Web Development",
    "Website Management",
    "Security Consultancy",
    "IT Infrastructure Planning",
    "SEO Services",
    "CRM Integrations",
    "Other",
  ];

  return (
    <div>
      <TargetCursor />
      {/* Page Header Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-8">
        {" "}
        {/* Added padding */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up bg-gradient-to-tl from-teal-700 via-green-200 to-teal-300 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-xl text-text-secondary animate-fade-in-up animation-delay-200">
          Have questions or ready to start your project? We'd love to hear from
          you.
        </p>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-glass p-6 md:p-8 rounded-xl border border-border-color glow-on-hover animate-fade-in-up animation-delay-400">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Conditional Rendering based on form submission status */}
              {formStatus.submitted ? (
                <div className="cursor-target text-center lg:col-span-2 flex flex-col items-center justify-center h-full min-h-[300px]">
                  {" "}
                  {/* Added min-height */}
                  {/* Success Icon */}
                  {formStatus.success ? (
                    <svg
                      className="w-16 h-16 text-green-500 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  ) : (
                    // Failure Icon
                    <svg
                      className="w-16 h-16 text-red-500 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      formStatus.success ? "text-text-primary" : "text-red-500"
                    }`}
                  >
                    {formStatus.success ? "Message Sent!" : "Submission Failed"}
                  </h3>
                  <p className="text-text-secondary">{formStatus.message}</p>
                </div>
              ) : (
                // Form and Contact Info Side-by-Side
                <>
                  {/* Form Container */}
                  <div className="relative bg-gray-900/50 p-8 rounded-lg border border-gray-700 overflow-hidden">
                    <Bubbles />
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 relative z-10"
                      noValidate // Prevent browser validation, rely on custom validation
                    >
                      {/* Name Input */}
                      <div>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name *"
                          className={`cursor-target w-full px-4 py-3 bg-gray-800/60 border rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 ${
                            errors.name
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-600 focus:ring-primary"
                          }`}
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                        />
                        {errors.name && (
                          <p
                            id="name-error"
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      {/* Email Input */}
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email *"
                          className={`cursor-target w-full px-4 py-3 bg-gray-800/60 border rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 ${
                            errors.email
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-600 focus:ring-primary"
                          }`}
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                        />
                        {errors.email && (
                          <p
                            id="email-error"
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                      {/* Service Select */}
                      <div>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`cursor-target w-full px-4 py-3 bg-gray-800/60 border rounded-lg text-gray-100 focus:outline-none focus:ring-2 ${
                            errors.service
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-600 focus:ring-primary"
                          } ${
                            formData.service === ""
                              ? "text-gray-400"
                              : "text-gray-100"
                          }`} // Style placeholder
                          aria-required="true"
                          aria-invalid={!!errors.service}
                          aria-describedby={
                            errors.service ? "service-error" : undefined
                          }
                        >
                          <option value="" disabled className="text-gray-500">
                            Service of Interest *
                          </option>
                          {services.map((s) => (
                            <option key={s} value={s} className="text-gray-100">
                              {s}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p
                            id="service-error"
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.service}
                          </p>
                        )}
                      </div>
                      {/* Message Textarea */}
                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your Message *"
                          rows={4}
                          className={`cursor-target w-full px-4 py-3 bg-gray-800/60 border rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 ${
                            errors.message
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-600 focus:ring-primary"
                          }`}
                          aria-required="true"
                          aria-invalid={!!errors.message}
                          aria-describedby={
                            errors.message ? "message-error" : undefined
                          }
                        ></textarea>
                        {errors.message && (
                          <p
                            id="message-error"
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.message}
                          </p>
                        )}
                      </div>
                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="cursor-target btn-primary w-full mt-2 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            {/* Loading Spinner */}
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Contact Info Section */}
                  <div className="cursor-target space-y-8 text-text-secondary flex flex-col justify-center">
                    <Bubbles /> {/* Consider if bubbles are needed here too */}
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">
                        Contact Info
                      </h3>
                      <p className="text-lg">Email: info@techsolutions.com</p>
                      <p className="text-lg">Phone: +1 (555) 123-4567</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">
                        Response Time
                      </h3>
                      <p className="text-lg">
                        We pride ourselves on our promptness and aim to reply
                        within 24 business hours.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-16 bg-gradient-to-t from-teal-900 to-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-l from-teal-700 via-teal-500 to-green-500 text-transparent bg-clip-text">
            Follow Our Journey
          </h3>
          <p className="text-lg text-text-secondary mb-8">
            Stay connected with us on social media for the latest updates, tips,
            and insights.
          </p>
          {/* Social Media Links */}
          <div className="flex items-center justify-center space-x-8">
            {/* Instagram */}
            <a
              href="#" // Replace with your actual Instagram link
              aria-label="Instagram"
              className="cursor-target bg-primary/10 backdrop-blur-sm p-3 rounded-full text-text-secondary hover:text-[#E1306C] hover:bg-[#E1306C]/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#E1306C]/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ata-khatri/" // Replace with your actual LinkedIn link
              aria-label="LinkedIn"
              className="cursor-target bg-primary/10 backdrop-blur-sm p-3 rounded-full text-text-secondary hover:text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100089441212445" // Replace with your actual Facebook link
              aria-label="Facebook"
              className="cursor-target bg-primary/10 backdrop-blur-sm p-3 rounded-full text-text-secondary hover:text-[#1877F2] hover:bg-[#1877F2]/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/atakhatri" // Replace with your actual GitHub link
              aria-label="GitHub"
              className="cursor-target bg-primary/10 backdrop-blur-sm p-3 rounded-full text-text-secondary hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
