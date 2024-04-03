"use client";
import React, { useState } from "react";

const ClientIDActions = ({ clientID, items, onWithdraw, onAddItem, onMoveOut, onBack }) => {
  const hasItems = items.length > 0;
  const [itemName, setItemName] = useState(""); // State to manage the input for item name
  const [showAddItem, setShowAddItem] = useState(false); // State to control the visibility of the "Add New Item" section

  const handleAddItem = () => {
    // Generate a unique ID for the item
    const newItem = {
      id: items.length + 1, // Incremental ID based on the number of existing items
      name: itemName
    };
    onAddItem(newItem); // Pass the new item to the parent component
    setItemName(""); // Clear the input field after adding the item
  };

  return (
    <div>
      <h2>Client ID: {clientID.id}</h2>
      <h2 style={{ textTransform: "capitalize" }}>
        Client: {`${clientID.firstName} ${clientID.lastName}`}
      </h2>
      {hasItems ? (
        <div>
          <button onClick={onWithdraw}>Withdraw</button>
          <button onClick={() => setShowAddItem(true)}>Add New Item</button>
          <button onClick={onMoveOut}>Move Out All Items</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setShowAddItem(true)}>Add Items</button>
          <br />
          <br />
          <br />
          <button onClick={onBack}>Back</button>
        </div>
      )}

      {/* New section to add items */}
      {showAddItem && (
        <div>
          <h3>Add New Item</h3>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name"
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      )}

      {/* Table to display items */}
      <div>
        <h3>Items</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientIDActions;
