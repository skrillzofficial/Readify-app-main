import React from "react";
import aboutImage from "../assets/about.jpeg";
// create the about page here

const AboutPage = () => {
  return (
    <div className=" flex flex-col md:flex-row w-11/12 container mx-auto px-1 gap-9">
      <div className="w-full py-10 md:w-[50%] px-1">
        <img className="h-120 w-full rounded-sm" src={aboutImage} alt="" />
      </div>
      <div className="w-full md:w-[50%] px-2 flex flex-col justify-center items-center md:flex gap-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl font-semibold">About us</h1>
          <hr className="w-25 border-t-4 border-orange-400" />
          <p className="mt-8 leading-8 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae consectetur blanditiis mollitia inventore dolorum aliquam quia veritatis velit dolores et alias, ab ad quasi assumenda labore laborum eaque minima delectus porro soluta optio consequatur voluptatem maiores. Necessitatibus, unde doloremque?
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl font-semibold">Our Vision</h1>
          <hr className="w-25 border-t-4 border-orange-400" />
          <p className="mt-8 leading-8 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis incidunt corporis laborum facere id adipisci cupiditate velit labore. Fugiat, incidunt, saepe placeat atque praesentium ipsa temporibus molestias id dolorum minus, ex impedit consequatur eveniet. Illo quia fuga voluptatibus quae optio saepe rerum, quibusdam pariatur error itaque, atque facilis ullam at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
