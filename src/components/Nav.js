import './Headertop.css';
import logo from '../assets/logo-black.png';


function Nav() {
  return (
    <nav className="ec-nav sticky-top bg-white">
        <div className="container">
            <div className="navbar p-0 navbar-expand-lg">
                <div className="navbar-brand"><a className="logo-default" href="#"><img alt=""
                            src={logo} /></a></div><span aria-expanded="false"
                    className="navbar-toggler ml-auto collapsed" data-target="#ec-nav__collapsible" data-toggle="collapse">
                    <div className="hamburger hamburger--spin js-hamburger">
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                        </div>
                    </div>
                </span>
                <div className="collapse navbar-collapse when-collapsed" id="ec-nav__collapsible">
                    <ul className="nav navbar-nav ec-nav__navbar ml-auto">
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a className="nav-link "
                                href="#" >Home</a>
                        </li>
                        <li class="nav-item nav-item__has-dropdown"><a class="nav-link dropdown-toggle" href="#"
                                data-toggle="dropdown">About Us</a>
                            <ul class="dropdown-menu">
                                <li><a href="page-sp-all-courcess.html" class="nav-link__list">Principal's Message</a></li>
                                <li><a href="page-sp-all-courcess-with-sidebar.html" class="nav-link__list">Mission & Vision
                                        </a></li>
                                <li><a href="page-sp-all-courcess-list-with-sidebar.html" class="nav-link__list">Teachers
                                        </a></li>
                                <li><a href="page-sp-all-courcess-with-sidebar.html" class="nav-link__list">
                                        Achivements</a></li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a className="nav-link "
                                href="#" >Events</a>
                        </li>
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a className="nav-link "
                                href="#" >News</a>
                        </li>
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a className="nav-link "
                                href="#" >Academics</a>
                        </li>
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a className="nav-link "
                                href="#" >Extra Curricular</a>
                        </li>
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a className="nav-link "
                                href="#" >Facilities</a>
                        </li>
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a className="nav-link "
                                href="#" >Gallery</a>
                        </li>
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a className="nav-link "
                                href="#" >Contact Us</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </nav>
  );
}

export default Nav;
