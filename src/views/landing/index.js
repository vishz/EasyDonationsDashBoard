import React, {Component} from 'react';
import Navbar from '../../components/navbar';
import {UncontrolledCarousel} from "reactstrap";
import './style.scss';
import Carousel1 from '../../assets/landing/carousel/carousel-1.jpg'
import Carousel2 from '../../assets/landing/carousel/carousel-2.gif'
import Carousel3 from '../../assets/landing/carousel/carousel-3.jpg'
import Carousel4 from '../../assets/landing/carousel/carousel-4.jpg'

import AboutDonations from './about-donation';
import Statics from './statics';
import DonationRequiremtns from './donation-requirements';
import DonatingSteps from './donation-steps';
import DonatingMethod from './donation-method';
import RegisteredHospitals from './registered-hospitals';
import RecentDonors from './recent-donors';
import Feedbacks from './feedbacks';
import DonateNow from '../../components/donate-now'



class App extends Component {
    state = {
        isDonate: false
    };

    render() {
        let {isDonate} = this.state;

        let caption = <div className={"donate-modal"}>
            <p>Let's practice to donate</p>
            <button className={"donate-btn"} onClick={()=>this.setState({isDonate: true})}>Donate Now</button>
        </div>;

        const items = [
            {
                src: Carousel1,
                altText: 'carousel-caption',
                className: 'overide-homepage-carousel',
                header: caption
            },
            {
                src: Carousel2,
                altText: 'carousel-caption',
                className: 'overide-homepage-carousel',
                header: caption,
            },
            {
                src: Carousel3,
                altText: 'carousel-caption',
                className: 'overide-homepage-carousel',
                header: caption,
            },
            {
                src: Carousel4,
                altText: 'carousel-caption',
                className: 'overide-homepage-carousel',
                header: caption,
            }
        ];

        return (
            <div className={"landing-wrapper"}>
                {/* navbar */}
                <Navbar current={1}/>
                {/* main carousel */}
                <UncontrolledCarousel items={items} controls={true}/>
                {/* about donations */}
                <AboutDonations/>
                {/* statics */}
                <Statics/>
                {/* donation requirements */}
                <DonationRequiremtns isLanding={true}/>
                {/* donating steps */}
                <DonatingSteps/>
                {/* donate method */}
                <DonatingMethod/>
                {/* registered hospitals*/}
                <RegisteredHospitals/>
                {/* recent donors */}
                <RecentDonors/>
                {/* feedbacks */}
                <Feedbacks/>

                {/* donate now*/}
                {isDonate && <DonateNow closeHandler={()=>this.setState({isDonate: false})}/>}
            </div>
        );
    }
}


export default App;
