import './Headertop.css';
import Nav from './Nav.js';
import BreadCrum from './BreadCrum.js';
import GalleryInner from './GalleryInner.js';
import Footer from './Footer.js';
import HeaderTop from './HeaderTop';


function GalleryPage() {
  return (
    <div>
        <HeaderTop/>
        <Nav/>
        <BreadCrum/>
        <GalleryInner/>
        <Footer/>
    </div>
  );
}

export default GalleryPage;
