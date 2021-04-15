import './Headertop.css';
import Nav from './Nav.js';
import BreadCrum from './BreadCrum.js';
import Footer from './Footer.js';
import HeaderTop from './HeaderTop';
import MissionVisionInner from './MissionVisionInner.js';

function MissionVision() {
  return (
    <div>
        <HeaderTop/>
        <Nav/>
        <BreadCrum/>
        <MissionVisionInner/>
        <Footer/>
    </div>
  );
}

export default MissionVision;
