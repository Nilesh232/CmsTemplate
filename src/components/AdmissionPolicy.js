import './Headertop.css';
import welcome from '../assets/welcome.jpg';
import Notice from './Notice';
import AdmissionNotificationInner from './AdmissionNotificationInner';


function AdmissionPolicy() {
  return (
    <section class="padding-y-60 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mt-4">
                    <div class="card shadow-v1">
                        <div class="card-body padding-40">
                            <div >
                                <img src="http://www.globalpublicschool.com/wp-content/uploads/2019/09/admission.jpg" />
                            </div>
                            <br/>
                           <h4>Admission Policy</h4>
                           <ul>
                                <li>Admission is open to all the students irrespective of religion, race, caste, creed or place of birth.</li>
                                <li>Registration-cum-admission form complete in all respect should be deposited personally at the school office on or before the due date, after which no form will be entertained.</li>
                                <li>Students selectedfor admission will be informed by the school.</li>
                                <li>For admission in Nursery, Date of Birth Certificate (Parents attested photo copy) issued by Municipal Authority must be submitted along with the form.</li>
                                <li>Aadhar Card and Category Certificate(SC/ST/OBC/Minority) must be submitted along with the form.</li>
                                <li>Students who have attended other schools need to submit a Parents attested photo copy of the report card of the last class attended in the previous school.</li>
                                <li>For higher classes, Transfer Certificate in original issued by the previous school will be required at the time of confirmation of admission.</li>
                                <li>Admission secured on the basis of any wrong certificate or false declaration shall be cancelled by the Principal forthwith and no appeal against such action shall be entertained.</li>
                                <li>The last date for the submission of fee will be specified at the time of submission of admission form.</li>
                                <li>Admission will be made strictly on the basis of merit; to the extent seats are available in each class. The School’s decision in this regard will be final.</li>
                                <li>Mere registration carries no guarantee of admission.</li>
                                <li>The fee, once paid, will not be refunded on any ground. The admission offer will automatically stand cancelled if the fee is not deposited within the specified period</li>
                                <li>Documents (photo copy) submitted with the registration cum admission form will not be returned.</li>
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

export default AdmissionPolicy;
