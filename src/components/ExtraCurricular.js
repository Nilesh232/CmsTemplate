import './Headertop.css';
import Nav from './Nav.js';
import BreadCrum from './BreadCrum.js';
import Footer from './Footer.js';
import ExtraCurricularInner from './ExtraCurricularInner.js';
import HeaderTop from './HeaderTop';


function ExtraCurricular() {
  return (
    <div>
        <HeaderTop/>
        <Nav/>
        <BreadCrum/>
        <ExtraCurricularInner/>
        <Footer/>
    </div>
  );
}

export default ExtraCurricular;
