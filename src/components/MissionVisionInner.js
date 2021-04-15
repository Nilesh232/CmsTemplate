import './Headertop.css';
import mission from '../assets/event/1.jpg';
import vision from '../assets/event/2.jpg';


function MissionVisionInner() {
  return (
    <div class="paddingTop-80 pb-5 pb-md-0">
        <div class="container" style= {{ paddingBottom:'50px' }}>
            <div class="row align-items-center">
                <div class="col-md-6" style= {{ textAlign:'center' }}><img src={mission} alt="" /></div>
                <div class="col-md-6 mt-3">
                    <h2>Mission</h2>
                    <p class="lead">People make a university great, so whether you are a prospective student, current
                        student, professor.</p>
                    <p>Investig ationes demons trave wanrunt lectores legere liushgfy quod legunt saeph claritas nvestig
                        ationes demons trave rugngt investiga legere liushgfy quod legunt saeph claritas nvestig
                        ationes.</p>
                </div>
            </div>
        </div>
        <div class="container" style= {{ paddingBottom:'50px' }}>
            <div class="row align-items-center">
                <div class="col-md-6 mt-3">
                    <h2>Vision</h2>
                    <p class="lead">People make a university great, so whether you are a prospective student, current
                        student, professor.</p>
                    <p>Investig ationes demons trave wanrunt lectores legere liushgfy quod legunt saeph claritas nvestig
                        ationes demons trave rugngt investiga legere liushgfy quod legunt saeph claritas nvestig
                        ationes.</p>
                </div>
                <div class="col-md-6" style= {{ textAlign:'center' }}><img src={vision} alt="" /></div>
            </div>
        </div>
    </div>
    
  );
}

export default MissionVisionInner;
