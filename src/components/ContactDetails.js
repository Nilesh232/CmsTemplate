import './Headertop.css';


function ContactDetails() {
  return (
    <div class="py-5 shadow-v2 position-relative">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 mt-4">
                    <div class="media"><span class="iconbox iconbox-md bg-primary text-white"><i
                                class="ti-mobile"></i></span>
                        <div class="media-body ml-3">
                            <h5 class="mb-0">1-800-643-4500</h5>
                            <p>Call Us (8AM-10PM)</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    <div class="media"><span class="iconbox iconbox-md bg-primary text-white"><i
                                class="ti-email"></i></span>
                        <div class="media-body ml-3"><a href="mailto:support@echotheme.com"
                                class="h5">support@echotheme.com</a>
                            <p>Call Us (8AM-10PM)</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    <div class="media"><span class="iconbox iconbox-md bg-primary text-white"><i
                                class="ti-location-pin"></i></span>
                        <div class="media-body ml-3">
                            <h5 class="mb-0">New York Avenue, USA</h5>
                            <p>Unit 25 Suite 3, 925 Prospect</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ContactDetails;
