import * as React from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const Experience = () => {
  const points = ["Developed responsive and visually appealing web applications using HTML, CSS, and JavaScript.",
    "Implemented Bootstrap framework to ensure cross-browser compatibility and mobile responsiveness.",
    "Utilized React.js and Redux for state management and building interactive user interfaces.",
    "Conducted code reviews and implemented best practices to ensure code quality and maintainability."]

  return (
    <div className='container'>
      <div>
        <div class="hr-with-text my-4">
          <span class="hr-text1 about-me-title">Where I have Worked</span>
          <hr />
        </div>
        <h1 className='experience-main-title'>Software Developer
          <a href="https://www.linkedin.com/in/priyadharshini-krishnakumar-122883227/" target="_blank" rel="noopener noreferrer">
            <span style={{ color: "#64FFda" }}> &nbsp;@RiverWorld Technologies</span>
          </a></h1>
        <p className='about-me-text'>May 2023 - present
        </p>

        <div>
          <ul className="one-column-list arrow-list my-5">
            {points.map((item, index) => (
              <li key={index}>
                <IoMdArrowDropright color='#5f9ea0' size={24} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
