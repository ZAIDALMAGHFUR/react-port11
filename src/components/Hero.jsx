import React from "react";
import hero from "../assets/images/Group o.png";
// import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

// const compressImage = async (uri, format = SaveFormat.JPEG) => {
//   SaveFormat.PNG
//   const result = await manipulateAsync(
//     uri,
//     [{ resize: { width: 1200 } }],
//     { compress: 0.7, format }
//   );

//   return { name: `${Date.now()}.${format}`, type: `image/${format}`, ...result };
//   // return: { name, type, width, height, uri }
// };
const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover " />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Zaid Al MAghfur</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Senior Developer
          </h4>
          <button type="button" className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4">View Portfolio</button>
          <button type="button" className="border border-lime-50 text-white bg-blue-700 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download CV</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div key={icon} className="text-gray-600 hover:text-white cursor-pointer " >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
