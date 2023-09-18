import React, { useRef, useState }  from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kl0iwhp', 'template_a4gt7u5', form.current, 'DYevFVq6i8ysuJ0hE')
      .then((result) => {
        setEmailSent(true);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <section id="contact" className="contact">
      <form ref={form} onSubmit={sendEmail}>
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      {
        emailSent ? 
      <div className="thank
      " ><h1 >Thank you submitting the  form</h1></div> :
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"email"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button type="submit" value="send">Submit</button>
          </div>
        </Animate>
      </div>
      }
      </form>
    </section>
  );
};
export default Contact;
