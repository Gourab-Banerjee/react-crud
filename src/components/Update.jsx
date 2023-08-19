import React, { useEffect, useState } from "react";
import { getData, updateData } from "../Api/Api";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
  });
  const { name, email, number } = input;
  const redirect = useNavigate();
  const { id } = useParams();
  const textHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateData(id, input);
    redirect("/list");
  };
  const loadData = async () => {
    const res = await getData(id);
    console.log(res.data);
    setInput(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

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
              onChange={textHandle}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-secondary">Update</button>
        
      </form>
      <br/>
    </div>
  );
};

export default Update;
