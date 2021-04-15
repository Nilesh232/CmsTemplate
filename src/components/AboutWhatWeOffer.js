import './Headertop.css';
import whatweoffer from '../assets/about/whatweoffer.jpg';


function AboutWhatWeOffer() {
  return (
    <div class="padding-y-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h2>What We offer</h2>
                    <div class="width-4rem height-4 bg-primary rounded mt-4 marginBottom-40"></div>
                    <p class="mb-5">Nam liber tempor cum soluta nobis eleifend option congue is nihil imper iper tem por
                        legere me that doming vulputate velit esse molestie possim wisi enim ad placerat facer possim.
                    </p>
                    <div class="media mb-4"><i class="ti-user text-primary font-size-30 mt-2"></i>
                        <div class="media-body pl-3">
                            <h4 class="h5">Work With Any Team</h4>
                            <p>Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por
                                legere me that doming vulputate.</p>
                        </div>
                    </div>
                    <div class="media mb-4"><i class="ti-basketball text-primary font-size-30 mt-2"></i>
                        <div class="media-body pl-3">
                            <h4 class="h5">A Productivity Platform</h4>
                            <p>Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por
                                legere me that doming vulputate.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 mb-4 mr-auto text-center"><img class="wow fadeInRight w-100 rounded"
                        src={whatweoffer} alt="" /></div>
            </div>
        </div>
    </div>
  );
}

export default AboutWhatWeOffer;
