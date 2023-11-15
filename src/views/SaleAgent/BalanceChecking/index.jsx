import React, { Fragment } from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap'

const index = () => {
  return (

    <Fragment>
      <FormGroup className='inner-form-field'>
        <Label for="text">Balance</Label>
        <Input
          type="text"
          name="balance"
          id="balance"
          // value={formData.email}
          placeholder='435'
          // onChange={handleChange}
          disabled
        />
      </FormGroup>
      <Button className='btn-login mx-2' onClick={() => handleNavigation(property.email, "access")}>
        Withdraw
      </Button>
    </Fragment>
  )
}

export default index