import './Headertop.css';
import logo from '../assets/logo-black.png';


function Posts() {
  return (
    <div className="paddingTop-50 paddingBottom-100">
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h2 className="mb-4">Facebook Posts</h2>
                    <div className="width-3rem height-4 rounded bg-primary mb-5"></div>
                    <div className="mb-5 wow fadeIn" data-wow-delay=".1">
                        <div className="media mb-3"><span className="iconbox iconbox-lg btn btn-facebook rounded mr-4"><i
                                    className="ti-facebook"></i></span>
                            <div className="media-body">
                                <h5 className="mb-0">EchoTheme</h5><span className="text-gray">3 hours ago</span>
                            </div>
                        </div>
                        <p>Investig ationes demons trave sed vunt lectores kegere do kurus quodk legunt saepius claritas
                            ekist onsec tetur adipi sicing elit, sed kdo claritas ekist.</p><a href="#"
                            className="text-primary">https//.fb.com/pagelink</a>
                    </div>
                    <div className="mb-5 wow fadeIn" data-wow-delay=".2">
                        <div className="media mb-3"><span className="iconbox iconbox-lg btn btn-facebook rounded mr-4"><i
                                    className="ti-facebook"></i></span>
                            <div className="media-body">
                                <h5 className="mb-0">EchoTheme</h5><span className="text-gray">6 hours ago</span>
                            </div>
                        </div>
                        <p>Investig ationes demons trave sed vunt lectores kegere do kurus quodk legunt saepius claritas
                            ekist onsec tetur adipi sicing elit, sed kdo claritas ekist.</p><a href="#"
                            className="text-primary">https//.fb.com/pagelink</a>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <h2 className="mb-4">Latest tweets</h2>
                    <div className="width-3rem height-4 rounded bg-primary mb-5"></div>
                    <div className="mb-5 wow fadeIn" data-wow-delay=".1">
                        <div className="media mb-3"><span className="iconbox iconbox-lg btn btn-twitter rounded mr-4"><i
                                    className="ti-twitter"></i></span>
                            <div className="media-body">
                                <h5 className="mb-0">EchoTheme</h5><span className="text-gray">3 hours ago</span>
                            </div>
                        </div>
                        <p>Investig ationes demons trave sed vunt lectores kegere do kurus quodk legunt saepius claritas
                            ekist onsec tetur adipi sicing elit, sed kdo claritas ekist.</p><a href="#"
                            className="text-primary">https://t.co/rI1M2JlyZG</a>
                    </div>
                    <div className="mb-5 wow fadeIn" data-wow-delay=".2">
                        <div className="media mb-3"><span className="iconbox iconbox-lg btn btn-twitter rounded mr-4"><i
                                    className="ti-twitter"></i></span>
                            <div className="media-body">
                                <h5 className="mb-0">EchoTheme</h5><span className="text-gray">6 hours ago</span>
                            </div>
                        </div>
                        <p>Investig ationes demons trave sed vunt lectores kegere do kurus quodk legunt saepius claritas
                            ekist onsec tetur adipi sicing elit, sed kdo claritas ekist.</p><a href="#"
                            className="text-primary">https://t.co/rI1M2JlyZG</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
  );
}

export default Posts;
