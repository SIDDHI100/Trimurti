import React, { useState } from "react";
import "./Varieties.css";

// Sample images (replace with your actual assets)
import watchImg from "../../assets/Varieties/variety1.png";
import frameImg from "../../assets/Varieties/variety4.png";
import toyImg from "../../assets/Varieties/variety5.png";
import beautyImg from "../../assets/Varieties/variety3.png";
import giftsImg from "../../assets/Varieties/variety2.png";

// Gallery sample images
import gallery1 from "../../assets/Varieties/gallery1.png";
import gallery2 from "../../assets/Varieties/gallery2.png";
import gallery3 from "../../assets/Varieties/gallery3.png";

const VarietiesData = [
  {
    name: "Watch Gifts",
    description: "Elegant watch gift sets for every occasion.",
    image: watchImg,
    gallery: [gallery1, gallery2, gallery3],
  },
  {
    name: "Frames",
    description: "Trendy eyeglass and photo frames.",
    image: frameImg,
    gallery: [gallery2, gallery3],
  },
  {
    name: "Toys",
    description: "Fun and creative toys for kids and collectors.",
    image: toyImg,
    gallery: [gallery1, gallery3],
  },
  {
    name: "Beauty Products",
    description: "Premium beauty and skincare essentials.",
    image: beautyImg,
    gallery: [gallery1, gallery2],
  },
  {
    name: "Gifts",
    description: "Premium brands gifts essentials.",
    image: giftsImg,
    gallery: [gallery1, gallery2],
  }
];

const Varieties = () => {
  const [selectedVariety, setSelectedVariety] = useState(null);

  return (
    <>
      <div className="variety-section">
        <h2 className="variety-heading">Our Varieties</h2>
        <div className="variety-cards-container">
          {VarietiesData.map((item, index) => (
            <div
              className="variety-card"
              key={index}
              onClick={() => setSelectedVariety(item)}
            >
              <div className="variety-image">
                <img src={item.image} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedVariety && (
        <div className="variety-details-container">
          <h3>{selectedVariety.name}</h3>
          <p>{selectedVariety.description}</p>

          <div className="gallery-section">
            <h4>Photo Gallery</h4>
            <div className="gallery-grid">
              {selectedVariety.gallery.map((img, idx) => (
                <img key={idx} src={img} alt={`Gallery ${idx + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Varieties;
