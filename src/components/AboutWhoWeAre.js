import './Headertop.css';
import whoweare from '../assets/about/whoweare.jpg';


function AboutWhoWeAre() {
  return (
    <div class="padding-y-100 border-bottom">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 mb-4 mr-auto text-center"><img class="wow fadeInLeft w-100 rounded"
                        src={whoweare} alt="" /></div>
                <div class="col-lg-6">
                    <h2><span class="text-primary">Who</span> We Are</h2>
                    <div class="width-4rem height-4 bg-primary rounded mt-4 marginBottom-40"></div>
                    <p class="mb-5">Nam liber tempor cum soluta nobis eleifend option congue is nihil imper iper tem por
                        legere me that doming vulputate velit esse molestie possim wisi enim ad placerat facer possim.
                    </p>
                    <ul class="list-unstyled list-style-icon list-icon-check-circle">
                        <li>Professional and easy to use software</li>
                        <li>Setup and installations takes 30 seconds</li>
                        <li>Perfect for any device with pixel perfect design</li>
                        <li>Setup and installations really really fast</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutWhoWeAre;
