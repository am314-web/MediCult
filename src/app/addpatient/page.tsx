"use client";

import { useState } from 'react';
import '../globals.css';  // Relative to the addpatient folder
  // Importing from the src/app folder
  // Assuming you're using external CSS for styling

const AddPatientForm = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="form-container bg-teal-400">
      <button className="toggle-button" onClick={toggleForm}>
        {showForm ? 'Hide Form' : 'Add Patient'}
      </button>

      {showForm && (
        <form className="patient-form" onSubmit={handleFormSubmit}>
          <div className="form-grid ">
            {/* Personal Information */}
            <div className='border border-radius:15px bg-lime-500 "text-black justify-center' >Personal Information</div>
            <div>
              <label className="text-black">First Name</label>
              <input type="text" name="firstName" required />
            </div>
            <div>
              <label className="text-black">Middle Name</label>
              <input type="text" name="middleName" />
            </div>
            <div>
              <label className="text-black">Last Name</label>
              <input type="text" name="lastName" required />
            </div>
            <div>
              <label className="text-black">Date of Birth</label>
              <input type="date" name="dob" required />
            </div>
            <div>
              <label className="text-black">Nationality</label>
              <input type="text" name="nationality" />
            </div>
            <div>
              <label className="text-black">Marital Status</label>
              <select name="maritalStatus">
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
            <div>
              <label className="text-black">Occupation</label>
              <input type="text" name="occupation" />
            </div>

            {/* Contact Information */}
            <h3 className="text-black">Contact Information</h3>
            <div>
              <label className="text-black">Phone Number</label>
              <input type="tel" name="phone" required />
            </div>
            <div>
              <label className="text-black">Alternate Contact</label>
              <input type="tel" name="alternateContact" />
            </div>
            <div>
              <label className="text-black">Email</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label className="text-black">Email (Alternate)</label>
              <input type="email" name="alternateEmail" />
            </div>
            <div>
              <label className="text-black">Next of Kin</label>
              <input type="text" name="nextOfKin" />
            </div>
            <div>
              <label className="text-black">Guardian Contact</label>
              <input type="tel" name="guardianContact" />
            </div>

            {/* Medical Information */}
            <h3 className="text-black">Medical Information</h3>
            <div>
              <label className="text-black">Blood Group</label>
              <input type="text" name="bloodGroup" required />
            </div>
            <div>
              <label className="text-black">Allergies</label>
              <textarea name="allergies" ></textarea>
            </div>
            <div>
              <label className="text-black">Medical History</label>
              <textarea name="medicalHistory"></textarea>
            </div>
            <div>
              <label className="text-black">Current Medications</label>
              <textarea name="currentMedications"></textarea>
            </div>
            <div>
              <label className="text-black">Previous Surgeries</label>
              <textarea name="previousSurgeries"></textarea>
            </div>
            <div>
              <label className="text-black">Insurance Provider</label>
              <input type="text" name="insuranceProvider" />
            </div>
            <div>
              <label className="text-black">Insurance Policy Number</label>
              <input type="text" name="insurancePolicyNumber" />
            </div>
            <div>
              <label className="text-black">Family Doctor</label>
              <input type="text" name="familyDoctor" />
            </div>

            {/* Admission Details */}
            <h3 className="text-black">Admission Details</h3>
            <div>
              <label className="text-black">Room Number</label>
              <input type="text" name="roomNumber" />
            </div>
            <div>
              <label className="text-black">Bed Number</label>
              <input type="text" name="bedNumber" />
            </div>
            <div>
              <label className="text-black">Admission Reason</label>
              <textarea name="admissionReason"></textarea>
            </div>
            <div>
              <label className="text-black">Department</label>
              <input type="text" name="department" />
            </div>
            <div>
              <label className="text-black">Admit Date</label>
              <input type="date" name="admitDate" required />
            </div>
            <div>
              <label className="text-black">Expected Discharge Date</label>
              <input type="date" name="expectedDischargeDate" />
            </div>

            {/* Emergency Information */}
            <h3 className="text-black">Emergency Information</h3>
            <div>
              <label className="text-black">Emergency Contact Relationship</label>
              <input type="text" name="emergencyContactRelationship" />
            </div>
            <div>
              <label className="text-black" >Advance Directives</label>
              <textarea name="advanceDirectives"></textarea>
            </div>
            <div>
              <label className="text-black">Organ Donor Status</label>
              <select name="organDonorStatus">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Billing Information */}
            <h3 className="text-black">Billing Information</h3>
            <div>
              <label className="text-black">Billing Address</label>
              <input type="text" name="billingAddress" />
            </div>
            <div>
              <label className="text-black">Payment Method</label>
              <select name="paymentMethod">
                <option value="Insurance">Insurance</option>
                <option value="Cash">Cash</option>
                <option value="Credit Card">Credit Card</option>
              </select>
            </div>
            <div>
              <label className="text-black">Guarantor</label>
              <input type="text" name="guarantor" />
            </div>
            <div>
              <label className="text-black">Billing Notes</label>
              <textarea name="billingNotes"></textarea>
            </div>

            {/* Other Information */}
            <h3 className="text-black">Other Information</h3>
            <div>
              <label className="text-black">Preferred Language</label>
              <input type="text" name="preferredLanguage" />
            </div>
            <div>
              <label className="text-black">Referral Source</label>
              <input type="text" name="referralSource" />
            </div>
            <div>
              <label className="text-black">Special Needs</label>
              <textarea name="specialNeeds"></textarea>
            </div>
            <div>
              <label className="text-black">Cultural/Religious Needs</label>
              <textarea name="culturalReligiousNeeds"></textarea>
            </div>
            <div>
              <label className="text-black">Emergency Plan</label>
              <textarea name="emergencyPlan"></textarea>
            </div>

            {/* Upload File */}
            <div className="full-width">
              <label className="text-black">Upload File</label>
              <input type="file" name="file" />
            </div>

            {/* Submit Button */}
            <div className="full-width">
              <button type="submit" className="submit-button">Add Patient</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddPatientForm;
