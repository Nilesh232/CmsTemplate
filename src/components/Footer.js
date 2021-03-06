import './Headertop.css';
import logo from '../assets/logo-white.png';


function Footer() {
  return (
    <footer className="site-footer">
        <div className="footer-top bg-dark text-white-0_6 pt-5 paddingBottom-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mt-5"><img src={logo} alt="Logo" />
                        <div className="margin-y-40">
                            <p>Nunc placerat mi id nisi interdm they mtolis. Praesient is haretra justo ught scel
                                erisque placer.</p>
                        </div>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a className="iconbox bg-white-0_2 hover:primary" href="#"><i
                                        className="ti-facebook"></i></a></li>
                            <li className="list-inline-item"><a className="iconbox bg-white-0_2 hover:primary" href="#"><i
                                        className="ti-twitter"></i></a></li>
                            <li className="list-inline-item"><a className="iconbox bg-white-0_2 hover:primary" href="#"><i
                                        className="ti-linkedin"></i></a></li>
                            <li className="list-inline-item"><a className="iconbox bg-white-0_2 hover:primary" href="#"><i
                                        className="ti-pinterest"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5">
                        <h4 className="h5 text-white">Contact Us</h4>
                        <div className="width-3rem bg-primary height-3 mt-3"></div>
                        <ul className="list-unstyled marginTop-40">
                            <li className="mb-3"><i className="ti-headphone mr-3"></i><a href="tel:+8801740411513">800
                                    567.890.576</a></li>
                            <li className="mb-3"><i className="ti-email mr-3"></i><a
                                    href="mailto:support@educati.com">support@educati.com</a></li>
                            <li className="mb-3">
                                <div className="media"><i className="ti-location-pin mt-2 mr-3"></i>
                                    <div className="media-body"><span>184 Main Collins Street Chicago, United States</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mt-5">
                        <h4 className="h5 text-white">Quick links</h4>
                        <div className="width-3rem bg-primary height-3 mt-3"></div>
                        <ul className="list-unstyled marginTop-40">
                            <li className="mb-2"><a href="page-about.html">About Us</a></li>
                            <li className="mb-2"><a href="page-contact.html">Contact Us</a></li>
                            <li className="mb-2"><a href="page-sp-student-profile.html">Students</a></li>
                            <li className="mb-2"><a href="page-sp-admission-apply.html">Admission</a></li>
                            <li className="mb-2"><a href="page-events.html">Events</a></li>
                            <li className="mb-2"><a href="blog-card.html">Latest News</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-5">
                        <h4 className="h5 text-white">Newsletter</h4>
                        <div className="width-3rem bg-primary height-3 mt-3"></div>
                        <div className="marginTop-40">
                            <p className="mb-4">Subscribe to get update and information. Don't worry, we won't send spam!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom bg-black-0_9 py-5 text-center">
            <div className="container">
                <p className="text-white-0_5 mb-0">&copy; 2021 CMS. All rights reserved. Created by <a
                        href="#" target="_blunk">SoCommercez</a></p>
            </div>
        </div>
    </footer>
            
  );
}

export default Footer;
