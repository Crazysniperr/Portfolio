
import star from "../../assets/emoji1.png"
import "./contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Love from "../../assets/in-love.png"
import message from "../../assets/message.png"


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ii88mlm', 'template_m1kq31k', form.current, 'twcjSOHD_bwXUKvR4')
        e.target.reset()
    };



  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">dixitsiddhant30@gmail.com</span>

                        <a href="mailto:dixitsiddhant30@gmail.com" target="_blank" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">+91-8317072134</span>

                        <a href=" https://wa.me/918317072134" target="_blank" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    {/* <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>
                        <h3 className="contact__card-title"></h3>
                        <span className="contact__card-data"></span>

                        <a href="" className="contact__button">Write me <i className="bx bx right-arrow-alt contact__button-icon"></i></a>
                    </div> */}
                </div>
            </div>


            <div className="contact__content">
                <h3 className="contact__title">Any Suggestion or Querries?</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="name" name="name" className="contact__form-input" placeholder="Insert your Name" />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Meassage</label>
                        <textarea name="message" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
                    </div>

                    <button className="button button--flex">
            Send Message
            <img src={star} alt="" className="star first" />
            <img src={Love} alt="" className="star alt" /></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact