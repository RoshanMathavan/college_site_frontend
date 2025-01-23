import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ApplicationTracker from './components/ApplicationTracker';
import InterviewScheduler from './components/InterviewScheduler';
import CompanyCoordinator from './components/CompanyCoordinator';
import PlacementDriveManager from './components/PlacementDriveManager';
import RecruitmentStatusTracker from './components/RecruitmentStatusTracker';
import PlacementReportGenerator from './components/PlacementReportGenerator';
import AcademicRecordsIntegration from './components/AcademicRecordsIntegration';
import CompanyDatabaseIntegration from './components/CompanyDatabaseIntegration';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/applications">Applications</Link></li>
            <li><Link to="/interviews">Interviews</Link></li>
            <li><Link to="/companies">Companies</Link></li>
            <li><Link to="/placement-drives">Placement Drives</Link></li>
            <li><Link to="/recruitment-status">Recruitment Status</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/academic-records">Academic Records</Link></li>
            <li><Link to="/company-database">Company Database</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/applications" element={<ApplicationTracker />} />
          <Route path="/interviews" element={<InterviewScheduler />} />
          <Route path="/companies" element={<CompanyCoordinator />} />
          <Route path="/placement-drives" element={<PlacementDriveManager />} />
          <Route path="/recruitment-status" element={<RecruitmentStatusTracker />} />
          <Route path="/reports" element={<PlacementReportGenerator />} />
          <Route path="/academic-records" element={<AcademicRecordsIntegration />} />
          <Route path="/company-database" element={<CompanyDatabaseIntegration />} />
          <Route path="/" element={
            <div className="welcome-page">
              <div className="hero">
                <h1>Welcome to the College Placement Management System</h1>
                <p>Efficiently manage and track all aspects of college placements.</p>
                <p>Select a feature from the menu to get started.</p>
              </div>
              <div className="about">
                <h2>About Us</h2>
                <p>The College Placement Management System is designed to streamline the placement process for colleges and universities. It provides a comprehensive platform for managing student applications, scheduling interviews, coordinating with companies, and generating detailed reports. Our system integrates seamlessly with academic and company databases, ensuring a smooth and efficient placement experience for all stakeholders.</p>
              </div>
              <div className="features">
                <h2>Key Features</h2>
                <ul>
                  <li>Track student applications and interviews</li>
                  <li>Coordinate with companies for placement drives</li>
                  <li>Generate detailed placement reports</li>
                  <li>Integrate with academic and company databases</li>
                </ul>
              </div>
              <div className="gallery">
                <h2>Gallery</h2>
                <div className="gallery-images">
                  <img src="https://www.globalinstitutes.edu.in/wp-content/uploads/2019/03/gallery-24-683x1024.jpg" alt="Gallery Image 1" /> 
                  <img src="https://www.globalinstitutes.edu.in/wp-content/uploads/2019/03/gallery-14.jpg" alt="Gallery Image 2" />
                  <img src="https://www.globalinstitutes.edu.in/wp-content/uploads/2019/03/gallery-6.jpg" alt="Gallery Image 3" />
                  <img src="https://www.globalinstitutes.edu.in/wp-content/uploads/2019/03/gallery-7.jpg" alt="Gallery Image 4" />
                </div>
              </div>
              <div className="newsletter">
                <h2>Subscrib for our updates</h2>
                <form>
                  <input type="email" placeholder="Enter your email" required />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
