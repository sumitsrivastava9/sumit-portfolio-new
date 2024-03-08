

import React from 'react'
import './Footer.css'

import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillBehanceSquare, AiFillTwitterSquare, AiFillTwitterCircle } from 'react-icons/ai'

function Footer() {
    return (
        <>
            <footer>
                <div className="footer__main__parent">
                    <div className="footer__top">
                        <div className="footer__left">
                            <h1>Portfolio.</h1>
                            <p>
                                First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice. ―Octavia Butler
                            </p>
                        </div>

                        <div className="footer__right">
                            <a href="https://www.instagram.com/sumit__srivastavaa/" target="_blank" ><AiFillInstagram /></a>
                            <a href="https://github.com/sumitsrivastava9" target="_blank"><AiFillGithub /></a>
                            <a href="https://www.linkedin.com/in/sumit-kumar-009/" target="_blank"><AiFillLinkedin /></a>
                            <a href="https://twitter.com/the__sumitverma" target="_blank"><AiFillTwitterCircle /></a>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <p> &copy; Copyright Portfolio 2024</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer