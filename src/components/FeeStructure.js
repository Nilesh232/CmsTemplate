import './Headertop.css';
import welcome from '../assets/welcome.jpg';
import Notice from './Notice';
import AdmissionNotificationInner from './AdmissionNotificationInner';


function FeeStructure() {
  return (
    <section class="padding-y-60 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mt-4">
                    <div class="card shadow-v1">
                        <div class="card-body padding-40">
                           <h4>Fee Structure for 2021-22</h4>
                           <p>1. For the academic session 2021-22, the fee structure for various classes is as under –</p>
                           <ul>
                                <li>Admission Fee – 5,500/- (One time payment for the new student at the time of Admission)</li>
                                <li>Annual Fee – 7,500/- (Nursery to HKG; Once each year for all students)
                                    </li><li>Annual Fee – 8000/- (1st to 5th)</li>
                                    <li>Annual Fee – 8,500/- (6th to 12th)</li>
                                <li>Tuition Fee – As below</li>
                            </ul>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <td>Class</td>
                                    <td>Admission<br />
                                    Fee (New<br />
                                    Admission, One<br />
                                    time only) [A]</td>
                                    <td>Annual<br />
                                    Fee<br />
                                    [B]</td>
                                    <td>Tuition Fees<br />
                                    Per Quarter<br />
                                    [C]</td>
                                    <td>Tuition Fees<br />
                                    (Annual)<br />
                                    [D]</td>
                                    <td>Yearly Payment<br />
                                    (New Student)<br />
                                    [A+B+D]</td>
                                    <td>Yearly Payment<br />
                                    Fee (Old Student)<br />
                                    B+D</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Play-Group</td>
                                    <td>5500</td>
                                    <td>&nbsp;</td>
                                    <td>5250</td>
                                    <td>21000</td>
                                    <td>26500</td>
                                    
                                <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>NUR-HKG</td>
                                    <td>5500</td>
                                    <td>7500</td>
                                    <td>7150</td>
                                    <td>28600</td>
                                    <td>41600</td>
                                    <td>36100</td>

                                </tr>
                                <tr>
                                    <td>I – V</td>
                                    <td>5500</td>
                                    <td>8000</td>
                                    <td>7750</td>
                                    <td>31000</td>
                                    <td>44500</td>
                                    <td>39000</td>

                                </tr>
                                <tr>
                                    <td>VI-VIII</td>
                                    <td>5500</td>
                                    <td>8500</td>
                                    <td>8400</td>
                                    <td>33600</td>
                                    <td>47600</td>
                                    <td>42100</td>

                                </tr>
                                <tr>
                                    <td>IX – X</td>
                                    <td>5500</td>
                                    <td>8500</td>
                                    <td>9900</td>
                                    <td>39600</td>
                                    <td>53600</td>
                                    <td>48100</td>

                                </tr>
                                <tr>
                                    <td>XI – XII (Sc.)</td>
                                    <td>5500</td>
                                    <td>8500</td>
                                    <td>&nbsp;</td>
                                    <td>33500</td>
                                    <td>47500</td>
                                    <td>42000</td>

                                </tr>
                                <tr>
                                    <td>XI – XII (Comm.)</td>
                                    <td>5500</td>
                                    <td>8500</td>
                                    <td>&nbsp;</td>
                                    <td>33500</td>
                                    <td>47500</td>
                                    <td>42000</td>

                                </tr>
                                </tbody>
                            </table>

                            <ul>
                            <li> Annual fee shall be paid along with the 1st quarter Tuition Fee.</li>
                            <li> Fee Concession: 10% discount in tuition fee will be given to the younger sibling whose real brothers or sisters study in the school.</li>
                            <li> Application for Transfer Certificate should be given on or before the due date of that particular quarter failing which full fee for the quarter shall be charged. Admission Fee will be not be refunded under any circumstances.</li>
                            <li> School fee payment schedule for all students is as follows:-</li>
                            </ul>
                            <br/>
                            <h3>For Class Play Group To X</h3>
                            <table cellspacing="0" cellpadding="0" class="table table-bordered">
                            <thead>
                                <tr>
                                <th>Quarter</th>
                                <th>Due Date</th>
                                <th>Grace Date</th>
                                <th>Fine @ Rs.100/</th>
                                <th>Fine @ Rs.200/</th>
                                <th>Last Date for Fee Submission</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                <td>First (For new Admission) </td>
                                <td>7th April, 2021</td>
                                <td>15 April, 2021</td>
                                <td>Up to 25th April, 2021</td>
                                <td>Up to 05th May, 2021</td>
                                <td>05th May, 2021</td>
                                </tr>
                                <tr>
                                <td>Second</td>
                                <td>7th July, 2021</td>
                                <td>15 July, 2021</td>
                                <td>Up to 25th July, 2021</td>
                                <td>Up to 05th August, 2021</td>
                                <td>05th Aug, 2021</td>
                                </tr>
                                <tr>
                                <td>Third</td>
                                <td>7th Oct, 2021</td>
                                <td>15 Oct, 2021</td>
                                <td>Up to 25th Oct, 2021</td>
                                <td>Up to 05th Nov, 2021</td>
                                <td>05th Nov, 2021</td>
                                </tr>
                                <tr>
                                <td>Fourth</td>
                                <td>7th Jan, 2022</td>
                                <td>15 Jan, 2022</td>
                                <td>Up to 25th Jan, 2022</td>
                                <td>Up to 05th Feb, 2022</td>
                                <td>05th Feb, 2022</td>
                                </tr>
                            </tbody>
                            </table>
                            <br/>
                            <h3>For Class XI & XII</h3>
                            <table class="table table-bordered">
                            <thead>
                                <tr>
                                <th>Quarter</th>
                                <th>Due Date</th>
                                <th>Grace Date</th>
                                <th>Fine @ Rs.100/</th>
                                <th>Fine @ Rs.200/</th>
                                <th>Last Date for Fee Submission</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                <td>First (For New Ad.)</td>
                                <td>At the time of admission</td>
                                <td>–</td>
                                <td>–</td>
                                <td>–</td>
                                <td>–</td>
                                </tr>
                                <tr>
                                <td>First (For Existing)</td>
                                <td>10th April, 2021</td>
                                <td>15th April, 2021</td>
                                <td>Up to 30th April, 2021</td>
                                <td>Up to 10th May, 2021</td>
                                <td>10th May, 2021</td>
                                </tr>
                                <tr>
                                <td>Second</td>
                                <td>10th Sep, 2021</td>
                                <td>15th Sep, 2021</td>
                                <td>Up to 30th Sep, 2021</td>
                                <td>Up to 10th Oct, 2021</td>
                                <td>10th Oct, 2021</td>
                                </tr>
                                <tr>
                                <td>Third</td>
                                <td>10th Dec, 2021</td>
                                <td>15th Dec, 2021</td>
                                <td>Up to 30th Dec, 2021</td>
                                <td>Up to 10th Jan, 2022</td>
                                <td>10th Jan, 2022</td>
                                </tr>
                            </tbody>
                            </table>
                            <br/>
                            <p>Note :</p>
                            <ol>
                            <li>AdmissionFee(OneTime,onlyfornewadmission)andAnnualfeeshallbepaidalongwiththe1 quarterTuitionFee.</li>
                            <li>Fee Concession: 10% discount in tuition fee will be given to the younger sibling whose real brothers or sisters study in the school.</li>
                            <li>On expiry of last date of a particular Quarter, the name of the student will be struck off. Readmission will be given on against payment of Admission fee and deposition of due fee.</li>
                                <li>Application for Transfer Certificate should be given on or before the due date of that particular quarter failing which full fee for the quarter shall be charged. Admission Fee will be not be refunded under any circumstances.</li>
                                <li>The fee, once paid, will not be refunded on any ground. The admission offer will automatically stand cancelled if the fee is not deposited within the specified period.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <AdmissionNotificationInner/>
            </div>
        </div>
    </section>
  );
}

export default FeeStructure;
