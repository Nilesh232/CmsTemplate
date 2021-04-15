import './Headertop.css';
import achive1 from'../assets/achivements/1.jpg';
import achive2 from'../assets/achivements/2.jpg';
import achive3 from'../assets/achivements/3.jpg';
import achive4 from'../assets/achivements/4.jpg';


function AchivementsInner() {
  return (
    <div class="padding-y-100 wow fadeIn">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-4">
                    <h2>Achivements</h2>
                    <div class="width-4rem height-4 bg-primary rounded mt-4 marginBottom-40 mx-auto"></div>
                </div>
                <div class="col-lg-6 mt-2 wow fadeInUp">
                    <div class="row">
                        <div class="col-md-6 my-2"><img src={achive1} alt="" /></div>
                        <div class="col-md-6 my-4">
                            <h4 class="mb-0">Natalie Paisley</h4>
                            <p class="text-muted mb-0">Founder &amp; CEO</p>
                            <p class="my-4">Nam liber tempor cum soluta nobis eleifend option congue is nihil they
                                imper.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-2 wow fadeInUp">
                    <div class="row">
                        <div class="col-md-6 my-2"><img src={achive2} alt="" /></div>
                        <div class="col-md-6 my-4">
                            <h4 class="mb-0">Anthony Brooks</h4>
                            <p class="text-muted mb-0">Senior Developer</p>
                            <p class="my-4">Nam liber tempor cum soluta nobis eleifend option congue is nihil they
                                imper.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-2 wow fadeInUp">
                    <div class="row">
                        <div class="col-md-6 my-2"><img src={achive3} alt="" /></div>
                        <div class="col-md-6 my-4">
                            <h4 class="mb-0">Philip Demarco</h4>
                            <p class="text-muted mb-0">Designer</p>
                            <p class="my-4">Nam liber tempor cum soluta nobis eleifend option congue is nihil they
                                imper.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-2 wow fadeInUp">
                    <div class="row">
                        <div class="col-md-6 my-2"><img src={achive4} alt="" /></div>
                        <div class="col-md-6 my-4">
                            <h4 class="mb-0">Peter Spenser</h4>
                            <p class="text-muted mb-0">Creative Developer</p>
                            <p class="my-4">Nam liber tempor cum soluta nobis eleifend option congue is nihil they
                                imper.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AchivementsInner;
