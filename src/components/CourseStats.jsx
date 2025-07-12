import React from "react";
import "./CourseStats.css";

const CourseStats = () => {
  return (
    <div className="course-stats-container">
      <div className="header-section">
        <p className="subtitle">
          Explore our classes and master trending skills!
        </p>
        <h1 className="main-title">
          Dive Into <span className="highlight">What's Hot Right Now!</span> 🔥
        </h1>
      </div>

      <div className="stats-grid">
        {/* Main Card */}
        <div className="main-card">
          <div className="view-all-btn">
            <span>View all Courses</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          <div className="tech-icons">
            <div className="icon-item react-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z" />
              </svg>
            </div>
            <div className="icon-item js-icon">
              <div className="js-square">
                <span>#</span>
                <span>TS</span>
              </div>
            </div>
            <div className="icon-item vue-icon">
              <div className="vue-logo">Vue</div>
            </div>
            <div className="icon-item figma-icon">
              <div className="figma-logo"></div>
            </div>
          </div>

          <div className="course-count">
            <span className="count-number">23</span>
            <span className="plus">+</span>
            <div className="count-text">
              <span className="count-title">All Courses</span>
              <span className="count-subtitle">
                courses you're powering{"\n"}through right now.
              </span>
            </div>
          </div>
        </div>

        {/* Upcoming Courses Card */}
        <div className="stat-card upcoming-card">
          <div className="card-content">
            <div className="card-text">
              <span className="card-title">Upcoming Courses</span>
              <span className="card-subtitle">
                exciting new courses waiting to boost your skills.
              </span>
            </div>
            <div className="card-number-section">
              <span className="card-number">05</span>
              <span className="card-plus">+</span>
            </div>
          </div>
        </div>

        {/* Ongoing Courses Card */}
        <div className="stat-card ongoing-card">
          <div className="card-content">
            <div className="card-text">
              <span className="card-title">Ongoing Courses</span>
              <span className="card-subtitle">
                currently happening—don't miss out on the action!
              </span>
            </div>
            <div className="card-number-section">
              <span className="card-number">10</span>
              <span className="card-plus">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStats;
