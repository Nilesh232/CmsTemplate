import './Headertop.css';
import Nav from './Nav.js';
import BreadCrum from './BreadCrum.js';
import Footer from './Footer.js';
import HeaderTop from './HeaderTop';
import TeacherInner from './TeacherInner';


function Teacher() {
  return (
    <div>
        <HeaderTop/>
        <Nav/>
        <BreadCrum/>
        <TeacherInner/>
        <Footer/>
    </div>
  );
}

export default Teacher;
