import React from 'react'

const Contact = () => {
  return (
    <div className='container my-5'>
      <div>
        <h1 className='contact-title my-3'>Let's Get In Touch</h1>
        <p className='contact-sub-title my-2'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
          visions. If you have any questions, want to collaborate, or just want to say hello, feel free to
          reach out to me through any of the channels below. I look forward to connecting with you!
        </p>
        <div className='d-grid gap-2 col-2 mx-auto my-3'>
          <a href="mailto:priyak2272@gmail.com?subject=Hello&body=Hi there, I would like to talk about..." class="mail-btn">
            <button className='contact-btn'>Reach Me</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
