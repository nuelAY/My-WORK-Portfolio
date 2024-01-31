import { Col, Container, Row } from "react-bootstrap"
import navIcon1 from '../Assets/img/nav-icon1.svg'
import navIcon2 from '../Assets/img/nav-icon2.svg';
import navIcon3 from '../Assets/img/nav-icon3.svg';
import navIcon4 from '../Assets/img/nav-icon4.svg';
import navIcon5 from '../Assets/img/nav-icon5.svg';
import navIcon6 from '../Assets/img/nav-icon6.svg';



const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
                <Col  className="text-center text-sm">
                    <div className="social-icon">
                        <a href='http://linkedin.com/in/owolabi-emmanuel-870b28175'target='#'> <img src={navIcon1} alt='Logo' /></a>
                        <a href='https://twitter.com/amnuel_i'target='#'> <img src={navIcon2} alt='Logo' /></a>
                        <a href='https://www.instagram.com/i_amnuel/' target='#'> <img src={navIcon3} alt='Logo' /></a>
                        <a href='https://github.com/nuelAY' target='#'> <img src={navIcon4} alt='Logo' /></a>
                        <a href='mailto:nuelay99@gmail.com' target='#'> <img src={navIcon6} alt='Logo' /></a>
                    </div>
                    <p>CopyRight &copy;2024. All Right Reserved Manuel.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer