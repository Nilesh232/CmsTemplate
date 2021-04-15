import './Headertop.css';
import logo from '../assets/logo-black.png';


function Notice() {
  return (
        <div className="col-lg-4 mt-5 mt-md-0">
            <div className="card shadow-v2 z-index-5" data-offset-top-xl="-160">
                <div className="card-header bg-primary text-white border-bottom-0"><span
                        className="lead font-semiBold text-uppercase">Notice Board</span></div>
                <div className="p-4 border-bottom wow fadeInUp">
                    <p className="text-primary mb-1">July 02, 2021</p><a href="#">Maximizing potential through
                        individual attention.</a>
                </div>
                <div className="p-4 border-bottom wow fadeInUp">
                    <p className="text-primary mb-1">July 17, 2021</p><a href="#">Nullam quis ante etiam sit amet
                        eget eros faucibus</a>
                </div>
                <div className="p-4 border-bottom wow fadeInUp">
                    <p className="text-primary mb-1">June 08, 2021</p><a href="#">Adsing eusmo tempor indeduny</a>
                </div>
                <div className="p-4 border-bottom wow fadeInUp">
                    <p className="text-primary mb-1">June 20, 2021</p><a href="#">Nullam quis ante etiam sit amet
                        eget eros faucibus</a>
                </div>
                <div className="p-4"><a href="#" className="btn btn-link pl-0">View All Notices</a></div>
            </div>
        </div>
            
  );
}

export default Notice;
