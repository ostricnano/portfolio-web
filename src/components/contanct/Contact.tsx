import "./Contact.css"
import { IoLogoVercel } from "react-icons/io5";

export const Contact = () => {
  return (
    <section className="about-block">
      <div className="image-container">
        <img className="image" src="./images/profile-picture.png"  />
      </div>
      <h5 className="title">CONTACT</h5>
      <div className="contact-info">
        <i className="fa-solid fa-phone icon"></i>
        <p>(+54) 9 11 6523-4000</p>
      </div>
      <div className="contact-info">
        <i className="fa-regular fa-envelope icon"></i>
        <p>ostricmariano@gmail.com</p>
      </div>
      <div className="contact-info">
        <i className="fa-solid fa-location-dot icon"></i>
        <p>Buenos Aires, Argentina</p>
      </div>
      <div className="contact-info">
        <i className="fa-brands fa-linkedin icon"></i>
        <a href="www.linkedin.com/in/mariano-ostric-719890100" target="_blank">
          <p>mariano-ostric</p>
        </a>
      </div>
      <div className="contact-info">
        <i className="fa-brands fa-square-github icon"></i>
        <a href="https://github.com/ostricnano" target="_blank">
          <p>ostricnano</p> 
        </a>
      </div>
      <div className="contact-info">
        <div className="icon">
          <IoLogoVercel />
        </div>
        <a href="https://vercel.com/ostricnanos-projects" target="_blank">
          <p>ostricnano-projects</p>
        </a>
      </div>
    </section>
  )
}
