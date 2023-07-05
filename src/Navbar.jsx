import React, { useState } from 'react';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetQuote = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <nav>
      <div className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 p-6 flex flex-row bg-white-500 justify-between place-items-center">
        <div className="text-3xl ml-20 p-2 tracking-widest">
          <h1>LIVSPACE</h1>
        </div>
        <div className="p-3 pl-8 pr-10 rounded-full bg-red-500 hover:bg-red-700 mr-10">
          <button className="button-text-color" onClick={handleGetQuote}>
            <strong>GET FREE QUOTE</strong>
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-end">
              <button className="text-gray-500" onClick={closePopup}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4 text-center">
              <p>Choose a contact method:</p>
              <div className="flex justify-center mt-4">
                <a
                  href="https://api.whatsapp.com/send?phone=917010826441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 text-blue-500 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.477 0 10c0 4.163 2.703 7.684 6.444 8.928L6.22 20.78a.944.944 0 0 0 1.207-.285l1.734-2.162a.944.944 0 0 1 1.401-.041l2.762 2.41c.534.46 1.287.378 1.739-.177l3.873-4.467C17.314 17.686 20 14.233 20 10c0-5.523-4.477-10-10-10zm5.382 15.192l-3.873 4.467a5.48 5.48 0 0 1-4.964 1.55l-2.762-2.41a.944.944 0 0 0-1.402.041l-1.734 2.162a.944.944 0 0 1-1.207.285l2.692-3.342a7.478 7.478 0 0 0-2.22-2.844L.76 9.976A7.416 7.416 0 0 0 0 10c0 4.114 3.343 7.457 7.457 7.457.794 0 1.565-.12 2.302-.348l2.93 2.552a.944.944 0 0 0 1.401-.04l3.873-4.468a7.44 7.44 0 0 0 2.408-5.603c0-.15-.003-.301-.009-.45l2.725-3.375a.944.944 0 0 0-1.284-1.358z"
                      clipRule="evenodd"
                    />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:example@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Gmail
                </a>
              </div>
              <p className="mt-2">Phone: +91 7010826441</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
