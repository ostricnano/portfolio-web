import "./Contact.css"

export const Contact = () => {
  return (
    <section className="contact-block">
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
    </section>
  )
}
