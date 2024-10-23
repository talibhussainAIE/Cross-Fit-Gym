import React, { useState, useEffect } from "react";
import "./UserTable.css"; // Optional CSS file for styling the table

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch(`http://localhost:5001/fetched`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resJson = await response.json();
    if (!resJson.error) {
      setUsers(resJson.users);
    }
  };
  const deleteUser = async (id) => {
    const response = await fetch(`http://localhost:5001/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const resJson = await response.json();
    fetchUsers();
    if (!resJson.error) {
      setUsers(resJson.users);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const handleDeleteAll = () => {
    // Call setUsers with an empty array to clear all users
    // setUsers([]);
  };

  return (
    <div className="table-container">
      {users?.length > 0 && <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>}      
      <button onClick={handleDeleteAll} className="delete-button">
        Delete All Users
      </button>
    </div>
  );
};

export default UserTable;
