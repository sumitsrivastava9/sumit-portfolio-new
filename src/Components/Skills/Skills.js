import "./Skills.css"

import { useEffect } from "react"

import Aos from 'aos'
import "aos/dist/aos.css"
function Skills() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    const skillsData = [
        "C++","Data Structures and Algorithms","HTML", "CSS", "Javascript", "TypeScript","Redux","React-query","Tailwind", "ReactJS", "Node.JS", "MognoDB", "CS fundamentals"
    ]


    return (
        <>
            <div className="parent__service">
                <div id="skill">
                    <div className="service__heading" data-aos="fade-up">
                        <p>Tech Stack</p>
                        <h1>Technologies that I use</h1>
                    </div>

                    <div className="service__parent__box">
                        <div className="item__box">
                            {skillsData.map((skil, index) => (
                                <div className="skill__item" key={index} data-aos="fade-up" >
                                    <h4>{skil}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;