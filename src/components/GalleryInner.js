import './Headertop.css';


function GalleryInner() {
  return (
    <div class="padding-y-100 border-bottom border-light wow fadeIn">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-5 text-center">
                    <h4>Gallery</h4>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-6 col-lg-4"><a class="d-block mb-4" data-fancybox="images"
                        href="https://source.unsplash.com/i-FqQIkJMqg/1536x2304" data-width="1536"
                        data-height="2304"><img class="img-fluid" src="https://source.unsplash.com/i-FqQIkJMqg/416x623" />
                    </a><a class="d-block mb-4" data-fancybox="images"
                        href="https://source.unsplash.com/EMSDtjVHdQ8/1279x853" data-width="1279" data-height="853"><img
                            class="img-fluid" src="https://source.unsplash.com/EMSDtjVHdQ8/416x278" /></a></div>
                <div class="col-6 col-lg-4"><a class="d-block mb-4" data-fancybox="images"
                        href="https://source.unsplash.com/eaS5h6mR1BE/1279x719" data-width="1279" data-height="719"><img
                            class="img-fluid" src="https://source.unsplash.com/eaS5h6mR1BE/416x234" /> </a><a
                        class="d-block mb-4" data-fancybox="images"
                        href="https://source.unsplash.com/z55CR_d0ayg/1279x853" data-width="1279" data-height="853"><img
                            class="img-fluid" src="https://source.unsplash.com/z55CR_d0ayg/416x278" /> </a><a
                        class="d-block mb-4" data-fancybox="images"
                        href="https://source.unsplash.com/r0q06hjTgOc/1279x853" data-width="1279" data-height="853"><img
                            class="img-fluid" src="https://source.unsplash.com/r0q06hjTgOc/416x350" /></a></div>
                <div class="col-6 col-lg-4 d-none d-lg-block"><a class="d-block mb-4" data-fancybox="images"
                        href="https://source.unsplash.com/Q1Zyjio6pIM/1279x870" data-width="1279" data-height="870"><img
                            class="img-fluid" src="https://source.unsplash.com/Q1Zyjio6pIM/416x283" /> </a><a
                        class="d-block mb-4" data-fancybox="images"
                        href="https://source.unsplash.com/lw3GfSfGY9w/1519x2279" data-width="1519"
                        data-height="2279"><img class="img-fluid"
                            src="https://source.unsplash.com/lw3GfSfGY9w/416x623" /></a></div>
            </div>
        </div>
    </div>
  );
}

export default GalleryInner;
