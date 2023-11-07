"use client";
import React from 'react';

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA box */}
        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
          {/* Background illustration */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            <svg width="238" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Your SVG path data */}
            </svg>
          </div>
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-black mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-black text-lg">Stay updated with the latest news and updates from Spark AI.</p>
            </div>
            {/* Newsletter signup form */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm.max-w-md lg.max-w-none">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-white text-black rounded-l sm:rounded-l-none sm:rounded-r px-4 py-2 sm:py-4 w-full sm:w-auto focus:outline-none"
                />
                <button className="btn text-black bg-purple-100 hover:bg-white rounded-r sm:rounded-l-none sm:rounded-r shadow" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
