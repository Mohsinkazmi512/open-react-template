import React from 'react';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
            <h1 className="h1">Contact Us</h1>
          </div>

        <p className="text-center text-lg mb-6">
          If you have any questions, concerns, or feedback related to our services or this Privacy Policy, please do not hesitate to contact us. We are here to assist you.
        </p>

        <h2 className="text-center text-xl font-semibold mt-4">Reach out via Email:</h2>
        <p className="text-center text-lg">
          You can contact our support team by sending an email to:
        </p>
        <p className="text-center text-lg font-semibold text-purple-600">
          <a href="mailto:support@sparkai.online">support@sparkai.online</a>
        </p>

        <h2 className="text-center text-xl font-semibold mt-4">Visit Us:</h2>
        <p className="text-center text-lg">
          If you prefer in-person interactions, you are welcome to visit our physical location in Islamabad, Pakistan. Here are the details:
        </p>
        <p className="text-center text-lg font-semibold">
          Address:
        </p>
        <p className="text-center text-lg">
          Islamabad, Pakistan 44000
        </p>

        <h2 className="text-center text-xl font-semibold mt-4">Working Hours:</h2>
        <p className="text-center text-lg">
          Our dedicated team is available during the following hours to assist you:
        </p>
        <p className="text-center text-lg">
          <span className="font-semibold">Monday–Friday:</span> 9:00AM–5:00PM
        </p>
        <p className="text-center text-lg">
          <span className="font-semibold">Saturday & Sunday:</span> 11:00AM–3:00PM
        </p>

        <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
              <button className="btn text-white bg-purple-600 hover-bg-purple-700 w-full">
              <Link href="mailto:support@sparkai.online">Contact Us</Link>
                            </button>
              </div>
    </div>
      </div>
    </div>
  );
}
