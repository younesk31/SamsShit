"use client";
import React from "react";

const ClientIDActions = ({ clientID, items, onWithdraw, onAddItem, onMoveOut, onBack }) => {
  const hasItems = items.length > 0;

  return (
    <div>
      <h2>Actions for Client ID: {`${clientID.firstName} - ${clientID.lastName}`}</h2>
      {hasItems ? (
        <div>
          <button onClick={onWithdraw}>Withdraw</button>
          <button onClick={onAddItem}>Add New Item</button>
          <button onClick={onMoveOut}>Move Out All Items</button>
        </div>
      ) : (
        <div>
          <button onClick={onAddItem}>Add Items</button>
          <br />
          <br />
          <br />
          <button onClick={onBack}>Back</button>
        </div>
      )}
    </div>
  );
};

export default ClientIDActions;
