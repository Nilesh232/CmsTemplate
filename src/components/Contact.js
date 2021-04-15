import './Headertop.css';
import Nav from './Nav.js';
import BreadCrum from './BreadCrum.js';
import Footer from './Footer.js';
import HeaderTop from './HeaderTop';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';


function Contact() {
  return (
    <div>
        <HeaderTop/>
        <Nav/>
        <BreadCrum/>
        <ContactDetails/>
        <ContactForm/>
        <Footer/>
    </div>
  );
}

export default Contact;
