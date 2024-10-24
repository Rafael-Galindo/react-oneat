// components/ClientDetails.jsx
import React from 'react';

export default function ClientDetails({ client }) {
  return (
    <tr className="border-b">
      <td className="px-4 py-2">{client.name}</td>
      <td className="px-4 py-2">{client.phone}</td>
      <td className="px-4 py-2">{client.city}</td>
      <td className="px-4 py-2">{client.age}</td>
      <td className="px-4 py-2">{client.ticket}</td>
      <td className="px-4 py-2">{client.gps}</td>
    </tr>
  );
}
