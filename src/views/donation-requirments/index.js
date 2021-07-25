import React, {Component} from 'react';
import Navbar from "../../components/navbar";
import Statics from "../landing/statics";
import DonationRequiremtns from "../landing/donation-requirements";

class App extends Component {
    render() {
        return (
            <div>
                {/* navbar */}
                <Navbar current={2} />
                {/* donation requirements */}
                <DonationRequiremtns isLanding={false}/>
            </div>
        );
    }
}

export default App;
