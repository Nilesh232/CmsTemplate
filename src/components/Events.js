import BreadCrum from './BreadCrum';
import Footer from './Footer';
import HeaderTop from './HeaderTop';
import './Headertop.css';
import Nav from './Nav';
import UpcomingEvent from './UpcomingEvent';


function Events() {
  return (
    <div>
        <HeaderTop/>
        <Nav/>
        <BreadCrum/>
        <UpcomingEvent/>
        <Footer/>
    </div>
            
  );
}

export default Events;
