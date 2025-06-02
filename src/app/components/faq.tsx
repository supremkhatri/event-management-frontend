"use client";

import React from "react";

const FAQS = [
  {
    title: "1. How do I register for the event?",
    desc: "You can register for the event by visiting our registration page. Follow the simple steps to complete your registration and secure your spot.",
  },
  {
    title: "2. What are the event fees, and what is included?",
    desc: "The event fee includes access to all sessions, materials, and complimentary refreshments. Please refer to the registration page for the exact fee and details.",
  },
  {
    title: "3. Can I get a refund if I need to cancel my registration?",
    desc: "Refunds are available up to 7 days before the event date. Please contact our support team to process your refund request.",
  },
  {
    title: "4. Will there be on-site registration available?",
    desc: "On-site registration is subject to availability. We recommend registering online in advance to secure your spot.",
  },
  {
    title: "5. What should I bring to the event?",
    desc: "Please bring any required materials as mentioned in the event details. A notebook and pen for taking notes are also recommended. We will provide all other materials.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-blue-gray-700">
            Frequently asked questions
          </h1>
          <p className="mx-auto mb-24 text-lg text-gray-500 lg:w-3/5">
            Welcome to the FAQ section. We&apos;re here to address your most
            common queries and provide you with the information you need to
            make the most of your experience.
          </p>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <div key={key} className="mb-4 border-b pb-4">
              <button
                className="w-full text-left text-gray-300 font-medium"
                onClick={() => handleOpen(key + 1)}
              >
                {title}
              </button>
              {open === key + 1 && (
                <p className="mt-2 text-gray-500">{desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
