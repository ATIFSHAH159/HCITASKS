import React, { useState } from 'react';

const EducationForm = ({ formData, onNext, onBack, onCancel }) => {
  const [localData, setLocalData] = useState(formData);

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(localData);
  };

  return (
    <div>
      <h2>Education Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={localData.degree}
          onChange={handleChange}
        />
        <input
          type="text"
          name="institution"
          placeholder="Institution"
          value={localData.institution}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={localData.year}
          onChange={handleChange}
        />
        <div>
          <button type="button" onClick={onBack}>Back</button>
          <button type="submit">Next</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
