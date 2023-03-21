import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

function Resume() {
  const resumeLink =
    "https://drive.google.com/file/d/1oWUmiVPp3xhAoEdc-6LRozZrrEadk8AT/view?usp=sharing";

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(resumeLink, "_blank");
  };

  return (
   <div class ="aling-content-center">

   <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      Welcome to my portfolio website! If you're here, it's likely that you're interested in learning more about me and my skills. If you want to take a closer look at my professional experience, click on the <strong>"Resume"</strong> button below. Get ready to be impressed with my expertise in various fields such as project management, content creation, and social media strategy. My resume highlights my achievements, education, and work history, demonstrating my dedication to excellence and my commitment to delivering high-quality work. Don't miss out on the chance to see my impressive resume and learn more about what I can bring to your team. Click that button now!
      
      </motion.p>
     

  <button 
  onClick={handleResumeClick} 
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded text-center mx-auto md:mx-[50vh] mt-6 xl:mt-[3vh] mb-[-80vh] md:mb-0 xl:mb-0 hover:shadow-blue" 
  


>
  Resume
</button>

</div>
  );
}

export default SectionWrapper(Resume, "resume");
