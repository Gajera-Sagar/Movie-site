import React from 'react'
import LoginHeader from '../LoginPage/LoginHeader'
import LoginInput from '../LoginPage/LoginInput'
import { useParams } from 'react-router-dom'

export default function SignInForm() {
  let {signin} = useParams()
  return (
    <>
    <LoginHeader signin={signin}/>
    <LoginInput signin={signin}/>
    </>
  )
}
