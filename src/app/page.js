"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import ClientIDsPage from "./components/ClientIDsPage";
import ClientIDActions from "./components/ClientIDActions";
import ClientIDCreation from "./components/ClientIDCreation";

const Page = () => {
  const [selectedClientID, setSelectedClientID] = useState(null);
  const [clientIDs, setClientIDs] = useState([]);
  const [nextID, setNextID] = useState(1); // Initialize the next ID to 1

  const handleSelectClient = (clientID) => {
    setSelectedClientID(clientID);
  };

  const handleBackToClientIDs = () => {
    setSelectedClientID(null);
  };

  const handleAddClientID = (firstName, lastName) => {
    const newClient = {
      id: nextID,
      firstName: firstName,
      lastName: lastName,
    };
    setClientIDs([...clientIDs, newClient]);
    setNextID(nextID + 1);
  };

  return (
    <div>
      {/* Render the "Add New Client ID" section first */}
      <h2>Add New Client ID</h2>
      <ClientIDCreation onAddClientID={handleAddClientID} />

      {/* Then, render the "Existing Client IDs" section */}
      {selectedClientID ? (
        <ClientIDActions
          clientID={selectedClientID}
          items={[]} // Pass the items array for the selected client ID
          onWithdraw={() => console.log("Withdraw action")}
          onAddItem={() => console.log("Add Item action")}
          onMoveOut={() => console.log("Move Out action")}
          onBack={handleBackToClientIDs}
        />
      ) : (
        <ClientIDsPage clientIDs={clientIDs} onSelectClient={handleSelectClient} />
      )}
    </div>
  );
};

export default Page;
