import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import logo from './logo.svg';
import { Container, Row, Col } from 'reactstrap';
const Example = (props) => {
  return (
    <div style={{padding:"0% 3% 3% 3%"}}>
      <Card style={{textAlign:"left"}}>
        <Row style={{display:"flex"}}>
            <Col xs="12">
            <CardBody>
            <CardTitle tag="h3" style={{padding:"0 4%"}}>Project title</CardTitle>
            <Row style={{display:"flex", textAlign:"center"}}>
                <Col xs="2">4 Months</Col>
                <Col xs="2">4 Students</Col>
                <Col xs="1">???</Col>
                <Col xs="3" style={{color:"red"}}>Apply by 22nd Feb</Col>
                <Col xs="3">40 Applications</Col>
            </Row>
            </CardBody>
            </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Example;