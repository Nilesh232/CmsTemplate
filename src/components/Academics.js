import './Headertop.css';
import Nav from './Nav.js';
import BreadCrum from './BreadCrum.js';
import Footer from './Footer.js';
import HeaderTop from './HeaderTop';
import AcademicsInner from './AcademicsInner';


function Academics() {
  return (
    <div>
        <HeaderTop/>
        <Nav/>
        <BreadCrum/>
        <AcademicsInner/>
        <Footer/>
    </div>
  );
}

export default Academics;
