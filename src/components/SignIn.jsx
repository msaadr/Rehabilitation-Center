import React from 'react'
import Auth from "./Auth"
import "./SignIn.css";
function SignIn(props){
    return (
      <>
  <Auth signin={props.signin} setData={props.setData}/>

      </>
    );
}
export default SignIn;