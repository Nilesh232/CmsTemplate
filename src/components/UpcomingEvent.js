
import './Headertop.css';
import imgEvent1 from '../assets/event/1.jpg';
import imgEvent2 from '../assets/event/2.jpg';
import imgEvent3 from '../assets/event/3.jpg';
import imgEvent4 from '../assets/event/4.jpg';


function UpcomingEvent() {
  return (
    <div class="padding-y-60 bg-light">
        <div class="container">
            <div class="list-card align-items-center shadow-v2 px-3">
                <div class="col-lg-4 py-4"><img class="w-100" src={imgEvent1} alt="" /></div>
                <div class="col-lg-8 py-4"><a href="#" class="h4">Educati Upcoming Event 2022</a>
                    <ul class="list-inline text-gray mt-3">
                        <li class="list-inline-item mr-2"><i class="ti-time text-primary mr-1"></i> January 25-30, 2021
                        </li>
                        <li class="list-inline-item mr-2"><i class="ti-location-pin text-primary mr-1"></i> London, UK
                        </li>
                    </ul>
                    <p>Investig ationes demons travge vunt lectores legee lrus quodk legunt saepius claritas est
                        conctetur adipi sicing eiusmod tempor.</p>
                    <ul class="list-inline mt-4" data-countdown="2022/01/01">
                        <li class="list-inline-item iconbox iconbox-xxxl border border-light mb-2">
                            <h2 class="countdown-days mb-0 text-primary"></h2><span>Days</span>
                        </li>
                        <li class="list-inline-item iconbox iconbox-xxxl border border-light mb-2">
                            <h2 class="countdown-hours mb-0 text-primary"></h2><span>Hours</span>
                        </li>
                        <li class="list-inline-item iconbox iconbox-xxxl border border-light mb-2">
                            <h2 class="countdown-minutes mb-0 text-primary"></h2><span>Minutes</span>
                        </li>
                        <li class="list-inline-item iconbox iconbox-xxxl border border-light mb-2">
                            <h2 class="countdown-seconds mb-0 text-primary"></h2><span>Second</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <div class="card height-100p shadow-v1"><img class="card-img-top" src={imgEvent2}
                            alt="" />
                        <div class="card-body"><a href="#" class="h4">Harvard Panel Examines Future of Cities</a>
                            <ul class="list-unstyled line-height-lg mt-4">
                                <li><i class="ti-time text-primary mr-2"></i>25-30 Dec, 2021</li>
                                <li><i class="ti-location-pin text-primary mr-2"></i>Cambridge, USA</li>
                            </ul><a href="page-event-details.html" class="btn btn-link pl-0">View Details</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <div class="card height-100p shadow-v1"><img class="card-img-top" src={imgEvent3}
                            alt="" />
                        <div class="card-body"><a href="#" class="h4">Farmer's Market at Harvard ceremony</a>
                            <ul class="list-unstyled line-height-lg mt-4">
                                <li><i class="ti-time text-primary mr-2"></i>25-30 Dec, 2021</li>
                                <li><i class="ti-location-pin text-primary mr-2"></i>Cambridge, USA</li>
                            </ul><a href="page-event-details.html" class="btn btn-link pl-0">View Details</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <div class="card height-100p shadow-v1"><img class="card-img-top" src={imgEvent1}
                            alt="" />
                        <div class="card-body"><a href="#" class="h4">A Conversation with Wynton Marsalis</a>
                            <ul class="list-unstyled line-height-lg mt-4">
                                <li><i class="ti-time text-primary mr-2"></i>25-30 Dec, 2021</li>
                                <li><i class="ti-location-pin text-primary mr-2"></i>Cambridge, USA</li>
                            </ul><a href="page-event-details.html" class="btn btn-link pl-0">View Details</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <div class="card height-100p shadow-v1"><img class="card-img-top" src={imgEvent1}
                            alt="" />
                        <div class="card-body"><a href="#" class="h4">Harvard Panel Examines Future of Cities</a>
                            <ul class="list-unstyled line-height-lg mt-4">
                                <li><i class="ti-time text-primary mr-2"></i>25-30 Dec, 2021</li>
                                <li><i class="ti-location-pin text-primary mr-2"></i>Cambridge, USA</li>
                            </ul><a href="page-event-details.html" class="btn btn-link pl-0">View Details</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <div class="card height-100p shadow-v1"><img class="card-img-top" src={imgEvent2}
                            alt="" />
                        <div class="card-body"><a href="#" class="h4">Farmer's Market at Harvard ceremony</a>
                            <ul class="list-unstyled line-height-lg mt-4">
                                <li><i class="ti-time text-primary mr-2"></i>25-30 Dec, 2021</li>
                                <li><i class="ti-location-pin text-primary mr-2"></i>Cambridge, USA</li>
                            </ul><a href="page-event-details.html" class="btn btn-link pl-0">View Details</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <div class="card height-100p shadow-v1"><img class="card-img-top" src={imgEvent3}
                            alt="" />
                        <div class="card-body"><a href="#" class="h4">A Conversation with Wynton Marsalis</a>
                            <ul class="list-unstyled line-height-lg mt-4">
                                <li><i class="ti-time text-primary mr-2"></i>25-30 Dec, 2021</li>
                                <li><i class="ti-location-pin text-primary mr-2"></i>Cambridge, USA</li>
                            </ul><a href="page-event-details.html" class="btn btn-link pl-0">View Details</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 marginTop-80">
                    <ul class="pagination pagination-primary justify-content-center">
                        <li class="page-item mx-1"><a class="page-link iconbox iconbox-sm rounded-0" href="#"><i
                                    class="ti-angle-left small"></i></a></li>
                        <li class="page-item mx-1"><a class="page-link iconbox iconbox-sm rounded-0" href="#">1</a></li>
                        <li class="page-item active disabled mx-1"><a class="page-link iconbox iconbox-sm rounded-0"
                                href="#">2</a></li>
                        <li class="page-item disabled mx-1"><a class="page-link iconbox iconbox-sm rounded-0"
                                href="#"><i class="ti-more-alt"></i></a></li>
                        <li class="page-item mx-1"><a class="page-link iconbox iconbox-sm rounded-0" href="#">16</a>
                        </li>
                        <li class="page-item mx-1"><a class="page-link iconbox iconbox-sm rounded-0" href="#"><i
                                    class="ti-angle-right small"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
            
  );
}

export default UpcomingEvent;
