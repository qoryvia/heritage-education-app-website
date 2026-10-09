"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import { contactDetailsData } from "../data/contact.data";

const inputClassName =
  "w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10";

const labelClassName =
  "mb-2 block text-sm font-medium text-slate-700";

export default function ContactDetails() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !phone || !email || !message) {
      setStatus("Please complete all required fields.");
      return;
    }

    const subject = encodeURIComponent(
      `Website Contact Enquiry - ${name}`,
    );

    const body = encodeURIComponent(
      `Contact Enquiry\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`,
    );

    setStatus(
      "Your email application will open with your enquiry prefilled. Please review and send the email.",
    );

    window.location.href =
      `mailto:${contactDetailsData.email.value}` +
      `?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact-details"
      aria-labelledby="contact-details-heading"
      className="bg-white"
    >
      <div className="px-6 py-12 sm:py-16 xl:px-40">
        {/* Section heading */}
        <div className="mb-9 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#002147] sm:text-sm">
            Contact Our School
          </p>

          <h2
            id="contact-details-heading"
            className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Get in Touch
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Have questions about admissions or our school? Contact
            our team directly or send us your enquiry using the form.
          </p>
        </div>

        {/* Aligned two-column layout */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
          {/* Left: Contact information */}
          <div className="min-w-0">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-slate-900">
                School Contact Information
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Reach Heritage International Public School using any
                of the contact options below.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Unified phone card */}
              <article className="rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-[#002147]/40 sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[#002147]">
                    <FiPhone aria-hidden="true" size={19} />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      Phone Numbers
                    </h4>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Contact our school directly
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 border-t border-slate-100 pt-4 sm:grid-cols-3 sm:gap-4">
                  {contactDetailsData.phones.map((phone, index) => (
                    <div
                      key={phone.href}
                      className="min-w-0"
                    >
                      <p className="mb-1 text-xs text-slate-500">
                        Phone {index + 1}
                      </p>

                      <a
                        href={phone.href}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition-colors hover:text-[#002147]"
                      >
                        <span>{phone.number}</span>

                        <FiArrowUpRight
                          aria-hidden="true"
                          className="shrink-0"
                          size={14}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </article>

              {/* Address card */}
              <article className="flex min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-[#002147]/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-[#002147]">
                  <FiMapPin aria-hidden="true" size={19} />
                </div>

                <h4 className="mt-4 text-sm font-semibold text-slate-900">
                  {contactDetailsData.address.label}
                </h4>

                <a
                  href={contactDetailsData.address.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-start gap-1 text-sm leading-6 text-slate-600 transition-colors hover:text-[#002147]"
                >
                  <span>{contactDetailsData.address.value}</span>

                  <FiArrowUpRight
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                    size={15}
                  />
                </a>
              </article>

              {/* Email card */}
              <article className="flex min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-[#002147]/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-[#002147]">
                  <FiMail aria-hidden="true" size={19} />
                </div>

                <h4 className="mt-4 text-sm font-semibold text-slate-900">
                  {contactDetailsData.email.label}
                </h4>

                <a
                  href={contactDetailsData.email.href}
                  className="mt-2 inline-flex items-start gap-1 break-all text-sm leading-6 text-slate-600 transition-colors hover:text-[#002147]"
                >
                  <span>{contactDetailsData.email.value}</span>

                  <FiArrowUpRight
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                    size={15}
                  />
                </a>
              </article>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-7 lg:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Send Us a Message
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fill out the form below and tell us how we can help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className={labelClassName}
                >
                  Full Name <span className="text-red-600">*</span>
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className={inputClassName}
                  minLength={2}
                  maxLength={100}
                  required
                />
              </div>

              {/* Phone and email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label
                    htmlFor="contact-phone"
                    className={labelClassName}
                  >
                    Phone Number{" "}
                    <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+91 9876543210"
                    className={inputClassName}
                    pattern="[+0-9() -]{7,20}"
                    title="Enter a valid phone number using digits and optional +, spaces, parentheses, or hyphens."
                    maxLength={20}
                    required
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="contact-email"
                    className={labelClassName}
                  >
                    Email Address{" "}
                    <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClassName}
                    maxLength={254}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className={labelClassName}
                >
                  Your Message{" "}
                  <span className="text-red-600">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="How can we help you?"
                  className={`${inputClassName} min-h-32 resize-y`}
                  minLength={10}
                  maxLength={3000}
                  required
                />

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Please provide at least 10 characters.
                </p>
              </div>

              {/* Form status */}
              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-2 rounded-md border border-slate-200 bg-white p-3 text-sm leading-6 text-slate-700"
                >
                  <FiCheckCircle
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#002147]"
                    size={17}
                  />

                  <p>{status}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#002147] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#003566] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002147] focus-visible:ring-offset-2"
              >
                Send Enquiry
                <FiSend aria-hidden="true" size={17} />
              </button>

              <p className="text-xs leading-5 text-slate-500">
                Your enquiry will open in your default email
                application. Review the details and press Send to
                email the school.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}