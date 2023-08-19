import React, { useState } from "react";
import { addData } from "../Api/Api";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const redirect= useNavigate()
    const [input,setInput]=useState({
        name:"",
        email:"",
        number:""
    })
    const {name,email,number}=input
    const textHandle=(e)=>{
setInput({...input,[e.target.name]:e.target.value})

    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
      await addData(input)
redirect("/list")

    }


  return (
    <div className="container mt-3 border border-dark rounded">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label for="name" className="col-sm-2 col-form-label font-weight-bold">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              
              className="form-control-plaintext"
              
              name="name"
              value={name}
              onChange={textHandle}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="email" className="col-sm-2 col-form-label font-weight-bold">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              
              className="form-control-plaintext"
            
              name="email"
              value={email}
              onChange={textHandle}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="number" className="col-sm-2 col-form-label font-weight-bold">
            Number
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              
              name="number"
              value={number}
              placeholder="number"
              onChange={textHandle}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
      <br/>
    </div>
  );
};

export default Register;
