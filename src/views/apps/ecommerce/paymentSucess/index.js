import "./paymentSucess.css"
import { useEffect, useState } from "react"
import { Link, Redirect, useHistory} from 'react-router-dom'
import img1 from '../deliveryboy/deliveryboy.jpg'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
  CustomInput
} from 'reactstrap'

const renderModal = () => {

    return ( 
      
    <center>
    <Card id='card'>
    <br/><br/>
        <h5 id='h5'>Payment Sucess</h5>
    <CardBody>
      <Form >
          <FormGroup>
            <hr/>
              <img  src={img1} alt="no image" className="img"/><br/>
              <h6>Order Recieved</h6>
              <p>Our delivery agent is on the way to deliver</p>
          </FormGroup>
          <br></br>
          <hr/>
      <tr>
     <td>  
       <p id='next'>Place your next order</p>
       </td>
     <td>         
       <Button.Ripple tag={Link} to= '/apps/ecommerce/restaurants'color='primary'>
           Home
       </Button.Ripple>
      </td>
                  </tr>
      </Form>
    </CardBody>      
    </Card>
    </center>
)
}
export default renderModal