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
            <h3>I'm a software developer! </h3>
            <p>
              I can help you build a product, feature or website look through
              some of my work and experience. If you like what you see and have
              a project you need coded, don't hesitate to contact me.
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
