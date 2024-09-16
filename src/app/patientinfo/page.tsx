"use client";
import React, { useState } from "react";
import AddPatientForm from '@/app/addpatient/page';
import '../../globals.css';
import Head from 'next/head';
import Link from 'next/link';
import DataTable from '@/app/datatable/private';

const PatientInfo = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddDataClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Head>
        <title>Bed Availability System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
      </Head>

      <header className="rounded-lg p-4 gap-4">
        <h1 className="font-semibold text-2xl text-blue-900">Medicult</h1>
        <div className="text-center mt-4">
          <h1 className="font-extrabold text-4xl text-blue-900">Private Bed Availability Information</h1>
        </div>
      </header>

      <div className="mt-10">
        <DataTable />
      </div>

      {/* Add Patient Modal */}
      {showModal && (
        <div className="modal">
          <AddPatientForm />
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}

      <div className="text-center mt-10">
        <button onClick={handleAddDataClick} className="btn btn-primary">Add Patient</button>
      </div>
    </>
  );
};

export default PatientInfo;
