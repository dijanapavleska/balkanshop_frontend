import "./styleForm.css";

const ContactUs = () => {
  return (
    // <div className="container border" style={{
    //   backgroundImage: `url("https://img.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg?w=1060&t=st=1668437757~exp=1668438357~hmac=bb7cdd861137cc2e1dd9266b397009499afcae443e2077a7396363860dceaecc")`,
    //   backgroundPosition: "center",
    //   backgroundSize: 'cover',
    // }}
    // >
    <div className="overlay contact-us" >

      <form>
        <h3 className="form-h1">Contact</h3>
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Your name"></input>
        <small className="error"></small>

        <label for="email">Email:</label>
        <input type="text" id="email" placeholder="Your email"></input>
        <small className="error"></small>

        <label for="message">Message:</label>
        <textarea id="message" placeholder="Your message" rows="6"></textarea>
        <small className="error"></small>

        <div className="center">
          <input id="contact-us-submit" type="submit" value="Send message"></input>
          <p id="success"></p>
        </div>
      </form>
    </div>
  )
}

export default ContactUs;