import BreadCrum from './BreadCrum';
import Footer from './Footer';
import HeaderTop from './HeaderTop';
import './Headertop.css';
import Nav from './Nav';
import NewsList from './NewsList';
import UpcomingEvent from './UpcomingEvent';


function News() {
  return (
    <div>
        <HeaderTop/>
        <Nav/>
        <BreadCrum/>
        <NewsList/>
        <Footer/>
    </div>
            
  );
}
export default News;
