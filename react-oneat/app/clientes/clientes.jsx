// clientes/Clientes.jsx
import React from 'react';
import ClientList from '../components/ClientList';
import SortButton from '../components/SortButton';

export default function Clientes() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>
      
      {/* Botão de Ordenação */}
      <SortButton />

      {/* Lista de Clientes */}
      <ClientList />

      <footer className="text-center mt-8">
        <p>&copy; 2024 onEat</p>
      </footer>
    </main>
  );
}
