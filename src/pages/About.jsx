// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  return (
    <div className="container pt-4">
      <ul className="aboutMe_title">
        <li>Hello!</li>
        <li>I'm Jeremy.</li>
        </ul>
      <p>
        I am a Connecticut native and a recent graduate of the University of Connecticut's Full Stack Web Development Bootcamp. I am a passionate developer with a strong work-ethic and a desire to create user-friendly applications. I am a quick learner and a team player who is eager to contribute to a team and learn from others. I am excited to bring my skills to a new team and continue to grow as a developer. I have spent most of my professional career in blue collar industries as a mechanic and a hydraulic assembler on aerospace equipment. In the meantime, I have been learning many additional, mostly creative skills outside of my time in the workforce. I am a proficient dancer, videographer and mechanic and i look forward to bringing my unique skills to a new team that i can grow with!
      </p>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Fully Responsive</h3>
                <p className="lead mb-0">
                  This theme will look great on any device, no matter the size!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Bootstrap 5 Ready</h3>
                <p className="lead mb-0">
                  Featuring the latest build of the new Bootstrap 5 framework!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Easy to Use</h3>
                <p className="lead mb-0">
                  Ready to use with your own content, or customize the source
                  files!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
        impedit suscipit sed magnam alias in, repellat expedita hic explicabo
        architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Velit voluptate exercitationem quaerat pariatur
        mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
        nostrum temporibus ad omnis nam rerum eligendi.
      </p>
    </div>
  );
}
