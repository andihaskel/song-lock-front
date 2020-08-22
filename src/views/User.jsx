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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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

class User extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Balance</p>
                        <CardTitle tag="p">$ 1,345</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="nc-icon nc-money-coins" /> Balance to date
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Orders</p>
                        <CardTitle tag="p">11</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                  <i className="fas fa-globe" /> Over the world
                  </div>
                </CardFooter>
              </Card>
            </Col>



            <Col lg="4" md="12" sm="12">
            <a style={{ cursor: 'pointer' }} onClick={() => console.log('a')}>
              <Card className="card-stats">
                <CardBody>
                  <Row>

                    <Col md="8" xs="7">
                      <div className="numbers" style={{ float: 'left' }}>
                        <p className="card-category"> </p>
                        <CardTitle tag="p">Withdraw</CardTitle>
                        <p />
                      </div>
                    </Col>
                    <Col md="4" xs="5">
                      <IconButton aria-label="delete" style={{
                        width: '1.8em',
                        color: '#51bcda',
                        float: 'right'
                      }}>
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-university" /> Withdraw earnings 
                  </div>
                </CardFooter>
              </Card>
              </a>
            </Col>

          </Row>
          <Row>
            <Col lg="4" md="4">
              <Card className="card-user" style={{height:'28.7em'}}>
                <CardHeader>
                  <CardTitle tag="h5">Payment Details</CardTitle>
                </CardHeader>
                <CardBody>
                  You don't have any payment methods linked to this account
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        style={{ marginTop:'110%' }}
                      >
                        Add Payment Method
                        </Button>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>


            <Col lg="8" md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Account Details</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="8">
                        <FormGroup>
                          <label>Email (disabled)</label>
                          <Input
                            defaultValue="Example@example.com"
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue="Chet"
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue="Faker"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>


                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Password</label>
                          <Input
                            type="password"
                            defaultValue="hola123"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Update Profile
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>




          </Row>
        </div>
      </>
    );
  }
}

export default User;
