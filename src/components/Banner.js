import './Headertop.css';
import banner from '../assets/1.jpg';


function Banner() {
  return (
    <div className="height-90vh py-5 flex-center jarallax" data-dark-overlay="4"
         style= {{ backgroundImage: `url(${banner})` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-9 text-white">
                    <h2 className="display-lg-4 font-weight-bold text-primary wow slideInUp">Best Ever Trendy</h2>
                    <h1 className="display-lg-3 font-weight-bold text-white wow slideInUp">School Template</h1>
                    <p className="lead wow slideInUp">This modern and inviting academic template is perfectly suited for
                        school, colleges, university, on-line course, and other educational institutions.</p><a href="#"
                        className="btn btn-primary btn-lg mt-3 wow slideInUp">Read More</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Banner;
