import { Alert, Button, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react'
import ProfileCard from './Profilecard';

const InputFeild = () => {
  const [userId, setUserId] = useState(0);
  const [value, setValue] = useState(null);
  const [isProfileShow, setIsProfileShow] = useState(true);

  const url = `https://reqres.in/api/users/${userId}`;
  const handelClick = (e) => {
    e.preventDefault();
    if (value <= 12) {
      setUserId(value)
      setIsProfileShow(false)
    }else{
      alert("Please Enter digit between 1-12")
    }
  }

  return (
    <div className='card-container'>
       
      {
        isProfileShow ?
          <div className='input-wrapper'>

            <h1>Castler </h1>
            <input type="number" placeholder="Enter the digit between 1-12" onChange={(e) => setValue(e.target.value)}
              className="hide-arrow" />
            <Button variant="contained" color="success" type='submit' aria-required onClick={handelClick}>
              Submit
            </Button>

          </div> : <ProfileCard userId={userId} />
      }

    </div>
  )
}

export default InputFeild