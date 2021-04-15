import './Headertop.css';
import Nav from './Nav.js';
import BreadCrum from './BreadCrum.js';
import Footer from './Footer.js';
import HeaderTop from './HeaderTop';
import PrincipalMessage from './PrincipalMessage';


function Principal() {
  return (
    <div>
        <HeaderTop/>
        <Nav/>
        <BreadCrum/>
        <PrincipalMessage/>
        <Footer/>
    </div>
  );
}

export default Principal;
