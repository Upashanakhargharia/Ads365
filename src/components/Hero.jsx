export default function HeroSection() {
  return (
    <section className="hero-wrap">
      <div className="hero-bg"></div>

      <div className="hero-overlay-content">
        <div className="hero-text">
          <h1>
            The AI Video
            <br />
            Production agency
          </h1>
          <p>
            redefining <span>creative storytelling</span>
          </p>
        </div>

        <div className="cards-layer">
          <div className="card-item card-1">
            <img src="/images/card-1.png" alt="Card visual 1" />
          </div>

          <div className="card-item card-2">
            <img src="/images/card-2.png" alt="Card visual 2" />
          </div>

          <div className="card-item card-3">
            <img src="/images/card-3.png" alt="Card visual 3" />
          </div>

          <div className="card-item card-4">
            <img src="/images/card-4.png" alt="Card visual 4" />
          </div>
        </div>

        <div className="hero-bottom-text">
          <h3>AI Video Production.</h3>
          <p>
            We combine cutting-edge AI technology with expert creative
            craftsmanship to deliver high-quality video content faster and with
            more flexibility than traditional production.
          </p>
        </div>
      </div>
    </section>
  );
}