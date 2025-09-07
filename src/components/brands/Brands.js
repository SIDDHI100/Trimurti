import React from "react";
import "./Brands.css";

// import brand images
import brand1 from "../../assets/Brands/brand1.png";
import brand2 from "../../assets/Brands/brand2.png";
import brand3 from "../../assets/Brands/brand3.png";
import brand4 from "../../assets/Brands/brand4.png";

const BrandsData = [
  { name: "Titan", logo: brand1 },
  { name: "Fossil", logo: brand2 },
  { name: "Casio", logo: brand3 },
  { name: "Ray-Ban", logo: brand4 },
];

const Brands = () => {
  return (
    <div className="brands-section">
      <h2 className="brands-heading">Top Brands</h2>
      <div className="brands-gallery">
        {BrandsData.map((brand, idx) => (
          <div key={idx} className="brand-card">
            <img src={brand.logo} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
