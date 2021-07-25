import React, {Component} from 'react';
import Navbar from "../../components/navbar";
import Phone from '../../assets/contact/phone.png';
import Email from '../../assets/contact/email.png';
import Location from '../../assets/contact/location.png';

class App extends Component {
    render() {
        return (
            <div>
                {/* navbar */}
                <Navbar current={5} />

                <div className="container" style={{paddingTop:'115px'}}>

                    <div className="row" style={{textAlign:'center'}}>
                        <div className="col-md-6 col-lg-4 align-items-stretch aos-init aos-animate" data-aos="zoom-in"
                             data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon"><img style={{width: '55px', height: '55px', obejctFit:'contain'}} src={Phone}/></div>
                                <br/>
                                    <h4 className="title"><span href="">Phone</span></h4>
                                    <p className="description">Please call us and we will be happy to assist you. We
                                        work with you, not
                                        for you.
                                    </p>

                                    <div style={{paddingTop: '20px'}}>
                                        <h4><b>(+94) 716 324 148</b></h4>
                                    </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 align-items-stretch aos-init aos-animate" data-aos="zoom-in"
                             data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><img style={{width: '55px', height: '55px', obejctFit:'contain'}} src={Email}/></div>
                                <br/>
                                    <h4 className="title"><span href="">Email</span></h4>
                                    <p className="description">Please email contact form and we will be happy to assist
                                        you. We work
                                        with you, not for you.</p>
                                    <div style={{paddingTop: '20px'}}>
                                        <h4><b>info@donation.com</b></h4>
                                    </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 align-items-stretch aos-init aos-animate" data-aos="zoom-in"
                             data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><img style={{width: '55px', height: '55px', obejctFit:'contain'}} src={Location}/></div>
                                <br/>
                                    <h4 className="title"><span href="">Location</span></h4>
                                    <p className="description">Galle Road, <br/> Colombo.</p>
                                    <p className="description"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
