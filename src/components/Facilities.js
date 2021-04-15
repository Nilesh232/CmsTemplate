import './Headertop.css';
import Nav from './Nav.js';
import BreadCrum from './BreadCrum.js';
import Footer from './Footer.js';
import HeaderTop from './HeaderTop';
import FacilitiesInner from './FacilitiesInner';


function Facilities() {
  return (
    <div>
        <HeaderTop/>
        <Nav/>
        <BreadCrum/>
        <FacilitiesInner/>
        <Footer/>
    </div>
  );
}

export default Facilities;
