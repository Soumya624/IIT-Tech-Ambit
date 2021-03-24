import React from 'react';
import FooterComponent from './footerComponent';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
    <Form style={{padding: '0 4%'}}>
      <FormGroup>
        <Input type="textarea" name="text" id="exampleText" placeholder="Description"/>
      </FormGroup>
      <FormGroup>
        <Input type="textarea" name="text" id="exampleText" placeholder="Student Responsibilities"/>
      </FormGroup>
      <FormGroup>
        <Input type="email" name="text" id="exampleText" placeholder="Duration(In Months)"/>
      </FormGroup>
      <FormGroup>
        <Input type="email" name="text" id="exampleText" placeholder="Stippend(Per Month)"/>
      </FormGroup>
      <FormGroup>
        <Input type="email" name="text" id="exampleText" placeholder="No of Students Required"/>
      </FormGroup>
      <FormGroup>
        <Input type="email" name="text" id="exampleText" placeholder="Deadline to Apply"/>
      </FormGroup>
      <FormGroup>
        <Input type="textarea" name="text" id="exampleText" placeholder="Tags"/>
      </FormGroup>
      <FormGroup>
        <Input type="email" name="text" id="exampleText" placeholder="Additional Details"/>
      </FormGroup>
      <br/>
      <Button style={{margin:'5px', backgroundColor:"#0F8797", color:"white"}}>Save</Button>
      <Button style={{margin:'5px', backgroundColor:"#0F8797", color:"white"}}>Post</Button>
      <br/>
    </Form>
    <br/>
    <FooterComponent/>
    </div>
  );
}

export default Example;