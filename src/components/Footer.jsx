import React from "react";

const Footer = () => {
  // do your footer here
  return (
    <div className='w-11/12 container mx-auto'>
      <footer className="bg-wheat text-black">
        <div className="flex md:flex-row justify-center items-center text-2xl bg-black text-white py-5">
          <p>
            &copy; <span className="italic text-orange-300">Readify</span> All
            rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
