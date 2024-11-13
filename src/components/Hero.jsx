/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import "../styles/hero.css";
import "boxicons";
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <>
      <section id="home-sec">
        <div className="home">
          <div className="home-content">
            <h1>Hi I'm Javed</h1>
            <h3>I'm a Full-Stack & AI developer! </h3>
            <p>
              I am a versatile Full-Stack Web Developer as well as Artificial
              Intelligenece Developer with over 22 years of combined experience
              in technology and education. My journey spans 20 years in
              teaching, where I fostered a passion for scientific thinking and
              problem-solving, and 2+ years in freelance web development, where
              I bring ideas to life with ReactJS, Ruby on Rails, PostgreSQL, and
              Python. In my recent role as a full-stack developer and mentor,
              I’ve built over 10 scalable, user-focused applications and guided
              junior developers, focusing on clean code and efficient solutions.
              My hands-on expertise in JavaScript, machine learning, and data
              analysis, along with a strong foundation in computer science,
              equips me to drive impactful, modern solutions. I’m passionate
              about continuous learning and collaboration, always eager to work
              with diverse teams to solve challenges and push technology
              boundaries. Let’s connect to explore how my skills can bring value
              to your next project or initiative!
            </p>
            <div className="btn-box">
              <a href="#contact-me" onClick={() => scrollToSection("projects")}>
                Contact me
              </a>
            </div>
          </div>
          <div className="img-profile">
            <img src="../../professional.png" alt="profile" />
          </div>

          <div className="home-sci">
            <a href="https://twitter.com/Javedshahbaz" target="_blank">
              <box-icon name="twitter" type="logo" className="logo"></box-icon>
            </a>
            <a href="https://github.com/Javed-Shahbaz" target="_blank">
              <box-icon name="github" type="logo" className="logo"></box-icon>
            </a>
            <a href="https://www.linkedin.com/in/Javedshahbaz/" target="_blank">
              <box-icon name="linkedin" type="logo" className="logo"></box-icon>
            </a>
          </div>
          <div className="home-background"></div>
        </div>
      </section>
    </>
  );
};
export default Hero;
