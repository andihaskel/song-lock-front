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
import { Route } from "react-router-dom";
import OrderListPage from "views/OrderList.jsx";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

import { hist } from 'index.js'

class User extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <IconButton aria-label="delete" onClick={hist.goBack}>
                    <ArrowBackIosIcon />
                  </IconButton>
                  <CardTitle className="text-primary" style={{ display: "inline-block" }} tag="h5">New Song</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Title</label>
                          <Input
                            defaultValue=""
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Description</label>
                          <Input
                            defaultValue=""
                            type="textarea"

                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Email Address</label>
                          <Input
                            defaultValue=""
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>Deliverable cost</label>
                          <Input
                            placeholder=""
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <Button
                          className="btn-round"
                          // color="primary"
                          type="submit"
                          style={{ marginLeft: "15px", backgroundColor: "#b2b5b7" }}
                        >
                          Attach Preview Files
                        </Button>

                        <label>These files should ilustrate your work</label>
                      </Col>
                      <Col md="6">

                        <Button
                          className="btn-round"
                          // color="primary"
                          type="submit"
                          style={{ marginLeft: "15px", backgroundColor: "#b2b5b7" }}
                        >
                          Attach Final Work
                        </Button>

                        <label>These files will be released after the client get charged</label>
                      </Col>
                    </Row>


                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user" >
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/order.png")}
                  />
                </div>
                <CardBody>
                  <p className="description text-center">
                    Titulo del entregable</p>
                  <Row>
                    <label className="text-center">
                      Oh so, your weak rhyme You doubt I'll bother, reading into it</label>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Col className="text-right" md="3" xs="3" style={{ display: "inline-block" }}>
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          // outline
                          size="sm"

                        >
                          <i className="fa fa-image" />
                        </Button>
                      </Col>
                      <Col md="7" xs="7" style={{ display: "inline-flex" }}>
                        unArchivo.zip <br />
                        {/* <span className="text-muted">
                          <small>Offline</small>
                        </span> */}
                      </Col>

                    </Col>
                  </Row>

                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col  lg="6" md="6" xs="6">
                        <h5>
                         Total Cost
                        </h5>
                      </Col>
                      <Col  lg="6" md="6" xs="6" style={{float:'right'}}>
                        <h5 style={{marginRight:'-26%'}}>
                          $24,6
                        </h5>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto" style={{marginTop:'4%'}}>
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Submit
                        </Button>
                      </div>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
             
            </Col>

          </Row>
        </div>
      </>
    );
  }
}

export default User;
