import './Headertop.css';

function HeaderTop() {
  return (
    <div>
       <header className="site-header bg-dark text-white-0_5">
        <div className="container">
            <div className="row align-items-center justify-content-between mx-0">
                <ul className="list-inline d-none d-lg-block mb-0">
                    <li className="list-inline-item mr-3">
                        <div className="d-flex align-items-center"><i className="ti-email mr-2"></i> <a
                                href="#">support@educati.com</a></div>
                    </li>
                    <li className="list-inline-item mr-3">
                        <div className="d-flex align-items-center"><i className="ti-headphone mr-2"></i> <a
                                href="#">+8801740411513</a></div>
                    </li>
                </ul>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item mr-0 p-3 border-right border-left border-white-0_1"><a href="#"><i
                                className="ti-facebook"></i></a></li>
                    <li className="list-inline-item mr-0 p-3 border-right border-white-0_1"><a href="#"><i
                                className="ti-twitter"></i></a></li>
                    <li className="list-inline-item mr-0 p-3 border-right border-white-0_1"><a href="#"><i
                                className="ti-vimeo"></i></a></li>
                    <li className="list-inline-item mr-0 p-3 border-right border-white-0_1"><a href="#"><i
                                className="ti-linkedin"></i></a></li>
                </ul>
                
            </div>
        </div>
    </header>
    </div>
  );
}

export default HeaderTop;
