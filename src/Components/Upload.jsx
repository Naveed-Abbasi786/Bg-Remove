import React, { useRef, useState } from 'react';
import Example1 from '../assets/img/Example1.jpg';
import Example2 from '../assets/img/Example2.jpg';
import Example3 from '../assets/img/Example3.jpg';
import Example4 from '../assets/img/Example4.jpg';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Remove from './Remove';

export default function Upload(props) {
  const [showRemove, setShowRemove] = useState(false); 
  const [selectedFile, setSelectedFile] = useState(null); 

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const Uploadimg = (e) => {
    fileInputRef.current.click();
  };

  const fileChange = (e) => {
    const file = e.target.files[0]; 

    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file); 
      setShowRemove(true); 
    } else {

      alert('Please upload a valid image file.'); 
      setShowRemove(false); 
    }
  };

  return (
    <>
      {showRemove ? (
        <Remove file={selectedFile} />
      ) : (
        <>
          <Navbar />
          <div className="relative flex-col w-full h-full flex justify-center lg:justify-center">
            {/* Icon */}
            <div className="absolute lg:left-[65%] lg:top-[20%] flex justify-center inset-x-0 top-1/4 max-[988px]:top-[20%]">
              <svg
                width="36"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-yellow-400"
              >
              </svg>
            </div>

            {/* Heading */}
            <h1 className="text-gray-700 w-full mt-40 sm:mt-40 font-bold text-2xl sm:text-3xl lg:text-4xl tracking-wide text-center">
              Upload an image to <br /> Remove the Background
            </h1>

            {/* Upload Button */}
            <div className="flex flex-col items-center p-6 sm:p-10 rounded-2xl">
              <button
                style={{ backgroundColor: '#427DFF' }}
                onClick={Uploadimg}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 sm:px-8 text-lg sm:text-xl lg:text-2xl rounded-full"
              >
                Upload Image
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }} // Hide the actual file input
                onChange={fileChange} // Display selected file in console
              />
              <p className="mt-4 text-gray-600 font-semibold text-sm sm:text-md lg:text-lg">
                or drop a file
              </p>
              <span className="text-xs sm:text-sm mt-3 sm:mt-5 text-gray-600">
                paste image or{' '}
                <a href="#" className="text-gray-600 underline">
                  URL
                </a>
              </span>
            </div>

            {/* Example Images */}
            <div className="space-y-4 lg:space-y-2 lg:space-x-4">
              <p className="font-bold text-center py-2 sm:py-4" style={{ color: '#7A7A7A' }}>
                No image? Try one of these:
              </p>

              {/* Center the images */}
              <div className="flex space-x-2 justify-center">
                {[Example1, Example2, Example3, Example4].map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    className="rounded-md w-12 h-10 sm:w-16 sm:h-14 object-cover cursor-pointer hover:opacity-75 transition-opacity"
                    alt={`Example ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Footer */}
            <p className="text-xs sm:text-sm text-gray-400 font-semibold text-center mt-4" style={{ fontSize: '11px' }}>
              By uploading an image or URL you agree to our{' '}
              <span className="underline">Terms of Service</span>. To learn more about how<br />
              remove.bg handles your personal data, check our{' '}
              <span className="underline">Policy</span>.
            </p>
          </div>
        </>
      )}
    </>
  );
}
