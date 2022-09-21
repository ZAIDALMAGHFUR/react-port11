import React from "react";
import aboutImg from "../assets/images/Component 3.png";
const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laboriosam animi. Nihil, inventore? Mollitia nesciunt expedita ullam inventore quae nam iusto asperiores nihil obcaecati quaerat soluta quibusdam eius, aperiam, nisi quidem optio. Eum ea voluptas cumque illo natus, blanditiis cupiditate itaque eos perspiciatis, doloremque soluta. Voluptatem aut ad quis iusto necessitatibus? In, tenetur blanditiis voluptatum nemo ut recusandae atque voluptates laborum provident! Rerum quisquam perferendis at et unde adipisci provident vitae odio consectetur ipsa deleniti cupiditate dolorem animi voluptatibus cumque corrupti corporis fuga obcaecati, voluptas non? Laborum ducimus voluptas modi officiis quaerat. At sint dicta dolores dolorum rerum culpa alias?
              </p>
              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary border border-white hover:bg-cyan-400">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 ">
              <img src={aboutImg} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
