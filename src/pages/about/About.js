import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

const About = () => {
  const items = ['HTML5', 'CSS3', 'Javascript (ES6)', 'Bootstrap 5', 'MUI', 'React', 'Redux', 'Figma', 'Android Studio', 'Netlify', 'CI/CD', 'Github', 'Next js', 'React Native'];
  return (
    <div className='container'>
      <div>
        <div class="hr-with-text my-4">
          <span class="hr-text about-me-title">About Me</span>
          <hr />
        </div>
        <p className='about-me-text'>Hello! My name is Priyadharshini K  and I enjoy creating things that live on the internet.
          My interest in web development started back when I decided to try editing custom
          web pages — turns out hacking together a custom UI taught me a lot about HTML & CSS!
        </p>
        <p className='about-me-text'>
          I'm deeply fascinated by the intersection of design and technology, and I thrive on the challenge of turning beautiful
          designs into functional and responsive websites. Over the years, I've honed my expertise in HTML, CSS,
          and JavaScript, mastering modern frameworks like React and Vue.js to build dynamic and interactive user
          interfaces.
        </p>
        <p className='about-me-text'>
          <br />
          Let's connect and create something amazing together!</p>
        <div class="hr-with-text my-4">
          <hr />
          <span class="hr-text about-me-title">Skills</span>
        </div>
        <div>
          <ul className="two-column-list arrow-list my-5">
            {items.map((item, index) => (
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

export default About
