import React from 'react'
import { Icon } from '@iconify/react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sid</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
                <li>
                    <a href="#portfolio" className='footer__link'>Projects</a>
                </li>
                
            </ul>


            <div className="footer__social">

            <a href="https://leetcode.com/siddhant1999dixit1999/" className="footer__social-icon" target="_blank">  <Icon icon="simple-icons:leetcode" /></a>

            <a href="https://www.linkedin.com/in/siddhant-dixit-18397a213/" className="footer__social-icon" target="_blank"><i class="uil uil-linkedin"></i> </a>
            <a href="https://github.com/Crazysniperr" className="footer__social-icon" target="_blank"><i class="uil uil-github-alt"></i>
            </a>

            <a href="https://www.instagram.com/" className="footer__social-icon" target="_blank"> <Icon icon="bi:instagram" /></a>
            </div>
            <span className="footer__copy">&#169; SiddhantDixit. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer