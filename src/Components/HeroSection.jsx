import React from 'react';
import RemoveBg from '../assets/Vedio/removebg.mp4';
import Example1 from '../assets/img/Example1.jpg';
import Example2 from '../assets/img/Example2.jpg';
import Example3 from '../assets/img/Example3.jpg';
import Example4 from '../assets/img/Example4.jpg';
import Vectors from './Vectors';
import './HeroSection.css';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
export default function HeroSection() {
  const Navigate=useNavigate()
  const UploadPage=()=>{
    Navigate('/Upload')
  }
  return (
    <>
<Navbar/>
    
    <div className="w-full h-screen flex flex-col lg:flex-row">
      <div className="flex items-center justify-center w-full lg:w-1/2 px-4 lg:px-0">
        <div className="flex flex-col items-center lg:items-start lg:ml-48 min-[220px]:mt-40 md:mt-40 lg:mt-20">
          <video className="rounded-3xl w-full lg:w-3/4 h-auto mb-6" loop autoPlay muted>
            <source src={RemoveBg} type="video/mp4" />
          </video>
          <h1 className="text-stone-700 mt-5 font-bold text-3xl md:text-5xl lg:text-6xl tracking-wider text-center lg:text-left">
            Remove Image <br /> Background
          </h1>
          <span className="text-gray-900 mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-center lg:text-left">
            100% Automatically and{' '}
            <span className="rounded-full px-4 py-1 text-lg bg-free">Free</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 px-4 lg:px-0 relative">
        {/* Vectors Section */}
        <div className="absolute ml-10 overflow-hidden w-40 h-40 max-[1008px]:hidden lg:w-54 lg:h-64" style={{left:'70%',top:"18%"}}>
          <Vectors />
        </div>

        {/* Upload Section */}
        <div className="bg-white w-full h-80 lg:w-2/3 p-6 lg:p-8 shadow-lg rounded-2xl flex flex-col items-center mt-40 lg:ml-20"
          style={{ boxShadow: '2px 3px 61px -25px rgba(0,0,0,0.52)', borderRadius: "45px" }}>
          <button  onClick={UploadPage} className="bg-blue-500 mt-20 hover:bg-blue-600 text-white font-semibold py-3 px-8 text-lg lg:text-xl rounded-3xl" >
            Upload Image
          </button>
          <p className="mt-4 text-gray-600 font-semibold text-lg lg:text-2xl">or drop a file</p>
          <span className="text-sm mt-2 text-gray-600">
            paste image or <a href="#" className="text-blue-500 underline">URL</a>
          </span>
        </div>

        {/* Example Images */}
        <div className="flex flex-col lg:flex-row lg:items-start items-center mt-10 lg:ml-20 min-[200px]:items-start space-y-4 lg:space-y-0">
          <p className="text-gray-600 text-center lg:text-left font-semibold mt-2">
            No Image?<br /> Try one of these:
          </p>
          <div className="img flex justify-around space-x-4 mt-4 lg:mt-0 " style={{ width: "30%", height: '10vh' }}>
            <img src={Example1} style={{ width: "100%", height: '100%', objectFit: 'cover' }} alt="Example" className="rounded-md w-16 h-16 lg:w-16 lg:h-20 hover:opacity-55 cursor-pointer" />
            <img src={Example2} style={{ width: "100%", height: '100%', objectFit: 'cover' }} alt="Example" className="rounded-md w-16 h-16 lg:w-16 lg:h-20 hover:opacity-55 " />
            <img src={Example3} style={{ width: "100%", height: '100%', objectFit: 'cover' }} alt="Example" className="rounded-md w-16 h-16 lg:w-16 lg:h-20 hover:opacity-55 " />
            <img src={Example4} style={{ width: "100%", height: '100%', objectFit: 'cover' }} alt="Example" className="rounded-md w-16 h-16 lg:w-16 lg:h-20 hover:opacity-55 " />
          </div>
        </div>
          <p className="sm:text-sm text-gray-400  lg:ml-20  font-semibold text-start mt-4" style={{fontSize:'11px'}}>
          By uploading an image or URL you agree to our{' '}
          <span className="underline">Terms of Service</span>. To learn more about how<br/>
          remove.bg handles your personal data, check our{' '}
          <span className="underline">Policy</span>.
        </p>
      </div>
    </div>
    </>
  );
}
