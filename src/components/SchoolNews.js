import './Headertop.css';


function SchoolNews() {
  return (
    <div className="padding-y-100 bg-light-v2">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="mb-4">Latest School News</h2>
                    <div className="width-3rem height-4 rounded bg-primary mx-auto"></div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4 col-md-6 marginTop-30 wow slideInUp" data-wow-delay=".1s">
                    <div className="card padding-30 shadow-v1">
                        <p className="text-primary">Aug 13, 2021</p><a href="#" className="h4 mb-3">Best Student Spots in
                            London</a>
                        <p>Investig ationes demons trave sed vunt lectores legere do kurus qodk legunt saepiu claritas
                            ekist conse tetur adipi sicing elit, sed kdo.</p><a href="#"
                            className="btn btn-outline-primary align-self-start mt-2">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 marginTop-30 wow slideInUp" data-wow-delay=".2s">
                    <div className="card padding-30 shadow-v1">
                        <p className="text-primary">Aug 13, 2021</p><a href="#" className="h4 mb-3">Believe in Yourself! Have
                            Faith!</a>
                        <p>Investig ationes demons trave sed vunt lectores legere do kurus qodk legunt saepiu claritas
                            ekist conse tetur adipi sicing elit, sed kdo.</p><a href="#"
                            className="btn btn-outline-primary align-self-start mt-2">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 marginTop-30 wow slideInUp" data-wow-delay=".3s">
                    <div className="card padding-30 shadow-v1">
                        <p className="text-primary">Aug 13, 2021</p><a href="#" className="h4 mb-3">Bringing an Online Community</a>
                        <p>Investig ationes demons trave sed vunt lectores legere do kurus qodk legunt saepiu claritas
                            ekist conse tetur adipi sicing elit, sed kdo.</p><a href="#"
                            className="btn btn-outline-primary align-self-start mt-2">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
  );
}

export default SchoolNews;
