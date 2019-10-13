import React from 'react';
import emailjs from 'emailjs-com';
import './style/Contact.css';

class Contact extends React.Component {

  state = {
    from_name: '',
    from_email: '',
    message: '',
    complete: false
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
     from_name: this.state.from_name,
     from_email: this.state.from_email,
     message: this.state.message
    };
    emailjs.send('default_service', 'contact_form', templateParams, 'user_930tGXbXZ8DTaedds14NL' )
       .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
           this.setState({complete: true})
       }, (err) => {
           window.alert('Contact unsuccessful because: ', err);
      });
  }

  handleClick = () => {
    this.setState({complete: false})
  }


  render(){
    return (
      <div className="contact_container">

        {
          this.state.complete ?
          <div>
            <h1>Thank you for your email!</h1>
            <h2 id='anotherOne' onClick={this.handleClick}>Send Another ↺</h2>
          </div>
          :
          <form id="contact-form" onSubmit={this.handleSubmit} autoComplete="off">
            <input type="hidden" name="contact" />
            <label>Name</label><br></br>
            <input type="text" placeholder='Name' name="from_name" id='from_name' onChange={this.handleChange} />

            <br></br><label>Email</label><br></br>
            <input type="email" placeholder='Email' name="from_email" id='from_email' onChange={this.handleChange} />

            <br></br><label>Message</label><br></br>
            <textarea name="message" id='message' placeholder="Hello, I'd like to contact you about..." onChange={this.handleChange} />
            <br></br><input type="submit" value="Send" />
        </form>

      }

      </div>
    )
  }

}

export default Contact;
