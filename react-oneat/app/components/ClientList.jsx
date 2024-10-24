// components/ClientList.jsx
import React from 'react';
import ClientDetails from './ClientDetails';

const clients = [
  { name: "Antonio Russo", phone: "+55999999999", city: "São Caetano", age: 25, ticket: "R$ 71,00", gps: 50 },
  { name: "João Silva", phone: "+55888888888", city: "São Paulo", age: 30, ticket: "R$ 100,00", gps: 40 },
  // Adicione mais clientes conforme necessário
];

export default function ClientList() {
  return (
    <section className="mt-4">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Telefone</th>
            <th className="px-4 py-2">Cidade</th>
            <th className="px-4 py-2">Idade</th>
            <th className="px-4 py-2">Ticket Médio</th>
            <th className="px-4 py-2">GPS Posição</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <ClientDetails key={index} client={client} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
