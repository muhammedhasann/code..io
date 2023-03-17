import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/muhammedhaan/"><img src={navIcon1} alt="" /></a>
                <a href="https://twitter.com/Muhammed__Hasan"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/muhammedhasann"><img src={navIcon3} alt="" /></a>
                <a href="https://www.youtube.com/channel/UCgEIJnIsBcyLum3ttNowXBg"><img src={navIcon4} alt="" /></a>

            </div>
            <p>© Muhammed Hasan 2023.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
