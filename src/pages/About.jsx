export default function About() {
  return (
    <section className="about-section">
      <div className="about-bg"></div>

      <div className="about-overlay">
        <div className="about-left">
          <h1>
            About
            <br />
            Our Ads365
          </h1>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.
          </p>

          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus.
          </p>

          <div className="social-strip">
            <span>Social Media</span>
            <div className="social-icons">
              <span>f</span>
              <span>ig</span>
              <span>x</span>
              <span>in</span>
              <span>wa</span>
            </div>
          </div>

          <div className="about-columns">
            <div>
              <h3>Our Vision</h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti.
              </p>
            </div>

            <div>
              <h3>Our Mission</h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti.
              </p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-main-card">
            <img src="/images/about-right.png" alt="About showcase" />

            {/* <div className="badge reviews-badge">
              <strong>4.9</strong>
              <span>Rating</span>
            </div>

            <div className="badge clients-badge">
              <strong>10k</strong>
              <span>Satisfied Clients</span>
            </div>

            <div className="badge projects-badge">
              <strong>1000+</strong>
              <span>Projects Done</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}