import './Headertop.css';
import welcome from '../assets/welcome.jpg';
import Notice from './Notice';
import AdmissionNotificationInner from './AdmissionNotificationInner';


function AdmissionProcedure() {
  return (
    <section class="padding-y-60 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mt-4">
                    <div class="card shadow-v1">
                        <div class="card-body padding-40">
                            <div >
                                <img src="http://www.globalpublicschool.com/wp-content/uploads/2019/09/Admission-Procedure.jpg" />
                            </div>
                            <br/>
                           <h4>Admission Procedure</h4>
                           <p>Parents can obtain the registration form and the prospectus on payment of Rs.200/- in cash from the school office. It can also be downloaded and the duly filled form should be submitted to the office within 5 working days.</p>
                           <ul>
                                <li>Registration form to be legibly filled and submitted at the school office with all relevant documents.</li>
                                <li>Registration form which is incomplete and non submission of relevant documents will not be accepted.</li>
                                <li>Please note registration does not guarantee admission.</li>
                                <li>The schedule of the SAT/MAT to be conducted will be communicated while submitting the registration form.</li>
                                <li>Upon offer of the seat, the fee is payable within the specified dates.</li>
                                <li>Admission will be made strictly on the basis of merit of the entrance examination from class III to the extent seats are available in each class. The school’s decision in this regard will be final.</li>
                                <li>The school has the authority to grant the seat to someone else in case of non communication and non receipt of fee and documents within the stipulated time.</li>
                            </ul>
                            <h3>Documents For Submission At The Time Of Admission</h3>
                            <ul>
                                <li>Four recent passport size color photographs.</li>
                                <li>Date of birth proof (Issued by Municipal Corporation or any authorized competent authority).</li>
                                <li>Copy of Caste certificate if applicable (issued by competent authority); original needs to be shown for verification.</li>
                                <li>Copy of the report card of the last assessment of the current year</li>
                                <li>Transfer Certificate (Duly Countersigned by concerned authority) to be submitted after the completion.</li>
                                <li>Migration Certificate (If applicable)</li>
                            </ul>
                            <p>It will be the personal responsibility of the parent to inform the school in writing, if the student is undergoing any medical treatment / medical ailment / allergies etc. at the time of registration.</p>
                        </div>
                    </div>
                </div>
                <AdmissionNotificationInner/>
            </div>
        </div>
    </section>
  );
}

export default AdmissionProcedure;
