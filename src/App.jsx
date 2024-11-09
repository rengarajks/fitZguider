import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Tour from './Pages/Tour';
import { useEffect, useState } from 'react';

function App() {
  const [profile, setProfile] = useState(false);  // Default to false

  useEffect(() => {
    const profileFromStorage = localStorage.getItem('profile');
    
    // Check if profileFromStorage is "true" or "false" string and set the boolean value
    if (profileFromStorage === "true") {
      setProfile(true);  // Set profile to true if it's the string "true"
    } else {
      setProfile(false); // Otherwise set profile to false
    }
  }, []); // Run only once when the component mounts

  return (
    <div className='bg-[#060640] h-[100vh]'>
      <Router>
        <Routes>
          <Route path='/*' element={profile ? <Home /> : <Tour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
