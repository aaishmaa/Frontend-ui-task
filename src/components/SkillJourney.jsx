import React from "react";
import "./SkillJourney.css";

const SkillJourney = () => {
  return (
    <div className="skill-journey-container">
      <div className="journey-header">
        <p className="journey-subtitle">Your SkillShikshya Journey</p>
        <h1 className="journey-title">
          <span className="step-text">Step In.</span>{" "}
          <span className="skill-text">Skill Up.</span>{" "}
          <span className="stand-text">Stand Out.</span>{" "}
          <span className="rocket">🚀</span>
        </h1>
      </div>

      <div className="journey-grid">
        {/* Card 1 - Start with Clarity */}
        <div className="journey-card card-red">
          <div className="card-illustration">
            <div className="character thinking-character">
              <div className="head"></div>
              <div className="glasses"></div>
              <div className="body"></div>
              <div className="arm left-arm"></div>
              <div className="arm right-arm"></div>
              <div className="hand thinking-hand"></div>
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Start with Clarity</h3>
            <p className="card-subtitle">Step into a better learning path.</p>
            <p className="card-description">
              Overwhelmed by too many learning options? SkillShikshya provides a
              clear, curated roadmap from the start. Whether you're a beginner
              or upskilling, we have a path tailored to your growth.
            </p>
          </div>
        </div>

        {/* Card 2 - Learn by Doing */}
        <div className="journey-card card-teal">
          <div className="card-illustration">
            <div className="character working-character">
              <div className="head"></div>
              <div className="body"></div>
              <div className="arm left-arm"></div>
              <div className="arm right-arm"></div>
              <div className="tool laptop"></div>
              <div className="screen"></div>
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Learn by Doing</h3>
            <p className="card-subtitle">Practical skills, real projects.</p>
            <p className="card-description">
              Theory is great, but action is better. At SkillShikshya, you learn
              by doing. Hands-on projects and real-world scenarios help you
              build, break, and create—leading to true mastery.
            </p>
          </div>
        </div>

        {/* Card 3 - Get Mentored & Supported */}
        <div className="journey-card card-purple">
          <div className="card-illustration">
            <div className="character mentor-character">
              <div className="head"></div>
              <div className="body"></div>
              <div className="arm left-arm"></div>
              <div className="arm right-arm"></div>
              <div className="communication-lines"></div>
              <div className="support-icon"></div>
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Get Mentored & Supported</h3>
            <p className="card-subtitle">You're not learning alone.</p>
            <p className="card-description">
              Stuck or need feedback? SkillShikshya's community of mentors and
              learners has your back with live support, interactive discussions,
              and expert insights. You're never on your own.
            </p>
          </div>
        </div>

        {/* Card 4 - Achieve & Showcase */}
        <div className="journey-card card-brown">
          <div className="card-illustration">
            <div className="character success-character">
              <div className="head"></div>
              <div className="glasses"></div>
              <div className="body"></div>
              <div className="arm left-arm"></div>
              <div className="arm right-arm"></div>
              <div className="portfolio"></div>
              <div className="achievement-badge"></div>
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Achieve & Showcase</h3>
            <p className="card-subtitle">
              Build your portfolio, get job-ready.
            </p>
            <p className="card-description">
              Your journey ends with achievement. Each completed project builds
              a portfolio showcasing your skills and job readiness, bringing you
              closer to that dream job, promotion, or your own venture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillJourney;
