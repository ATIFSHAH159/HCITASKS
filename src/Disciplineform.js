import React, { useState } from 'react';

const DisciplineForm = ({ formData, onSubmit, onBack, onCancel }) => {
  const [localData, setLocalData] = useState(formData);

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(localData);
  };

  return (
    <div>
      <h2>Apply for Discipline</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="disciplineName"
          placeholder="Discipline Name"
          value={localData.disciplineName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="applyDate"
          value={localData.applyDate}
          onChange={handleChange}
        />
        <div>
          <button type="button" onClick={onBack}>Back</button>
          <button type="submit">Submit</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default DisciplineForm;
