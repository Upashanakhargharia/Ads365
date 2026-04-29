export default function AI() {
  return (
    <section className="ai-page">
      <div className="ai-page-bg" />
      <div className="ai-page-overlay" />

      <div className="ai-shell">
        <div className="ai-panel">
      
          {/* Left copy — sits on the green band */}
          <div className="ai-left">
            <h1>AI</h1>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.
            </p>
            <p>
              <strong>Voluptatum deleniti</strong>
              atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui
              officia deserunt.
            </p>
            <button className="ai-cta">Let's Connect with AI</button>
          </div>

          {/* Image cards — each a parallelogram, stacked diagonally */}
          <div className="ai-media">

            {/* Card 1 — top (llama / car scene) */}
            <div className="ai-card ai-card-top">
              <img src="/images/Image12.png" alt="" />
            </div>

            {/* Thin bright-green dividing line */}
            <div className="ai-card-divider" />

            {/* Card 2 — middle (fire portal, play button) */}
            <div className="ai-card ai-card-middle">
              <img src="/images/Image13.png" alt="" />
              <button className="play-circle" aria-label="Play video">▶</button>
            </div>

            {/* Card 3 — bottom (woman looking up) */}
            <div className="ai-card ai-card-bottom">
              <img src="/images/Image14.png" alt="" />
            </div>

            {/* Card 4 — partially visible at very bottom */}
            <div className="ai-card ai-card-last">
              <img src="/images/Image15.png" alt="" />
            </div>

          </div>

          {/* Bottom-right white copy block */}
          <div className="ai-right-copy">
            <h3>
              Et harum quidem<br />
              rerum facilis est et<br />
              expedita
            </h3>
            <p>
              Officia deserunt mollitia animi, id est laborum et dolorum fuga.
              Et harum quidem rerum facilis est et expedita distinctio.
            </p>
          </div>

          {/* Diagonal watermark */}
          <div className="ai-watermark" aria-hidden="true">
            ADS 365 ADS 365 ADS 365 ADS 365 ADS 365 ADS 365 ADS 365
          </div>

        </div>
      </div>
    </section>
  );
}