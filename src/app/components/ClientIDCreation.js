"use client";
import React, { useState } from "react";

const ClientIDCreation = ({ onAddClientID, onBack }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddClientID(firstName, lastName);
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <h2>Add New Client</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Add Client ID</button>
        <br />
        <br />
        <br />
        <button onClick={onBack}>Back</button>
      </form>
    </div>
  );
};

export default ClientIDCreation;
