export default function AI() {
  return (
    <section className="ai-page">
      <div className="ai-page-bg" />
      <div className="ai-page-overlay" />

      <div className="ai-shell">
        <div className="ai-panel">

          {/* LEFT */}
          <div className="ai-left">
            <h1>AI</h1>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
            <p>
              <strong>Voluptatum deleniti</strong> atque corrupti quos dolores
              et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
            <button className="ai-cta">Let's Connect with AI</button>
          </div>

          {/* ✅ FIXED MEDIA (infinite scroll) */}
          <div className="ai-media">
            <div className="ai-track">
              <CardStack />
              <CardStack /> {/* duplicate = seamless loop */}
            </div>
          </div>

          {/* RIGHT */}
          <div className="ai-right-copy">
            <h3>
              Et harum quidem<br />
              rerum facilis est et<br />
              expedita
            </h3>
            <p>
              Officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </div>

          {/* WATERMARK */}
          <div className="ai-watermark">
            ADS 365 ADS 365 ADS 365 ADS 365 ADS 365 ADS 365
          </div>

        </div>
      </div>
    </section>
  );
}


/* 🔁 reusable stack */
function CardStack() {
  return (
    <>
      <div className="ai-card ai-card-top">
        <img src="/images/Image12.png" alt="" />
      </div>

      <div className="ai-card ai-card-middle">
        <img src="/images/Image13.png" alt="" />
        <button className="play-circle">▶</button>
      </div>

      <div className="ai-card ai-card-bottom">
        <img src="/images/Image14.png" alt="" />
      </div>

      <div className="ai-card ai-card-last">
        <img src="/images/Image15.png" alt="" />
      </div>
    </>
  );
}