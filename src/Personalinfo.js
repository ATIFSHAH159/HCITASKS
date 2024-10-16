import React, { useState } from 'react';

const PersonalInfoForm = ({ formData, onNext, onCancel }) => {
  const [localData, setLocalData] = useState(formData);

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(localData); // Pass data to the next step
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={localData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={localData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={localData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={localData.address}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Next</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
