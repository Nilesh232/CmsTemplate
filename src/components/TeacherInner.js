import './Headertop.css';
import teacher1 from '../assets/teacher/1.jpg';
import teacher2 from '../assets/teacher/2.jpg';
import teacher3 from '../assets/teacher/3.jpg';
import teacher4 from '../assets/teacher/4.jpg';
import teacher5 from '../assets/teacher/5.jpg';


function TeacherInner() {
  return (
    <div class="paddingTop-50 paddingBottom-100 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <div class="card height-100p shadow-v1"><img class="card-img-top" src={teacher1}
                            alt="" />
                        <div class="card-body"><a href="#" class="h4">Faculty of Psychology</a>
                            <ul class="list-unstyled mt-4 mb-0">
                                <li>Dean: <span class="font-weight-semiBold">Dr. G.Hussein Rassool</span></li>
                                <li>Professors: <span class="font-weight-semiBold">12</span></li>
                                <li>Lecturers: <span class="font-weight-semiBold">38</span></li>
                                <li>Students: <span class="font-weight-semiBold">80</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <div class="card height-100p shadow-v1"><img class="card-img-top" src={teacher2}
                            alt="" />
                        <div class="card-body"><a href="#" class="h4">Biological Sciences</a>
                            <ul class="list-unstyled mt-4 mb-0">
                                <li>Dean: <span class="font-weight-semiBold">Dr. G.Hussein Rassool</span></li>
                                <li>Professors: <span class="font-weight-semiBold">12</span></li>
                                <li>Lecturers: <span class="font-weight-semiBold">38</span></li>
                                <li>Students: <span class="font-weight-semiBold">80</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <div class="card height-100p shadow-v1"><img class="card-img-top" src={teacher3}
                            alt="" />
                        <div class="card-body"><a href="#" class="h4">Physical & Sciences</a>
                            <ul class="list-unstyled mt-4 mb-0">
                                <li>Dean: <span class="font-weight-semiBold">Dr. G.Hussein Rassool</span></li>
                                <li>Professors: <span class="font-weight-semiBold">12</span></li>
                                <li>Lecturers: <span class="font-weight-semiBold">38</span></li>
                                <li>Students: <span class="font-weight-semiBold">80</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <div class="card height-100p shadow-v1"><img class="card-img-top" src={teacher4}
                            alt="" />
                        <div class="card-body"><a href="#" class="h4">Faculty of Mathematic</a>
                            <ul class="list-unstyled mt-4 mb-0">
                                <li>Dean: <span class="font-weight-semiBold">Dr. G.Hussein Rassool</span></li>
                                <li>Professors: <span class="font-weight-semiBold">12</span></li>
                                <li>Lecturers: <span class="font-weight-semiBold">38</span></li>
                                <li>Students: <span class="font-weight-semiBold">80</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <div class="card height-100p shadow-v1"><img class="card-img-top" src={teacher5}
                            alt="" />
                        <div class="card-body"><a href="#" class="h4">Faculty of Humanities</a>
                            <ul class="list-unstyled mt-4 mb-0">
                                <li>Dean: <span class="font-weight-semiBold">Dr. G.Hussein Rassool</span></li>
                                <li>Professors: <span class="font-weight-semiBold">12</span></li>
                                <li>Lecturers: <span class="font-weight-semiBold">38</span></li>
                                <li>Students: <span class="font-weight-semiBold">80</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 marginTop-30">
                    <div class="card height-100p shadow-v1"><img class="card-img-top" src={teacher5}
                            alt="" />
                        <div class="card-body"><a href="#" class="h4">Faculty of Humanities</a>
                            <ul class="list-unstyled mt-4 mb-0">
                                <li>Dean: <span class="font-weight-semiBold">Dr. G.Hussein Rassool</span></li>
                                <li>Professors: <span class="font-weight-semiBold">12</span></li>
                                <li>Lecturers: <span class="font-weight-semiBold">38</span></li>
                                <li>Students: <span class="font-weight-semiBold">80</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 marginTop-70">
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

export default TeacherInner;
