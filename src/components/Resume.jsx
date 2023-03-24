import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import css from "../Resume.css";

function Resume() {
  const resumeLink =
    "https://drive.google.com/file/d/1oWUmiVPp3xhAoEdc-6LRozZrrEadk8AT/view?usp=sharing";

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(resumeLink, "_blank");
  };

  return (
   <div >

   <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        <p className={styles.sectionSubText}>Resume</p>
       <p className="mt-3">
      Welcome to my portfolio website! If you're here, it's likely that you're interested in learning more about me and my skills. If you want to take a closer look at my professional experience, click on the <strong>"Resume"</strong> button below. Get ready to be impressed with my expertise in various fields such as project management, content creation, and social media strategy. My resume highlights my achievements, education, and work history, demonstrating my dedication to excellence and my commitment to delivering high-quality work. Don't miss out on the chance to see my impressive resume and learn more about what I can bring to your team. Click that button now!
      </p>
      
      </motion.p>
     
<div className="css">
      <div className="card">
      
        <button className ="card2" onClick={handleResumeClick}> Download </button>
      </div>

      </div>

</div>
  );
}

export default SectionWrapper(Resume, "resume");
