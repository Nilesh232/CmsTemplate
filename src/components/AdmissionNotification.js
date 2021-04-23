import './Headertop.css';
import welcome from '../assets/welcome.jpg';
import Notice from './Notice';
import AdmissionNotificationInner from './AdmissionNotificationInner';


function AdmissionNotification() {
  return (
    <section class="padding-y-60 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mt-4">
                    <div class="card shadow-v1">
                        <div class="card-body padding-40">
                           <h4>Admission Notice</h4>
                           <ul>
                               <li>Admission opens : Play Group, Nursery to class XII.</li>
                               <li>Subject offered in Class XI/XII : Science-Maths | Science-Biology | Commerce</li>
                               <li>Fee Details : Click Here</li>
                               <li>Admission Policy : Click Here</li>
                               <li>Admission Procedure : Click Here</li>
                               <li>Application form : Click Here</li>
                               <li>How to apply for admission : Apply of prescribed Application Form available from school admission office on cash payment of Rs. 200/-</li>
                           </ul>
                           <h4>Contact Details</h4>
                           <ul>
                               <li>Phone : +91 744 2421979</li>
                               <li>Email : gps@cpil.in</li>
                               <li>Address : Global Public School, A-2, IndraVihar, Kota (Rajasthan) 324 005</li>
                               <li>Office timings : 8:00 am – 2:00 pm</li>  
                           </ul>
                        </div>
                    </div>
                </div>
                <AdmissionNotificationInner/>
            </div>
        </div>
    </section>
  );
}

export default AdmissionNotification;
