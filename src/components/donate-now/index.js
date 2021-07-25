import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class App extends Component{
    state = {
        modal: true, toggle: true
    };
    render() {
        let {toggle,modal} = this.state;
        return (
            <div>
                <Modal isOpen={modal} toggle={()=>{}} className={""}>
                    <ModalHeader toggle={()=>this.props.closeHandler()}>Donate Now</ModalHeader>
                    <ModalBody>
                        <label>Bank Name:</label>
                        <input placeholder={"BOC"} className={"donate-input"}/><br/>

                        <label>Card Number:</label>
                        <input placeholder={"XXXX XXXX XXXX XXXX"} className={"donate-input"}/><br/>

                        <label>Expire Date:</label>
                        <input placeholder={"04/24"} className={"donate-input"}/><br/>

                        <label>CVV Number:</label>
                        <input placeholder={"123"} className={"donate-input"}/><br/>

                        <label>Donate Amount:</label>
                        <input placeholder={"100000"} className={"donate-input"}/><br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>this.props.closeHandler()} className={"donate-btn common-btn+"}>Donate</Button>{' '}
                        <Button color="secondary" onClick={()=>this.props.closeHandler()} className={"donate-btn_ common-btn_"}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default App;
