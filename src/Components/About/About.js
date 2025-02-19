import "./About.css";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  const [experience, setExperience] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const dateCalculation = () => {
      const currentDate = new Date();
      const startDate = new Date("2023-10-09");

      let years = currentDate.getFullYear() - startDate.getFullYear();
      let months = currentDate.getMonth() - startDate.getMonth();
      let days = currentDate.getDate() - startDate.getDate();

      // Adjust negative values
      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate(); // Add previous month's days
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      return { years, months, days };
    };

    setExperience(dateCalculation());
  }, []);

  return (
    <div className="parent__about">
      <div id="about">
        <div className="heading" data-aos="fade-up">
          <p>Hello There</p>
          <h1>I'm Sumit Kumar</h1>
        </div>
        <div className="about__content" data-aos="fade-up">
          <p>
            {`Hello! I'm a Software Engineer with experience in Frontend development. 
            In ${experience.years} years, ${experience.months + 1} months, and ${experience.days} days 
            at Studio Graphene, I contribute to projects like PULSE—an internal monitoring tool. 
            Holding a Bachelor's in Technology from Gurukula Kangri University, I showcase practical 
            applications of my skills in impactful projects over 2 years in Software Development. 
            Eager to connect for collaborative opportunities.`}
          </p>
        </div>

        <div className="about__boxes">
          <div className="box" data-aos="fade-up">
            <h1>
              <CountUp start={0} end={5} duration={1} />
            </h1>
            <p>Awards Received</p>
          </div>
          <div className="box" data-aos="fade-up">
            <h1>
              <CountUp start={0} end={10} duration={1} />
            </h1>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
