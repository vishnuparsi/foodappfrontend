import React from "react"
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
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick
}) => {
  return (
    <div>
       <Card id='card2'><br/>
        <h5 id='h6'>Edit Address</h5>
    <CardBody>
      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>&nbsp;
              <th>Phone Number</th>&nbsp;
              <th>Landmark</th>&nbsp;
              <th>Pincode</th>&nbsp;
              <th>State</th>
                 </tr>
          </thead>
          <tbody>
    <tr>
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        />
      </td>&nbsp;
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        />
      </td>&nbsp;
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Enter landmark..."
          name="landmark"
          value={editFormData.landmark}
          onChange={handleEditFormChange}
        />
      </td>&nbsp;
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Enter pincode..."
          name="pincode"
          value={editFormData.pincode}
          onChange={handleEditFormChange}
        />
      </td>&nbsp;
      <td>
        <Input
          type="state"
          required="required"
          placeholder="Enter an state..."
          name="state"
          value={editFormData.state}
          onChange={handleEditFormChange}
        />
      </td>
      </tr><br/>
      <tr>
      <td>
        <Button type="submit" color='success'>Save</Button></td>
        <td> <Button type="button" onClick={handleCancelClick}> Cancel </Button>
      </td>
    </tr>
    </tbody>
        </table>
        </CardBody> 
         </Card>
    </div>
  )
}

export default EditableRow
