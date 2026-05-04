export default function Industries() {
  const industries = [
    { icon: "fa-building", label: "Realestate" },
    { icon: "fa-utensils", label: "Restaurant", active: true },
    { icon: "fa-motorcycle", label: "Motor" },
    { icon: "fa-hospital", label: "Hospital" },
    { icon: "fa-school", label: "Schools" },
    { icon: "fa-dumbbell", label: "Fitness" },
    { icon: "fa-spa", label: "Beauty" },
    { icon: "fa-plane", label: "Travel" },
    { icon: "fa-mobile-screen-button", label: "Electronics" },
    { icon: "fa-store", label: "Local Business" },
  ];

  return (
    <section className="industries-page">
      <div className="industries-bg"></div>
      <div className="industries-overlay"></div>

      <div className="industries-shell">
        {/* <div className="phone-hero">
          <img src="/images/mobilee.png" alt="Hand holding phone" />
        </div> */}

        <div className="industries-content">
          <h2>Our Service Industries</h2>

          <div className="industries-grid">
            {industries.map((item, index) => (
              <div
                className={`industry-item ${item.active ? "active" : ""}`}
                key={index}
              >
                <i className={`fa-solid ${item.icon}`}></i>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}