import React, { useState } from 'react';
import './Owner.css';

import owner1 from '../../assets/Owners/owner1.png';
import owner2 from '../../assets/Owners/owner2.png';
import owner3 from '../../assets/Owners/owner3.png';
import owner4 from '../../assets/Owners/owner4.png';

import shop1img1 from '../../assets/Shops/shop11.png';
import shop1img2 from '../../assets/Shops/shop12.png';

import shop2img1 from '../../assets/Shops/shop11.png';
import shop2img2 from '../../assets/Shops/shop11.png';

import shop3img1 from '../../assets/Shops/shop11.png';
import shop3img2 from '../../assets/Shops/shop11.png';

import shop4img1 from '../../assets/Shops/shop11.png';
import shop4img2 from '../../assets/Shops/shop11.png';

const Owners = [
  {
    name: 'Amar Zende',
    image: owner1,
    description: 'Founder & Watch Designer',
    location: 'Walwa, India',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.196098580103!2d73.85260447474255!3d18.5164219696765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c09e67e58cd7%3A0xdeb7ab728c8c1a6e!2sMG%20Road%2C%20Pune!5e0!3m2!1sen!2sin!4v1625218631200!5m2!1sen!2sin',
    images: [shop1img1, shop1img2],
  },
  {
    name: 'Siddhesh Zende',
    image: owner2,
    description: 'Operations & Quality Lead',
    location: 'Palus, India',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610180604!2d72.74109962040597!3d19.082197839825366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1e72e179e3%3A0x6c369b5d19474d71!2sMumbai!5e0!3m2!1sen!2sin!4v1625218738535!5m2!1sen!2sin',
    images: [shop2img1, shop2img2],
  },
  {
    name: 'Amar Zende',
    image: owner3,
    description: 'Marketing & Sales Head',
    location: 'Ashta, India',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8391953767!2d77.06889954513538!3d28.527280343555556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce36ecbd9d3b1%3A0x89621bb9c7c5d1be!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1625218787495!5m2!1sen!2sin',
    images: [shop3img1, shop3img2, shop1img2, shop2img1],
  },
  {
    name: 'Siddhesh Zende',
    image: owner4,
    description: 'Customer Success Manager',
    location: 'Walwa, India',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62161.77007371003!2d77.56755650381247!3d12.971598645594716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c3f0b85f%3A0x4c41877f4eb85cd2!2sBangalore!5e0!3m2!1sen!2sin!4v1625218853300!5m2!1sen!2sin',
    images: [shop4img1, shop4img2],
  },
];

const Owner = () => {
  const [selectedOwner, setSelectedOwner] = useState(null);

  return (
    <>
      <div className="owner-section">
        <h2 className="owner-heading">Meet Our Team</h2>
        <div className="owner-cards-container">
          {Owners.map((owner, index) => (
            <div
              className="owner-card"
              key={index}
              onClick={() => setSelectedOwner(owner)}
            >
              <div className="owner-image">
                <img src={owner.image} alt={owner.name} />
              </div>
              <h3>{owner.name}</h3>
              <p>{owner.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedOwner && (
        <div className="owner-details-container">
          <h3>Location: {selectedOwner.location}</h3>
          <div className="map-and-images-wrapper">
            <div className="map-container">
              <iframe
                src={selectedOwner.mapEmbed}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Owner Location"
              ></iframe>
            </div>

            <div className="shop-images-container">
              <h4>Shop Photos</h4>
              <div className="shop-images-grid">
                {selectedOwner.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`Shop ${idx + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Owner;
