"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import ClientIDsPage from "./ClientIDsPage";
import ClientIDActions from "./ClientIDActions";
import ClientIDCreation from "./ClientIDCreation";

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
        <div>
          <ClientIDsPage clientIDs={clientIDs} onSelectClient={handleSelectClient} />
          <h2>Add New Client ID</h2>
          <ClientIDCreation onAddClientID={handleAddClientID} />
        </div>
      )}
    </div>
  );
};

export default Page;
