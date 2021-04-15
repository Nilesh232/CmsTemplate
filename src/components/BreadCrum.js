
import './Headertop.css';
import breadcrumb from '../assets/breadcrumb.jpg';


function BreadCrum() {
  return (
    <div class="padding-y-60 bg-cover" data-dark-overlay="6"
        style={{ background: `url(${breadcrumb})` }}>
        <div class="container">
            <h1 class="text-white">Events</h1>
            <ol class="breadcrumb breadcrumb-double-angle text-white bg-transparent p-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">Events</li>
            </ol>
        </div>
    </div>
            
  );
}

export default BreadCrum;
