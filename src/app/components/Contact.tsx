"use client";

import React, { useState, useEffect, useCallback } from "react";

const Contact: React.FC = () => {
  const [formType, setFormType] = useState<"general" | "work">("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    enquiryType: "General Question",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash === "#general-question") {
      setFormType("general");
    } else if (hash === "#work-enquiry") {
      setFormType("work");
    }
    setFormData((prevData) => ({
      ...prevData,
      subject: "",
    }));
  }, []);

  useEffect(() => {
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleHashChange]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      enquiryType:
        formType === "general" ? "General Question" : formData.enquiryType,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        enquiryType: "General Question",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderFormFields = () => (
    <>
      <div className="mb-6">
        <label htmlFor="name" className="block text-2xl font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg text-blue-900 text-xl"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-2xl font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg text-blue-900 text-xl"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="block text-2xl font-medium mb-2">
          Subject
        </label>
        {formType === "general" ? (
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg text-blue-900 text-xl"
            required
          />
        ) : (
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg text-blue-900 text-xl"
            required
          >
            <option value="">Select a subject</option>
            <option value="engine-maintenance">Engine Maintenance</option>
            <option value="electrical-repair">Electrical Repair</option>
            <option value="fuel-maintenance">Fuel Maintenance</option>
            <option value="trailer-maintenance">Trailer Maintenance</option>
            <option value="propulsion-services">Propulsion Services</option>
            <option value="plumbing-cooling">Plumbing & Cooling</option>
            <option value="safety-installation">
              Safety Equipment Installation
            </option>
            <option value="other">Other</option>
          </select>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-2xl font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-lg text-blue-900 text-xl"
          required
        ></textarea>
      </div>
    </>
  );

  return (
    <section id="contact" className="py-16 px-4 bg-white relative">
      <div id="general-question" className="contact-scroll-offset"></div>
      <div id="work-enquiry" className="contact-scroll-offset"></div>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-blue-950">Contact Us</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <div className="flex">
              <a
                href="#general-question"
                onClick={() => setFormType("general")}
                className={`w-1/2 py-3 sm:text-2xl text-xl border border-b-0 border-gray-300 rounded-tl-lg transition-colors duration-300 ${
                  formType === "general"
                    ? "bg-blue-950 text-white"
                    : "bg-white text-black"
                } block text-center`}
              >
                GENERAL QUESTION
              </a>
              <a
                href="#work-enquiry"
                onClick={() => setFormType("work")}
                className={`w-1/2 py-3 sm:text-2xl text-xl border border-b-0 border-gray-300 rounded-tr-lg transition-colors duration-300 ${
                  formType === "work"
                    ? "bg-blue-950 text-white"
                    : "bg-white text-black"
                } block text-center`}
              >
                WORK ENQUIRY
              </a>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-b-lg p-8 border border-gray-300"
            >
              {renderFormFields()}
              <button
                type="submit"
                className="w-full py-2 bg-blue-950 text-2xl text-white rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Send
              </button>
              {formSubmitted && (
                <div className="mt-8 text-center text-xl text-blue-950">
                  Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
