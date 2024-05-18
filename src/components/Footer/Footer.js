import React from 'react'
import "./Footer.css"
import { IoMailOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";

const Footer = () => {
    return (
        <div className='container'>
            {/* <div className='w-100'>
                <hr className='hr-tag-footer' />
            </div> */}
            <div className='hr-tag-footer'>
                <h3 className='footer-title my-3'>Contact : </h3>
                <div className='d-flex justify-content-between my-3 footer-content'>
                    <h5><IoMailOutline />priyak2272@gmail.com</h5>
                    <h5><MdOutlineCall />+91 8015967442</h5>
                    <a href="https://github.com/PRIYAK76" target="_blank" rel="noopener noreferrer">
                        <h5>
                            <FaGithub /> PRIYAK76
                        </h5>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
