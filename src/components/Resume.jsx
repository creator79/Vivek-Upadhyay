import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
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
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      
      </motion.p>

  <button 
  onClick={handleResumeClick} 
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-aling-center mx-[70vh] mt-[3vh] mb-[-80vh]"
>
  Resume
</button>

</div>
  );
}

export default SectionWrapper(Resume, "resume");
