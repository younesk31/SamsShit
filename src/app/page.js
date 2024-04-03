"use client";

import React, { useState } from "react";
import ClientIDsPage from "./components/ClientIDsPage";
import ClientIDActions from "./components/ClientIDActions";
import ClientIDCreation from "./components/ClientIDCreation";

const Page = () => {
  const [selectedClientID, setSelectedClientID] = useState(null);
  const [clientIDs, setClientIDs] = useState({
    // Hardcoded default clients
    "tester-1": { id: 1, firstName: "tester", lastName: "1" },
    "tester-2": { id: 2, firstName: "tester", lastName: "2" },
  });
  const [nextID, setNextID] = useState(1); // Initialize the next ID to 1
  const [showAddClient, setShowAddClient] = useState(false);
  const [showAllClients, setShowAllClients] = useState(true);

  const handleSelectClient = (clientID) => {
    setSelectedClientID(clientID);
    setShowAllClients(false);
  };

  const handleBackToClientIDs = () => {
    setSelectedClientID(null);
    setShowAddClient(false);
    setShowAllClients(true);
  };

  const handleAddClientID = (firstName, lastName) => {
    const clientKey = `${firstName}-${lastName}`;
    if (!clientIDs[clientKey]) {
      const newClient = {
        id: nextID,
        firstName: firstName,
        lastName: lastName,
      };
      setClientIDs({ ...clientIDs, [clientKey]: newClient });
      setNextID(nextID + 1);
      setShowAddClient(false);
      setShowAllClients(true);
    } else {
      alert("Client already exists");
    }
  };

  return (
    <div>
      {/* Show all clients in the system */}
      {showAllClients && <ClientIDsPage clientIDs={Object.values(clientIDs)} onSelectClient={handleSelectClient} />}
      {/* create new client */}
      {showAddClient && <ClientIDCreation onAddClientID={handleAddClientID} onBack={handleBackToClientIDs} />}
      {!showAddClient && !selectedClientID && (
        <button onClick={() => (setShowAddClient(true), setShowAllClients(false))}>Add New Client</button>
      )}
      {/* Show client Actions */}
      {selectedClientID && (
        <ClientIDActions
          clientID={clientIDs}
          items={[]} // Pass the items array for the selected client ID
          onWithdraw={() => console.log("Withdraw action")}
          onAddItem={() => console.log("Add Item action")}
          onMoveOut={() => console.log("Move Out action")}
          onBack={handleBackToClientIDs}
        />
      )}
    </div>
  );
};

export default Page;
