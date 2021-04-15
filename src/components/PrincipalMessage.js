import './Headertop.css';
import principal from '../assets/avatar/principal.png';
import sign from '../assets/avatar/sign.png';


function PrincipalMessage() {
  return (
    <div class="paddingTop-80 pb-5 pb-md-0">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6"><img src={principal} alt="" /></div>
                <div class="col-md-6 mt-3">
                    <h2><small class="text-primary d-block">Hello, and </small>welcome to Harvard.</h2>
                    <p class="lead">People make a university great, so whether you are a prospective student, current
                        student, professor.</p>
                    <p>Investig ationes demons trave wanrunt lectores legere liushgfy quod legunt saeph claritas nvestig
                        ationes demons trave rugngt investiga legere liushgfy quod legunt saeph claritas nvestig
                        ationes.</p>
                    <h4 class="mt-2">Drew Faust</h4>
                    <p>President of Harvard University<br />Lincoln Professor of History</p><img src={sign}
                        alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default PrincipalMessage;
