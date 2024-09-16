"use client";
import Head from 'next/head';
import Link from 'next/link';
import { Home, Bed, Key, AlertTriangle, HeartPulse,Menu , Settings , LogOut} from 'lucide-react'; // Importing icons from lucide-react
import '../../globals.css';
import { EmergencyBedBarChartComponent, IcuBedBarChartComponent, PrivateBedBarChartComponent, SemiPrivateBedBarChartComponent } from "@/app/teach/analytics/page";

import { Search, PlusCircle } from 'lucide-react';
import React from 'react';
import MenuOfBedType from '@/app/menu/page'; // Import MenuOfBedType from the correct path
import { useState } from 'react';
import DataTable from '@/app/datatable/private';
import AddPatientForm from '@/app/addpatient/page';
import Modal from '@/components/modal/page';
import { usePathname } from 'next/navigation';

 // Correct path to the CSS file

export default function SemiPrivateBeds() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [showModal, setShowModal] = useState(false);

  const handleAddDataClick = () => {
    setShowModal(true);
  }; 

  const handleCloseModal = () => {
    setShowModal(false);
  };// State to toggle menu

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle between expanded and contracted menu
  };

  return (
    <>
      <Head>
        <title>Bed Availability System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
      </Head>

      {/* Header Section */}
      <header className="border-radius:10px rounded-lg p-4 gap-4">
        <h1 className="font-semibold text-2xl text-blue-900">Medicult</h1>
        <div className="text-center mt-4">
          <h1 className="font-extrabold text-4xl text-blue-900"> Semi-Private Bed Availability Information</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="flex">
        {/* Left Side: Collapsible Menu */}
        <div className={`transition-all duration-300 ease-in-out bg-black h-full ${isDropdownOpen ? 'w-64' : 'w-16'}`}> {/* Adjust width */}
          <button
            className="border border-blue-300 rounded-lg p-4 flex items-center justify-center gap-4 w-full"
            onClick={toggleDropdown}
            aria-label="Toggle Menu"
          >
            <Menu className="icon" />
          </button>

          {/* Expanded Menu */}
          <nav className={`mt-4 ${isDropdownOpen ? 'block' : 'hidden md:block'}`}>
            <ul className="space-y-4">
              <li className="border border-blue-300 rounded-lg p-4 flex items-center gap-4">
                <Link href="/" aria-label="Home">
                  <Home className="icon" />
                  {isDropdownOpen && <span>Home</span>} {/* Show text when expanded */}
                </Link>
              </li>
              <li className="border border-blue-300 rounded-lg p-4 flex items-center gap-4">
                <Link href="/beds/semi-private" aria-label="Semi-Private Beds">
                  <Bed className="icon" />
                  {isDropdownOpen && <span>Semi-Private Beds</span>}
                </Link>
              </li>
              <li className="border border-blue-300 rounded-lg p-4 flex items-center gap-4">
                <Link href="/beds/private" aria-label="Private Beds">
                  <Bed className="icon" />
                  {isDropdownOpen && <span>Private Beds</span>}
                </Link>
              </li>
              <li className="border border-blue-300 rounded-lg p-4 flex items-center gap-4">
                <Link href="/beds/emergency" aria-label="Emergency Beds">
                  <AlertTriangle className="icon" />
                  {isDropdownOpen && <span>Emergency Beds</span>}
                </Link>
              </li>
              <li className="border border-blue-300 rounded-lg p-4 flex items-center gap-4">
                <Link href="/beds/icu" aria-label="ICU Beds">
                  <HeartPulse className="icon" />
                  {isDropdownOpen && <span>ICU Beds</span>}
                </Link>
              </li>

              {/* New Section: Patient Information Dashboard */}
              <li className="border border-blue-300 rounded-lg p-4 flex items-center gap-4">
                <Link href="/patient-dashboard" aria-label="Patient Information Dashboard">
                  <HeartPulse className="icon" />
                  {isDropdownOpen && <span>Patient Information Dashboard</span>}
                </Link>
              </li>

              {/* Settings and Logout */}
              <li className="border border-blue-300 rounded-lg p-4 flex items-center gap-4 bg-black">
                <button className="flex items-center gap-4 w-full" aria-label="Settings">
                  <Settings className="icon" />
                  {isDropdownOpen && <span>Settings</span>}
                </button>
              </li>
              <li className="border border-red-300 rounded-lg p-4 flex items-center gap-4 bg-black">
                <button className="flex items-center gap-4 w-full" aria-label="Logout">
                  <LogOut className="icon" />
                  {isDropdownOpen && <span>Logout</span>}
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <main className="w-full p-4">
          {/* Buttons Section */}
          <div className="flex justify-between mb-4">
            {/* Search Button */}
            <button className="border border-blue-300 rounded-lg p-2 flex items-center gap-2" aria-label="Search Beds">
              <Search className="icon" /> Search
            </button>

            {/* Add Patient Button */}
            <div className="container">
              <button
                className="border border-green-300 bg-green-500 text-white rounded-lg p-2 flex items-center gap-2"
                aria-label="Add Data"
                onClick={handleAddDataClick}
              >
                <PlusCircle className="icon"  /> Add Data
              </button>

              {/* Modal component */}
              <Modal show={showModal} onClose={handleCloseModal}>
  <div className="fixed inset-0 z-50 bg-white bg-opacity-50 flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <button
        className="absolute top-2 right-2 text-black"
        onClick={handleCloseModal}
      >
        X
      </button>
      <AddPatientForm />
    </div>
  </div>
</Modal>

            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Charts */}
            <div className="w-full h-60 rounded-lg p-4">
              <PrivateBedBarChartComponent />
            </div>
            <div className="w-full h-60 rounded-lg p-4">
              <EmergencyBedBarChartComponent />
            </div>
            <div className="w-full h-60 rounded-lg p-4">
              <IcuBedBarChartComponent />
            </div>
            <div className="w-full h-60 rounded-lg p-4">
              <SemiPrivateBedBarChartComponent />
            </div>
          </div>

          {/* Add more margin to move DataTable down */}
          <div className="mt-60">
            <DataTable />
          </div>
        </main>
      </div>

      {/* Footer Section */}
      <footer className="container mt-8">
        <small>
          <a href="#" aria-label="Privacy Policy">Privacy Policy</a> • <a href="#" aria-label="Terms & Conditions">Terms & Conditions</a>
        </small>
        <p>© 2024 Medicult</p>
      </footer>
    </>


  );
}
