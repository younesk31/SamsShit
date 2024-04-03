import React from "react";

const ClientIDsPage = ({ clientIDs, onSelectClient }) => {
  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clientIDs.map((client) => (
          <li key={client.id}>
            <button onClick={() => onSelectClient(client.id)}>
              {client.firstName} - {client.lastName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientIDsPage;
