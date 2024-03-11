import React from 'react';



function Resume() {
  return (
    <div className="resume_container">
      <h1>Resume</h1>
      <div className="resume_elements">
        <h2>Proficiencies</h2>
        <div className="resume_proficiencies">
          {/* <p>Hi, I'm [Your Name], a passionate developer.</p>
        <p>This is where I showcase my projects and skills.</p> */}
        </div>
        <section className="resume_proficiencies_items">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
          <ul>
            <li>MySQL</li>
            <li>Sequelize ORM</li>
            <li>MongoDB</li>
          </ul>
          <ul>
            <li>GraphQL</li>
            <li>RESTful APIs</li>
            <li>Git</li>
          </ul>
        </section>
        <div id="resume_experience">
            <h2>
              Work Experience
            </h2>
            <h3>
              Bauer Inc. 2020 - Present
            </h3>
            <h4>
              Hydraulic / Electrical Assembly || Laser Specialist
            </h4>
            <p className="resume_experience_section_description">
              Bauer consistently depends on me to fill many roles as I am ambitious and eager to grow. Currently, I travel for the company and build as well as maintain aerospace equipment. I am also the company's laser specialist and have been trained to use the laser to mark parts and create custom labels for the company's products.
            </p>
            <h3>
              Grossman Chevrolet Nissan 2016 - 2019
            </h3>
            <h4>
              Automotive Technician
            </h4>
            <p className="resume_experience_section_description">
              Nissan entrusted me with becoming a factory trained, ASE certified technician. Considered an 'A tech', I was competent in the full gamut of repair process from diagnosis to heavy rebuilds and repairs.
            </p>
            <h2>
              Education
            </h2>
            <h3>
              UConn Full Stack Web Development Bootcamp 2023
            </h3>
            <p className="resume_education_section_description">
              Covering a large sweep of software that is considered standard and current in the industry, as well as building industry connections.
            </p>
            <h3>
              Porter and Chester Institute 2014
            </h3>
            <p className="resume_education_section_description">
            Graduated top of my class as an auto technician. I excelled at both the technical knowledge as well as the practical applications.
            </p>
            <h3>
              Valley Regional High School 2013
            </h3>
            <p className="resume_education_section_description">
            In school, I excelled at mathematics as well as in design classes graduating as an honor student.
            </p>
        </div>
      </div>
      <div className="resumeDL">
        <a href="src/assets/pdf/jeremy-doran-active-resume-3-10-24.pdf">Click for downloadable resume pdf file.</a>
      </div>
    </div>
  );
}

export default Resume; // Export as default
