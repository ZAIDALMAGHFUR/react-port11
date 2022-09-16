import React from "react";
import aboutImg from "../assets/images/317755_badge_html_html5_achievement_award_icon.png";
import aboutImg1 from "../assets/images/317756_badge_css_css3_achievement_award_icon.png";
import aboutImg2 from "../assets/images/1012812_code_development_logo_php_icon.png";
import aboutImg3 from "../assets/images/1012821_code_development_logo_mysql_icon.png";
import aboutImg4 from "../assets/images/9073628_tailwind_icon.png";
import aboutImg5 from "../assets/images/308435_boostrap_front-end_long shadow_preprocessor_web_icon.png";
import aboutImg6 from "../assets/images/7423888_react_react native_icon.png";
import aboutImg7 from "../assets/images/7564187_figma_logo_brand_icon.png";
import aboutImg8 from "../assets/images/4373213_js_logo_logos_icon.png";
import aboutImg9 from "../assets/images/next-js-logo-8FCFF51DD2-seeklogo.com.png";

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gray-900 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">I Use Woork</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          <img src={aboutImg} alt="" className="h-28" />
          <img src={aboutImg1} alt="" className="h-28" />
          <img src={aboutImg2} alt="" className="h-28" />
          <img src={aboutImg3} alt="" className="h-28" />
          <img src={aboutImg4} alt="" className="h-28" />
          <img src={aboutImg5} alt="" className="h-28" />
          <img src={aboutImg6} alt="" className="h-28" />
          <img src={aboutImg7} alt="" className="h-28" />
          <img src={aboutImg8} alt="" className="h-28" />
          <img src={aboutImg9} alt="" className="h-28" />
        </div>
      </div>
    </section >
  );
};

export default Skills;

