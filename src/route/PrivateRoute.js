import React from 'react'
import { Navigate } from 'react-router-dom'
import Productdetail from '../page/Productdetail'

const PrivateRoute = ({authenticate}) => {
  return (
    authenticate==true?<Productdetail/>:<Navigate to="/login"/>
  )
}

export default PrivateRoute
