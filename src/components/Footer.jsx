import React from 'react'
import ImgGmail from "../images/Google64x64.png"
import ImgLinked from "../images/Linkedin64x64.png"


const Footer = () => {
  return (
    
    <div className="footer" id="contact">
        
        <div className="">
            
            <div className="footer-text">
                <h2>Fernando Bello Fuentes</h2>
                <p className="text-white text1 md:text-2xl text-base">Cellphone: +526461979027</p>
                <p className="text-white text1 md:text-2xl text-base" >email: fernandojbf123@gmail.com</p>
            </div>

            <div className="">
                <div className='social-media'>
                    <a href = "mailto:fernandojbf123@gmail.com"><img src={ImgGmail} alt="emailtofernando" id="gmail"/></a>
                    <a href="https://www.linkedin.com/in/fernando-bello-6b5160250/"><img src={ImgLinked} alt="Linkedin" id="linkedin"/></a>
                </div>
            </div>
        </div>

    </div>

  )
}

export default Footer
