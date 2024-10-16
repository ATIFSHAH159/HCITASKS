import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';  // Import the CSS file for styles
import PersonalInfoForm from './Personalinfo';
import EducationForm from './Educationalform';
import DisciplineForm from './Disciplineform';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [educationInfo, setEducationInfo] = useState({
    degree: '',
    institution: '',
    year: ''
  });
  const [disciplineInfo, setDisciplineInfo] = useState({
    disciplineName: '',
    applyDate: ''
  });

  const navigate = useNavigate();

  // Handle "Cancel" functionality to reset all form data
  const handleCancel = () => {
    setPersonalInfo({
      name: '',
      email: '',
      phone: '',
      address: '',
    });
    setEducationInfo({
      degree: '',
      institution: '',
      year: ''
    });
    setDisciplineInfo({
      disciplineName: '',
      applyDate: ''
    });
    navigate('/');  // Redirect to the first form (home route)
  };

  const handlePersonalInfoSubmit = (data) => {
    setPersonalInfo(data);
    navigate('/education');
  };

  const handleEducationInfoSubmit = (data) => {
    setEducationInfo(data);
    navigate('/discipline');
  };

  const handleFinalSubmit = (disciplineData) => {
    setDisciplineInfo(disciplineData);
    console.log('Final Submission:', {
      personalInfo,
      educationInfo,
      disciplineData
    });
    alert('Form submitted successfully!');
  };

  return (
      <Routes>
        <Route
          path="/"
          element={<PersonalInfoForm
            formData={personalInfo}
            onCancel={handleCancel} 
            onNext={handlePersonalInfoSubmit}/>
         }
        />
        <Route
          path="/education"
          element={<EducationForm
            formData={educationInfo}
            onNext={handleEducationInfoSubmit}
            onBack={() => navigate('/')}
            onCancel={handleCancel} />}
        />
        <Route
          path="/discipline"
          element={<DisciplineForm
            formData={disciplineInfo}
            onSubmit={handleFinalSubmit}
            onBack={() => navigate('/education')}
            onCancel={handleCancel} />}
        />
      </Routes>
  );
}

export default App;
