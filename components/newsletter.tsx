import React, { useState, useEffect } from 'react';


export default function Newsletter() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    var db = require('../firebase-config.js')
    // Fetch data from the "users" collection (no specific document ID)
    const fetchData = async () => {
      try {
        const querySnapshot = await db.collection('users').get();
        // Get the number of documents in the "users" collection
        const count = querySnapshot.size;
        setTotalUsers(count);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, []);

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
              <h3 className="h3 text-black mb-2">Total Worldwide Users of Spark AI...!</h3>
              <p className="text-black text-lg">Spark-AI app Users since September 1, 2023</p>
            </div>
            {/* CTA form displaying the total users */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <a className="btn text-black bg-purple-100 hover:bg-white shadow" href="#0">{totalUsers}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



