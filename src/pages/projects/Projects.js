import React from 'react'
import Data from "./../../data/ProjectsDetails.json"
import { IoMdArrowDropright } from "react-icons/io";

const Projects = () => {
  return (
    <div className='container'>
      <div>
        {Data.map((proj) => (
          <div>
            <div class="hr-with-text my-4">
              <span class="hr-text1 about-me-title"> {proj.ProjectName}</span>
              <hr />
            </div>
            <p><ul className="one-column-list arrow-list my-5">
              {proj.Details.map((item, index) => (
                <li key={index} className='list-projects'>
                  <IoMdArrowDropright color='#5f9ea0' size={24} />
                  {item}
                </li>
              ))}
            </ul></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
