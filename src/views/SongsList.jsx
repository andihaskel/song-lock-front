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


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Popover, PopoverHeader, PopoverBody
} from "reactstrap";

import { hist } from 'index.js'

class SongsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openModal: false,
      popoverOpen: false,
      red:false
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
  
  toggle = () => {
    this.setState({ red: !this.state.red });
  };

  render() {
    return (
      <>
        <div className="content">
          <Modal isOpen={this.state.openModal} toggle={this.toggle} />
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
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
                </CardHeader>

                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Title</th>
                        <th>Date Created</th>
                        <th>Last Version</th>
                        <th>Milestones</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr onClick={() => {this.navigateToSong()}}
                           onMouseEnter={this.toggle}
                           onMouseLeave={this.toggle}
                           style={{ background: this.state.red ? "#676565" : "" }}
                      >
                        <td>Reglas del juego</td>
                        <td>04/10/2020</td>
                        <td>04/27/2020</td>
                        <td>4</td>
                        <td>Unreleased</td>
                       
                      </tr>
                      <tr>
                        <td>A contracorriente</td>
                        <td>04/10/2020</td>
                        <td>04/28/2020</td>
                        <td>3</td>
                        <td>Released</td>
                       
                      </tr>
                     
                    
                      <tr>
                        <td>Una noche sin cafe</td>
                        <td>04/10/2020</td>
                        <td>04/28/2020</td>
                        <td>3</td>
                        <td>Released</td>
                       
                      </tr>

                      <tr>
                        <td>Pensar</td>
                        <td>04/10/2020</td>
                        <td>04/28/2020</td>
                        <td>3</td>
                        <td>Released</td>
                        
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </div>
      </>
    );
  }
}

export default SongsList;
