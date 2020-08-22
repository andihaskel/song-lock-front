/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Modal from "../components/OrderModal.jsx"
import moment from "moment";
import ShareModal from "../components/Modals/ShareModal.jsx";



// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Row,
    Col,
    Button,
    CardImg,
    Popover, PopoverHeader, PopoverBody
} from "reactstrap";

import { hist } from 'index.js'

class SongsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
            popoverOpen: false,
            red: false
        }
        this.toggle = this.toggle.bind(this);
    }


    toggle = () => {
        this.setState({ openModal: !this.state.openModal })
    }
    togglePopover = () => {
        this.setState({ popoverOpen: !this.state.popoverOpen })
    }

    handleCreateOrder() {

        hist.push('/create-song');
    }

    navigateToSong = () => {
        hist.push('/song/acontracorriente');
    }

    

    render() {
        return (
            <>
                <div className="content">
                    {/* <Modal isOpen={this.state.openModal} toggle={this.toggle} /> */}
                    <Row>
                        <Col md="12">

                            {/* <CardTitle tag="h4" style={{ display: 'inline-block' }}>Pending orders</CardTitle> */}
                            <Button
                                className="btn-round"
                                color="primary"
                                type="submit"
                                style={{ float: 'right' }}
                                onClick={this.handleCreateOrder}
                            >
                                Create New Song
                        </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Card>
                                <CardBody>
                                    <CardTitle>A CONTRACORRIENTE</CardTitle>
                                    <CardImg top width="100%" src={require("assets/img/a-contra.png")} style={{maxHeight:'250px' }} alt="Card image cap" />
                                    <CardText>
                                        {moment().format("DD-MM-YYYY").toString()} <br/>
                                        Primera version a contracorriente
                                    </CardText>
                                    <Button style={{width: '100%'}} onClick={() => this.toggle()}>Share</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <ShareModal 
                        className=''
                        isOpen={this.state.openModal}
                        onClose={() => this.toggle()}

                    />
                </div>
            </>
        );
    }
}

export default SongsList;
