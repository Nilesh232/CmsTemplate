import './Headertop.css';
import Nav from './Nav.js';
import BreadCrum from './BreadCrum.js';
import Footer from './Footer.js';
import AboutWhoWeAre from './AboutWhoWeAre';
import AboutWhatWeOffer from './AboutWhatWeOffer';
import AboutUniqueFeatures from './AboutUniqueFeatures';
import HeaderTop from './HeaderTop';


function AboutUs() {
  return (
    <div>
        <HeaderTop/>
        <Nav/>
        <BreadCrum/>
        <AboutWhoWeAre/>
        <AboutWhatWeOffer/>
        <AboutUniqueFeatures/>
        <Footer/>
    </div>
  );
}

export default AboutUs;
