const CARDS = [
  { cls: "ai-card-top",    src: "/images/Image12.png", play: false },
  { cls: "ai-card-middle", src: "/images/Image13.png", play: true  },
  { cls: "ai-card-bottom", src: "/images/Image14.png", play: false },
  { cls: "ai-card-last",   src: "/images/Image15.png", play: false },
];

function CardSet({ offset = 0 }) {
  return (
    <div className="ai-card-set" style={{ "--offset": `${offset}px` }}>
      {/* Card 1 */}
      <div className="ai-card ai-card-top">
        <img src={CARDS[0].src} alt="" />
      </div>

      {/* Green divider */}
      <div className="ai-card-divider" />

      {/* Card 2 — play button */}
      <div className="ai-card ai-card-middle">
        <img src={CARDS[1].src} alt="" />
        <button className="play-circle" aria-label="Play video">▶</button>
      </div>

      {/* Card 3 */}
      <div className="ai-card ai-card-bottom">
        <img src={CARDS[2].src} alt="" />
      </div>

      {/* Card 4 */}
      <div className="ai-card ai-card-last">
        <img src={CARDS[3].src} alt="" />
      </div>
    </div>
  );
}

export default function Locations() {
  return (
    <section className="ai-page">
      <div className="ai-page-bg" />
      <div className="ai-page-overlay" />

      <div className="ai-shell">
        <div className="ai-panel">

          {/* Left copy */}
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

          {/* Image cards — scrolling track */}
          <div className="ai-media">
            <div className="ai-scroll-track">
              {/* Set A */}
              <CardSet offset={0} />
              {/* Set B — duplicate for seamless loop */}
              <CardSet offset={0} />
            </div>
          </div>

          {/* Bottom-right copy */}
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