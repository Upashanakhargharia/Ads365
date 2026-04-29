import { useState } from "react";

const serviceData = [
  {
    title: "AI Video Production",
    image: "/images/Image7.png",
  },
  {
    title: "AI Animation Studio",
    image: "/images/Image8.png",
  },
  {
    title: "AI Social Content",
    image: "/images/Image9.png",
  },
  {
    title: "AI Corporate Video",
    image: "/images/Image10.png",
  },
  {
    title: "AI Product Ads",
    image: "/images/Image8.png",
  },
  {
    title: "AI Explainer Video",
    image: "/images/Image9.png",
  },
];

export default function Services() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = serviceData.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex < serviceData.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="services-page">
      <div className="services-bg"></div>
      <div className="services-overlay"></div>

      <div className="services-shell">
        <div className="services-header">
          <h1>Our Ai Services</h1>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for "lorem ipsum"
            will uncover many web sites still in their infancy.
          </p>
        </div>

        <div className="services-slider-wrap">
          <div className="services-cards">
            {visibleCards.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.title}</h3>

                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>

                <button className="work-btn">See Our Work</button>
                <button className="call-btn">Book a Call</button>
              </div>
            ))}
          </div>

          <div className="services-controls">
            <button className="slider-btn prev-btn" onClick={handlePrev}>
              <span className="circle-icon">«</span>
              <span>Prev</span>
            </button>

            <button className="slider-btn next-btn" onClick={handleNext}>
              <span>Swipe Next</span>
              <span className="circle-icon">»</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}