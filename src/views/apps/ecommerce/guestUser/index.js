import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Redirect, useHistory} from 'react-router-dom'
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
  CustomInput,
    InputGroup,
  InputGroupText,
  InputGroupAddon
} from 'reactstrap'
import { User, Mail, Smartphone } from 'react-feather'

import GlobalVariable from "../../../../path/global"
    const baseApiUrl = GlobalVariable.BASE_API_URL


const guestUser = () => {

  const [username, setUserName] = useState()
  const [Email, setEmail] = useState()
  const [phNum, setPhoneNumber] = useState()
  const [message, setMessage] = useState("")
  const history = useHistory()

const submitHandler = (e) => {
    e.preventDefault()
    const object = {userName:username, email:Email, phoneNumber:phNum}
    const authAxios = axios.create({
      baseURL: baseApiUrl
    })


    //axios.defaults.headers.common['Authorization'] = `Bearer ${useJwt.getToken()}`
    authAxios.post('users/guestLogin', object).then(response => {
        console.log(response)
        setMessage("successfull")
        history.push("/apps/ecommerce/checkout")
    }).catch((err) => {
      console.log(err)
    })
}

    useEffect(() => {
      setMessage(" ")
    }, [username])

  return (
    
    <Card>
      <CardHeader>
        <CardTitle tag='h3'>Guest User</CardTitle>
      </CardHeader>

    {message === "successfull" ? (
          <b style={{ color: "green"}}> &nbsp;&nbsp; User Added Successfully</b>
    ) : (
      <div></div>
    )}

    <CardBody>
      <Form onSubmit={submitHandler}>
        <Row>
        <Col sm='12'>
              <Label for='nameVerticalIcons'>Full Name</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <User size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input  type='text' id='nameVertical' required placeholder='Enter full name' onChange = {e => setUserName(e.target.value)}/>
              </InputGroup>
            </Col>  
            <Col sm='12'>
              <Label for='EmailVerticalIcons'>Email</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Mail size={15} />
                  </InputGroupText>
                </InputGroupAddon>
              <Input type='text' id='nameVertical' required placeholder='email@example.com' onChange = {e => setEmail(e.target.value)}/>
              </InputGroup>
            </Col>
            <Col sm='12'>
              <Label for='IconsMobile'>Phone Number</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Smartphone size={15} />
                  </InputGroupText>
                </InputGroupAddon>
              <Input type='number' id='nameVertical' required placeholder='Enter phone number' onChange = {e => setPhoneNumber(e.target.value)}/>
              </InputGroup>
            </Col>
          <Col sm='12'>
          <FormGroup className='flex'>
                  <Button.Ripple className='mr-1' color='primary' type='submit'>
                    Proceed
                  </Button.Ripple>
                  <Button.Ripple tag={Link} to='/apps/ecommerce/login' outline color='secondary'>
                    Login
                  </Button.Ripple>
                </FormGroup>
          </Col>
        </Row>
      </Form>
    </CardBody>      
    </Card>
    
   )
  } 
export default guestUser
      
