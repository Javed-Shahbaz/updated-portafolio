/* eslint-disable react/jsx-no-target-blank */
import "../styles/contact.css";
// import { useNavigate } from 'react-router-dom';
import "boxicons";

const Contact = () => {
  // const navigateTo = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   navigateTo('/thanks');
  // };

  return (
    <section id="contact-me" className="contact-me">
      <div className="contact">
        <div className="contact-container">
          <div className="mask"></div>

          <div className="contact-title">
            <h2 className="h2-contact">Contact me</h2>

            <div className="contact-log-container">
              <div className="home-sci contact-logos">
                <a href="https://github.com/Javed-shahbaz" target="_blank">
                  <box-icon
                    name="github"
                    type="logo"
                    className="logo"
                  ></box-icon>
                </a>
                <a
                  href="https://www.linkedin.com/in/Javedshahbaz/"
                  target="_blank"
                >
                  <box-icon
                    name="linkedin"
                    type="logo"
                    className="logo"
                  ></box-icon>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+923007939095&text=Hello.%20Looking%20forward%20to%20your%20response%20and%20the%20possibility%20of%20working%20together.%20%20Best%20regards"
                  target="_blank"
                >
                  <box-icon type="logo" name="whatsapp"></box-icon>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <div className="container">
              <div className="text">Email Contact Form</div>

              <form
                action="https://formsubmit.co/fe992ae1cef1465a70272f3acd11c5ca"
                method="POST"
              >
                <div className="form-row">
                  <div className="input-data">
                    <input type="text" name="firstName" required />
                    <div className="underline"></div>
                    <label htmlFor="">First Name</label>
                  </div>
                  <div className="input-data">
                    <input type="text" required name="lastName" />
                    <div className="underline"></div>
                    <label htmlFor="">Last Name</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-data">
                    <input type="email" name="email" required />
                    <div className="underline"></div>
                    <label htmlFor="">Email</label>
                  </div>
                  <div className="input-data">
                    <input type="text" name="motivation" required />
                    <div className="underline"></div>
                    <label htmlFor="">Contact Purpose</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-data textarea">
                    <textarea
                      rows="8"
                      cols="80"
                      required
                      name="message"
                    ></textarea>
                    <br />
                    <div className="underline"></div>
                    <label htmlFor="">Your Message</label>
                    <br />
                    <div className="form-row submit-btn">
                      <div className="input-data">
                        <div className="inner"></div>
                        <input type="submit" value="Submit" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <input type="hidden" name="_next" value="/thanks" />  */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
