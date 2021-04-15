import './Headertop.css';
import Nav from './Nav.js';
import BreadCrum from './BreadCrum.js';
import Footer from './Footer.js';
import HeaderTop from './HeaderTop';
import AchivementsInner from './AchivementsInner';


function Achivements() {
  return (
    <div>
        <HeaderTop/>
        <Nav/>
        <BreadCrum/>
        <AchivementsInner/>
        <Footer/>
    </div>
  );
}

export default Achivements;
