
import React from 'react'
import {   Form,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap';



const AddUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>
          <Input type="text"  placeholder="Enter Name"></Input>
        </Label>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}


export default AddUser;
