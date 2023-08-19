import React, { useEffect, useState } from "react";
import { getData, deleteData } from "../Api/Api";
import { Link } from "react-router-dom";

const List = () => {
  const [data, setData] = useState([]);
  const getAllData = async () => {
    const result = await getData();
    console.log(result);
    setData(result.data);
  };
  const removeData = (id) => {
    deleteData(id);
    getAllData();
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      <div>
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col"><u>id</u></th>
              <th scope="col"><u>Name</u></th>
              <th scope="col"><u>Email</u></th>
              <th scope="col"><u>Number</u></th>
              <th colspan="2"><u>Action</u></th>
            </tr>
          </thead>
          <tbody>
            {data.map((res) => {
              console.log(res);
              const { id, name, email, number } = res;
              return (
                <tr>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{number}</td>
                  <Link to={`/update/${id}`}>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                    </td>
                  </Link>

                  <td>
                    <button className="btn btn-danger"
                      onClick={() => {
                        removeData(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
