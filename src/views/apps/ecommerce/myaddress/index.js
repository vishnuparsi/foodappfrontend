import React, { useState, Fragment } from "react"
import { nanoid } from "nanoid"
import "./index.css"
import data from "./mock-data.json"
import ReadOnlyRow from "./ReadOnlyRow"
import EditableRow from "./EditableRow"
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
const myaddress = () => {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    state: "",
    landmark:"",
    pincode:""
  })

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    state: "",
    landmark:"",
    pincode:""
  })

  const [editContactId, setEditContactId] = useState(null)

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    const newContact = {
      id: nanoid,
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      state: addFormData.state,
      landmark: addFormData.landmark,
      pincode: addFormData.pincode

    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      landmark: editFormData.landmark,
      pincode: editFormData.pincode,
      state: editFormData.state
    }

    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === editContactId)

    newContacts[index] = editedContact

    setContacts(newContacts)
    setEditContactId(null)
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault()
    setEditContactId(contact.id)

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      landmark: contact.landmark,
      pincode: contact.pincode,
      state: contact.state
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditContactId(null)
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === contactId)

    newContacts.splice(index, 1)

    setContacts(newContacts)
  }

  return (
    <div className="app-container">
      <Card id='card1'>
  <CardBody>    
      <Form onSubmit={handleAddFormSubmit}>  
      <CardTitle tag='h4'>Add New Address</CardTitle>
      <Label for="fname">Full Name :</Label>
        <Input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <Label for="fname">Address:</Label>
        <Input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
          onChange={handleAddFormChange}
        />
        <Label for="fname">Phone Number:</Label>
        <Input
          type="number"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <Label for="fname">Landmark :</Label>
        <Input
          type="text"
          name="landmark"
          required="required"
          placeholder="Enter landmark..."
          onChange={handleAddFormChange}
        />
        <Label for="fname">Pincode:</Label>
        <Input
          type="number"
          name="pincode"
          required="required"
          placeholder="Enter pincode..."
          onChange={handleAddFormChange}
        />
        <Label for="fname">State:</Label>
        <Input
          type="state"
          name="state"
          required="required"
          placeholder="Enter your state..."
          onChange={handleAddFormChange}
        />
       <center> <Button type="submit"  className='mr-1' color='success'>Add</Button></center>
      </Form>
      </CardBody> </Card>
      <Form onSubmit={handleEditFormSubmit}>
        {/*<table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>State</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>*/}
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          {/*</tbody>
        </table>*/}
      </Form>
      </div>
  )
}

export default myaddress
