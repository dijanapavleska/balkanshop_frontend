const ContactUs = () => {
  return (
    <div className="container border" style={{
      width: '50%', backgroundImage: `url("https://img.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg?w=1060&t=st=1668437757~exp=1668438357~hmac=bb7cdd861137cc2e1dd9266b397009499afcae443e2077a7396363860dceaecc")`,
      backgroundPosition: "center",
      backgroundSize: 'cover',
    }}
    >

      <h1 style={{ marginTop: '25px', marginLeft: '5em' }}>Contact Us</h1>
      <form className='row' style={{ margin: '25px 85px 70px 100px', width: '60%' }}>
        <label>Name</label>
        <input type='text' name='name' className="form-control" />

        <label>Email</label>
        <input type='email' name='user_email' className="form-control" />

        <label>Message</label>
        <textarea name="message" rows='6' style={{ marginTop: '0px', marginLeft: '12px', marginBottom: '20px' }} />
        <input type='submit' value='send' className="form-control " />
      </form>
    </div >
  )
}



export default ContactUs; 