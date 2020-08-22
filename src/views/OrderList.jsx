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
import OrderPage from './song/Song.jsx';




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

class OrderList extends React.Component {
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

    hist.push('/create-order');
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>

            <Col md="12">
              <Card>
                <CardHeader>
                  {/* <CardTitle tag="h4" style={{display:'inline-block'}}>Previous orders</CardTitle> */}
                  <Button
                    className="btn-round"
                    color="primary"
                    type="submit"
                    style={{ float: 'right' }}
                    onClick={this.handleCreateOrder}
                  >
                    Create New Order
                        </Button>
                </CardHeader>

                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Title</th>
                        <th>Client</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th className="text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>Pending</td>
                        <td className="text-right">$36,738</td>
                        <td>
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            // outline
                            size="sm"
                            onClick={this.toggle}
                          >
                            <i className="fa fa-eye" />
                          </Button>
                          <Button
                            id="delete"
                            className="btn-round btn-icon"
                            color="danger"
                            // outline
                            size="sm"
                            style={{ marginLeft: '5%' }}
                          >
                            <i className="fa fa-trash" />
                          </Button>
                          <Popover trigger="focus" placement="bottom" isOpen={this.state.popoverOpen} target="delete" toggle={this.togglePopover}>
                            <PopoverHeader>Are you sure you want to delete this order?</PopoverHeader>
                            <PopoverBody>
                              <Col md="6"
                                style={{ display: 'inline-block' }}

                              >
                                <Button
                                  color="primary"
                                  style={{ width: '90%' }}
                                >
                                  Yes
                                </Button>
                              </Col>
                              <Col md="6"
                                style={{ display: 'inline-block' }}

                              >
                                <Button
                                  color="danger"
                                  style={{ width: '90%' }}

                                >
                                  No
                                </Button>
                              </Col>
                            </PopoverBody>
                          </Popover>
                        </td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td>Pending</td>
                        <td className="text-right">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td>Pending</td>
                        <td className="text-right">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td>Pending</td>

                        <td className="text-right">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td>Pending</td>

                        <td className="text-right">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td>Pending</td>

                        <td className="text-right">$78,615</td>
                      </tr>

                      <tr>
                        <td>Jon Porter</td>
                        <td>Portugal</td>
                        <td>Gloucester</td>
                        <td>Pending</td>

                        <td className="text-right">$98,615</td>
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

export default OrderList;
