import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Redirect, useHistory} from 'react-router-dom'
import Breadcrumbs from '@components/breadcrumbs'
import "./index.css"
import img1 from '../deliveryboy/location.png'
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

import GlobalVariable from "../../../../path/global"
    const baseApiUrl = GlobalVariable.BASE_API_URL

const pickupdrop = () => {

  const history = useHistory()
  const [pickup, setPickupAddress] = useState()
  const [drop, setDropAddress] = useState()
  const [phone, setPhoneNumber] = useState()
  const [task, setTaskDetails] = useState()
  const [des, setDescription] = useState()
 
    const submitHandler = (e) => {
      e.preventDefault()
      const object = {pickupAddress:pickup, dropAddress:drop, phoneNumber:phone, taskDetails:task, description:des}
      const authAxios = axios.create({
          baseURL: baseApiUrl
        })
        
    //axios.defaults.headers.common['Authorization'] = `Bearer ${useJwt.getToken()}`
    authAxios.post('genie/save', object).then(response => { 
      console.log(response)
      history.push("/apps/ecommerce/checkout/steps/Payment")
  }).catch((err) => {
      console.log(err)
    })
}
const mystyle = {  
  width: "35px",
  height: "35px"
}

  return (
    <div>
     {/*<Breadcrumbs  breadCrumbParent='Genie' breadCrumbParent4='Details'   breadCrumbActive='Pickup-Drop'/>*/}
      
    <center>
    <Card id='card'>
      <CardHeader>
        <CardTitle tag='h3'></CardTitle>
      </CardHeader>

    <CardBody>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col sm='12'>
            <FormGroup>
              <h6> <i class='fas fa-crosshairs'></i>Pickup Address</h6>
              <tr>
              <td><Input type='text' id='name' required placeholder='Enter Pickup Address' onChange = {e => setPickupAddress(e.target.value)} /></td>
             &nbsp; 
             <td><Link to = '/apps/ecommerce/googlemap'>
                <img src={img1} style={mystyle}  alt="no image" className="img"/>
                </Link></td>
                </tr>
            </FormGroup>
          </Col>
          <Col sm='12'>
          <FormGroup>
              <h6>Drop Address</h6>
              <tr>
              <td><Input type='text' id='name' required placeholder='Enter Drop Address' onChange = {e => setDropAddress(e.target.value)} /></td>
              &nbsp; <td>  <Link to = '/apps/ecommerce/googlemap'>
                <img src={img1} style={mystyle}  alt="no image" className="img"/>
                </Link></td>
                </tr>
            </FormGroup>
          </Col>
          <Col sm='12'>
          <FormGroup>
              <h6>Phone Number</h6>
              <tr>
              <td><Input type='number' id='nameVertical'required  placeholder='Enter phone number'onChange = {e => setPhoneNumber(e.target.value)} />
              </td></tr>
            </FormGroup>
          </Col>
          <Col sm='12'>
              <FormGroup>
                <h6>Add Task</h6>
                <tr>
              <td> <select className='custom-select' onChange = {e => setTaskDetails(e.target.value)} >
                    <option  required value="HomeFood">Home Food</option>
                    <option  required value="Documents">Documents</option>
                    <option  required  value="CarePackages">Care Packages</option>
                    <option required  value="Clothes">Clothes</option>
                  </select></td></tr>
              </FormGroup>
            </Col>
            <Col sm='12'>
            <FormGroup>
                <h6>Task Description</h6>
                <tr>
              <td> <Input type='text' id='nameVertical' placeholder='Enter description' required onChange = {e => setDescription(e.target.value)}  />
                </td></tr></FormGroup>
            </Col>

          <Col sm='12'>
          <FormGroup className='flex'>
                  <Button.Ripple className='mr-1' color='primary' type='submit'>
                    Proceed
                  </Button.Ripple>
                </FormGroup>
          </Col>
        </Row>
      </Form>
    </CardBody>      
    </Card>
    </center>
    </div>
   )
  } 
export default pickupdrop
      
