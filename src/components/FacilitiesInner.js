import './Headertop.css';
import fac1 from '../assets/facilities/1.jpg';
import fac2 from '../assets/facilities/2.jpg';
import fac3 from '../assets/facilities/3.jpg';

function FacilitiesInner() {
  return (
    <div class="pt-5 paddingBottom-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <article class="card">
                        <div class="card-img"><a href="#"><img class="rounded w-100"
                                    src={fac1} alt="" /></a></div>
                        <div class="card-body px-0"><a class="text-primary" href="#">PHP &amp; My SQL</a> <a href="#"
                                class="h4 my-2">Expand Your Programming Knowledge</a>
                            <p>28 Mar, 2021 - by <a class="text-primary" href="#">Alex</a></p>
                        </div>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <article class="card">
                        <div class="card-img"><a href="#"><img class="rounded w-100"
                                    src={fac2} alt=""/></a></div>
                        <div class="card-body px-0"><a class="text-primary" href="#">Programming</a> <a href="#"
                                class="h4 my-2">The Ultimate Guide to Game Development</a>
                            <p>30 Mar, 2021 - by <a class="text-primary" href="#">John doe</a></p>
                        </div>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <article class="card">
                        <div class="card-img"><a href="#"><img class="rounded w-100"
                                    src={fac3} alt=""/></a></div>
                        <div class="card-body px-0"><a class="text-primary" href="#">Corporate</a> <a href="#"
                                class="h4 my-2">How to Incorporate This One Employee</a>
                            <p>6 Apr, 2021 - by <a class="text-primary" href="#">Anthony Brooks</a></p>
                        </div>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <article class="card">
                        <div class="card-img"><a href="#"><img class="rounded w-100"
                                    src={fac1} alt=""/></a></div>
                        <div class="card-body px-0"><a class="text-primary" href="#">PHP &amp; My SQL</a> <a href="#"
                                class="h4 my-2">Expand Your Programming Knowledge</a>
                            <p>28 Mar, 2021 - by <a class="text-primary" href="#">Alex</a></p>
                        </div>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <article class="card">
                        <div class="card-img"><a href="#"><img class="rounded w-100"
                                    src={fac2} alt=""/></a></div>
                        <div class="card-body px-0"><a class="text-primary" href="#">Programming</a> <a href="#"
                                class="h4 my-2">The Ultimate Guide to Game Development</a>
                            <p>30 Mar, 2021 - by <a class="text-primary" href="#">John doe</a></p>
                        </div>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <article class="card">
                        <div class="card-img"><a href="#"><img class="rounded w-100"
                                    src={fac3} alt=""/></a></div>
                        <div class="card-body px-0"><a class="text-primary" href="#">Corporate</a> <a href="#"
                                class="h4 my-2">How to Incorporate This One Employee</a>
                            <p>6 Apr, 2021 - by <a class="text-primary" href="#">Anthony Brooks</a></p>
                        </div>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <article class="card">
                        <div class="card-img"><a href="#"><img class="rounded w-100"
                                    src={fac1} alt=""/></a></div>
                        <div class="card-body px-0"><a class="text-primary" href="#">PHP &amp; My SQL</a> <a href="#"
                                class="h4 my-2">Expand Your Programming Knowledge</a>
                            <p>28 Mar, 2021 - by <a class="text-primary" href="#">Alex</a></p>
                        </div>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <article class="card">
                        <div class="card-img"><a href="#"><img class="rounded w-100"
                                    src={fac2} alt=""/></a></div>
                        <div class="card-body px-0"><a class="text-primary" href="#">Programming</a> <a href="#"
                                class="h4 my-2">The Ultimate Guide to Game Development</a>
                            <p>30 Mar, 2021 - by <a class="text-primary" href="#">John doe</a></p>
                        </div>
                    </article>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <article class="card">
                        <div class="card-img"><a href="#"><img class="rounded w-100"
                                    src={fac1} alt=""/></a></div>
                        <div class="card-body px-0"><a class="text-primary" href="#">Corporate</a> <a href="#"
                                class="h4 my-2">How to Incorporate This One Employee</a>
                            <p>6 Apr, 2021 - by <a class="text-primary" href="#">Anthony Brooks</a></p>
                        </div>
                    </article>
                </div>
                <div class="col-12 marginTop-70">
                    <ul class="pagination pagination-primary align-items-center justify-content-center">
                        <li class="page-item mx-2"><a href="#"><i class="ti-arrow-left small mr-2"></i> Previous</a>
                        </li>
                        <li class="page-item mx-2 font-weight-bold">2/45</li>
                        <li class="page-item mx-2"><a href="#">Next <i class="ti-arrow-right small ml-2"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FacilitiesInner;
