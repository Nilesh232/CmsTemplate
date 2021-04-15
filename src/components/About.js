import './Headertop.css';
import welcome from '../assets/welcome.jpg';
import Notice from './Notice';


function About() {
  return (
    <div className="padding-y-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row align-items-center">
                        <div className="col-md-6 my-5">
                            <div className="position-relative"><img className="rounded w-100" src={welcome}
                                    alt="" /> </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <h2><small className="d-block text-gray">Welcome to</small> <span
                                    className="text-primary">Educati</span> School</h2>
                            <p className="my-4">Investig tiones demons travge wunt ectores legere lkurus quod legunt saepiu
                                clartas est consectetur adipi sicing elitsed kdo eusmod tempor cididunt wuti labore.</p>
                            <a href="#" className="btn btn-outline-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <Notice/>
            </div>
        </div>
    </div>
  );
}

export default About;
