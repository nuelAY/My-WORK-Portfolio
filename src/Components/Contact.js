import { useRef, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../Assets/img/contact-img.svg"
import { Send } from "react-bootstrap-icons";
import emailjs from '@emailjs/browser'
const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
        ...formDetails,
        [category]: value
    })
  }

      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2hvs48a', 'template_czggbwa', form.current, 'dk-CShTqYFEBAtE5I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return(
    <section className="contact" id="connect">
        <Container>
            <Row className="align-item-center">
                <Col md={6}>
                <img src={contactImg}  alt="Contact Us"/>
                </Col>

                <Col md={6}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <Row>
                        <Col sm={6} className="px-1">
                            <input type="text" value={formDetails.firstName}
                             placeholder="First Name" name="user_name"
                             onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                             />
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="text" value={formDetails.lastName}
                             placeholder="Last Name" name="user_name"
                             onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                            />
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="email" value={formDetails.email}
                             placeholder="E-mail Address" name="user_email"
                             onChange={(e) => onFormUpdate('email', e.target.value)} 
                            />
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="phone" value={formDetails.telephone}
                             placeholder="Telephone" name="user_number"
                             onChange={(e) => onFormUpdate('phone', e.target.value)} 
                            />
                        </Col>
                        <Col>
                        <textarea row={6} value={formDetails.message} placeholder="message" name="message" 
                        onChange={(e) => onFormUpdate('message', e.target.value)} >    
                        </textarea>

                        <button type="submit" value={Send}> <span>{buttonText}</span> </button>
                        </Col>

                        {
                            status.message &&
                            <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                        }
                    </Row>
                </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact