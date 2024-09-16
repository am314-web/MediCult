"use client";
import React, { useState } from 'react';

import { MoreVertical, PlusCircle, Filter, Share } from 'lucide-react'; // Icons
import '../globals.css'; // Adjust the path according to the actual location of globals.css
import Modal from '@/components/modal/page'; // Updated path
import AddPatientForm from '@/app/addpatient/page';

const products = [
  {
    name: 'Sumit Tiwari',
    id: '267400',
    price: 'Malaria',
    stock: 'Akash Tiwari',
    type: 'asha kumari',
    status: 'mild',
  },
  {
    name: 'puneet Roa',
    id: '267400',
    price: 'Fever',
    stock: 'Sumit Maurya',
    type: 'sapna joshi',
    status: 'Hyper',
  },
  {
    name: 'Mayur Jha',
    id: '267400',
    price: 'malaria',
    stock: 'Arun Patel ',
    type: 'Dengue',
    status: 'Active',
  },
  {
    name: 'puneet Roa',
    id: '267400',
    price: 'malaria',
    stock: 'Khayati Patel',
    type: 'Arun Patel',
    status: 'Active',
  },
  {
    name: 'Mayur Jha',
    id: '#TL651535',
    price: 'Fever',
    stock: 'Khayati Patel',
    type: 'Arun Patel',
    status: 'Active',
  },
  {
    name: 'Pankaj kumar',
    id: '651535',
    price: 'fever',
    stock: 'Khayati Patel',
    type: 'Arun Patel',
    status: 'Inactive',
  },
  {
    name: 'Mayur Jha',
    id: '651535',
    price: 'malaria',
    stock: 'sapna joshi',
    type: 'Arun Patel',
    status: 'Active',
  },
  {
    name: 'Mango Magic',
    id: '651535',
    price: 'malaria',
    stock: 'sapna joshi',
    type: 'Arun Patel',
    status: 'Inactive',
  },
  {
    name: 'Mayur Jha',
    id: '125487',
    price: 'Fever',
    stock: 'sapna joshi',
    type: 'Ice Cream',
    status: 'Active',
  },
  // Add more products here...
];

type ProductStatus = 'Active' | 'Pending' | 'Inactive';

// Helper function to return the correct styles based on the product status
const getStatusStyles = (status: string) => {
  switch (status) {
    case 'Active':
      return { backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' };
    case 'Pending':
      return { backgroundColor: 'hsl(var(--secondary))', color: 'hsl(var(--secondary-foreground))' };
    case 'Inactive':
      return { backgroundColor: 'hsl(var(--destructive))', color: 'hsl(var(--destructive-foreground))' };
    default:
      return {};
  }
};

const DataTable = () => {
  const [showModal, setShowModal] = useState(false);
  const handleAddDataClick = () => {
    setShowModal(true);
  }; 
  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Patient</h1>
        <div className="flex space-x-4">
          <button className="border border-gray-300 bg-black rounded-lg p-2 flex items-center">
            <Filter className="mr-2" /> Filter
          </button>
          <button className="border border-gray-300 bg-black rounded-lg p-2 flex items-center">
            <Share className="mr-2" /> Export
          </button>
          <div className="container">
              <button
                className="border border-green-300  text-white rounded-lg p-2 flex items-center gap-2"
                aria-label="Add Data"
                onClick={handleAddDataClick}
              >
                <PlusCircle className="icon"  /> Add Data
              </button>

              {/* Modal component */}
              <Modal show={showModal} onClose={handleCloseModal}>
                <AddPatientForm />
              </Modal>
            </div>
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white rounded-lg shadow overflow-hidden text-black">
        <thead className="bg-black">
          <tr>
            <th className="p-3 text-left text-white">Patient Name</th>
            <th className="p-3 text-left text-white">Patient ID</th>
            <th className="p-3 text-left text-white">Disease</th>
            <th className="p-3 text-left text-white">Docter Name</th>
            <th className="p-3 text-left text-white">Nurse Name</th>
            <th className="p-3 text-left text-white">Status</th>
            <th className="p-3 text-left text-white">More Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-t">
              <td className="p-3 flex items-center">
                <img src={`/path/to/${product.name.toLowerCase().replace(/\s/g, '-')}.png`} alt="" className="w-8 h-8 rounded-full mr-4" />
                <span>{product.name}</span>
              </td>
              <td className="p-3">{product.id}</td>
              <td className="p-3">{product.price}</td>
              <td className="p-3">{product.stock}</td>
              <td className="p-3">{product.type}</td>
              <td className="p-3">
                <span
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={getStatusStyles(product.status)}
                >
                  {product.status}
                </span>
              </td>
              <td className="p-3">
                <button className="text-gray-500 hover:text-gray-700">
                  <MoreVertical />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600">Showing 1 to 10 of 50 entries</span>
        <div className="flex items-center space-x-2">
          <button className="border border-gray-300 rounded-lg p-2">Previous</button>
          <span className="text-blue-500">1</span>
          <button className="border border-gray-300 rounded-lg p-2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
