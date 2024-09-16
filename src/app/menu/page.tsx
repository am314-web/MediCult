'use client'; // Marks this file as a Client Component

import { useState } from 'react'; // Importing useState for dropdown toggling
import Link from 'next/link';
import { Home, Bed, AlertTriangle, HeartPulse, Menu, Settings, LogOut } from 'lucide-react'; // Importing icons from lucide-react
import '@/app/globals.css';
import React from 'react';

const MenuOfBedType = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown
  };

  const handleLogout = () => {
    // Clear user session and redirect to login page
    localStorage.removeItem('authToken');
    window.location.href = '/login'; // Adjust the path as needed
  };

  return (
    <>
      {/* Main Content Section */}
      <div className="flex">
        {/* Left Side: Collapsible Menu */}
        <div className={`transition-all duration-300 ease-in-out bg-black h-full ${isDropdownOpen ? 'w-64' : 'w-16'}`}> {/* Adjust width */}
          <button
            className=" rounded-lg p-4 flex items-center justify-center gap-4 w-full"
            onClick={toggleDropdown}
            aria-label="Toggle Menu"
          >
            <Menu className="icon" />
          </button>

          {/* Expanded Menu */}
          <nav className={`mt-4 ${isDropdownOpen ? 'block' : 'hidden md:block'}`}>
            <ul className="space-y-4">
              <li className=" rounded-lg p-4 flex items-center gap-4">
                <Link href="/" aria-label="Home">
                  <Home className="icon" />
                  {isDropdownOpen && <span>Home</span>} {/* Show text when expanded */}
                </Link>
              </li>
              <li className=" rounded-lg p-4 flex items-center gap-4">
                <Link href="/beds/semi-private" aria-label="Semi-Private Beds">
                  <Bed className="icon" />
                  {isDropdownOpen && <span>Semi-Private Beds</span>}
                </Link>
              </li>
              <li className=" rounded-lg p-4 flex items-center gap-4">
                <Link href="/beds/private" aria-label="Private Beds">
                  <Bed className="icon" />
                  {isDropdownOpen && <span>Private Beds</span>}
                </Link>
              </li>
              <li className="rounded-lg p-4 flex items-center gap-4">
                <Link href="/beds/emergency" aria-label="Emergency Beds">
                  <AlertTriangle className="icon" />
                  {isDropdownOpen && <span>Emergency Beds</span>}
                </Link>
              </li>
              <li className=" rounded-lg p-4 flex items-center gap-4">
                <Link href="/beds/icu" aria-label="ICU Beds">
                  <HeartPulse className="icon" />
                  {isDropdownOpen && <span>ICU Beds</span>}
                </Link>
              </li>

              {/* New Section: Patient Information Dashboard */}
              <li className=" rounded-lg p-4 flex items-center gap-4">
                <Link href="/patient-dashboard" aria-label="Patient Information Dashboard">
                  <HeartPulse className="icon" />
                  {isDropdownOpen && <span>Patient Information Dashboard</span>}
                </Link>
              </li>

              {/* Settings and Logout */}
              <li className=" rounded-lg p-4 flex items-center gap-4 bg-black">
                <button className="flex items-center gap-4 w-full" aria-label="Settings">
                  <Settings className="icon" />
                  {isDropdownOpen && <span>Settings</span>}
                </button>
              </li>
              <li className=" rounded-lg p-4 flex items-center gap-4 bg-black">
                <button className="flex items-center gap-4 w-full" aria-label="Logout" onClick={handleLogout}>
                  <LogOut className="icon" />
                  {isDropdownOpen && <span>Logout</span>}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MenuOfBedType;
