import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom'
import LoginOuthGoogle from "./LoginOuthGoogle"
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
  

const Login = () => {

    const [Email, setemail] = useState()
    const [pwd, setpassword] = useState()
    const [message, setMessage] = useState("")
    const history = useHistory()

const submitHandler = (e) => {
    e.preventDefault()
    const object = {email:Email, password:pwd}
    const authAxios = axios.create({
        baseURL: baseApiUrl
    })


    //axios.defaults.headers.common['Authentication'] = `Bearer ${useJwt.getToken()}`
    authAxios.post('users/login', object).then(response => {
        const status = response.status
        setMessage("successfull")
        history.push("/apps/ecommerce/checkout")
    }).catch((err) => {
        console.log(err)
    })
       
}

    useEffect(() => {
        setMessage("")
    }, [Email]) 

    
    return (

        <Card>
            <CardHeader>
                <CardTitle tag='h3'>Login</CardTitle>
            </CardHeader>

        {message === "successfull" ? (
            <b style={{ color: "green"}}> &nbsp;&nbsp; User Loggedin Successfully</b>
        ) : (
            <div></div>
        
        )}   

        <CardBody>
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col sm='12'>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type='text' id='emailVertical' required placeholder='email@example.com' onChange = {e => setemail(e.target.value)}/>                            
                        </FormGroup>
                    </Col>
                    <Col sm='12'>
                        <FormGroup>
                            <Label>password</Label>
                            <Input type='password' id='passwordVertical' required placeholder='Enter password' onChange = {e => setpassword(e.target.value)}/>
                        </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup className='flex'>
                    <Button.Ripple className='mr-1' color='primary' type='submit'>
                    Login
                  </Button.Ripple>

                  <Button.Ripple tag={Link} to='/apps/ecommerce/Register' className='mr-1' color='success' type='submit'>
                    Register 
                  </Button.Ripple><br/><br/>
                  <span>Sign in with google</span>
                  <LoginOuthGoogle/>
                    </FormGroup>
                    </Col>
                </Row>
            </Form>
        </CardBody>

        </Card>
    )
       
}
export default Login