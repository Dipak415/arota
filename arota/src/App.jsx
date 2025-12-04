import { useState, useEffect } from 'react';
import './App.css';

// Hero slideshow images
const heroImages = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1558769132-cb1aea1c8347?w=1920&h=1080&fit=crop"
];

// Product data with images
const products = {
  men: [
      {
      id: 1,
      name: "Winter Cap",
      price: "₹599",
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&h=600&fit=crop"
    },
    {
      id: 2,
      name: "Cable Knit Sweater",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop"
    },
    {
      id: 3,
      name: "Bomber Jacket",
      price: "₹3,799",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop"
    },
    {
      id: 4,
      name: "Fleece Hoodie",
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop"
    },
    {
      id: 5,
      name: "Wool Scarf",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&h=600&fit=crop"
    },
    {
      id: 6,
      name: "Winter Boots",
      price: "₹5,499",
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&h=600&fit=crop"
    },
    {
      id: 19,
      name: "Leather Jacket",
      price: "₹8,999",
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&h=600&fit=crop"
    },
    {
      id: 20,
      name: "Wool Blazer",
      price: "₹6,499",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=600&fit=crop"
    },
    {
      id: 21,
      name: "Thermal Pants",
      price: "₹1,799",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop"
    },
    {
      id: 22,
      name: "Winter Cap",
      price: "₹599",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop"
    },
    {
      id: 23,
      name: "Winter Puffer Coat",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1548126032-079372f6b6d7?w=500&h=600&fit=crop"
    },
    {
      id: 24,
      name: "Cable Knit Sweater",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop"
    },
    {
      id: 25,
      name: "Bomber Jacket",
      price: "₹3,799",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop"
    },
  ],
  women: [
    {
      id: 26,
      name: "Long Winter Coat",
      price: "₹6,999",
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=600&fit=crop"
    },
    {
      id: 27,
      name: "Chunky Cardigan",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
    },
    {
      id: 28,
      name: "Sweater Dress",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop"
    },
    {
      id: 29,
      name: "Winter Parka",
      price: "₹7,499",
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop"
    },
    {
      id: 30,
      name: "Cashmere Scarf",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=600&fit=crop"
    },
    {
      id: 31,
      name: "Ankle Boots",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=600&fit=crop"
    },
    {
      id: 32,
      name: "Wool Poncho",
      price: "₹3,799",
      image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=500&h=600&fit=crop"
    },
    {
      id: 33,
      name: "Fur Collar Jacket",
      price: "₹9,999",
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=600&fit=crop"
    },
    {
      id: 34,
      name: "Knit Turtleneck",
      price: "₹2,299",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=600&fit=crop"
    },
    {
      id: 35,
      name: "Winter Handbag",
      price: "₹5,999",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=600&fit=crop"
    }
  ],
  unisex: [
    {
      id: 36,
      name: "Oversized Puffer",
      price: "₹5,999",
      image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500&h=600&fit=crop"
    },
    {
      id: 37,
      name: "Thermal Hoodie",
      price: "₹2,799",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop"
    },
    {
      id: 38,
      name: "Winter Vest",
      price: "₹3,299",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop"
    },
    {
      id: 39,
      name: "Knit Beanie",
      price: "₹699",
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&h=600&fit=crop"
    },
    {
      id: 40,
      name: "Winter Gloves",
      price: "₹799",
      image: "https://images.unsplash.com/photo-1603403036716-568c4207d048?w=500&h=600&fit=crop"
    },
    {
      id: 41,
      name: "Snow Boots",
      price: "₹6,499",
      image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&h=600&fit=crop"
    },
    {
      id: 42,
      name: "Windbreaker",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop"
    },
    {
      id: 43,
      name: "Fleece Blanket Scarf",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1520638023360-6def43369781?w=500&h=600&fit=crop"
    },
    {
      id: 44,
      name: "Waterproof Backpack",
      price: "₹4,299",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop"
    },
    {
      id: 45,
      name: "Thermal Socks Set",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1586350977415-fb6c2b27c333?w=500&h=600&fit=crop"
    }
  ]
};

// Hero Slideshow Component
function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slideshow">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
}

// Header Component
function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Arota</h1>
        <nav>
          <ul className="nav">
            <li><a onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>Home</a></li>
            <li><a onClick={() => scrollToSection('men')} style={{ cursor: 'pointer' }}>Men</a></li>
            <li><a onClick={() => scrollToSection('women')} style={{ cursor: 'pointer' }}>Women</a></li>
            <li><a onClick={() => scrollToSection('unisex')} style={{ cursor: 'pointer' }}>Unisex</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Product Card Component
function ProductCard({ product, onBuyClick }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <button className="product-button" onClick={() => onBuyClick(product)}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

// Contact Modal Component
function ContactModal({ isOpen, onClose, product }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">Contact Owner</h2>
        <p className="modal-content">
          Thank you for your interest in <strong>{product?.name}</strong>!
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Owner:</span>
            <span className="contact-value">Arojit</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <span className="contact-value">8134896483</span>
          </div>
        </div>
        <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Please call or message to complete your purchase.
        </p>
      </div>
    </div>
  );
}

// Product Section Component
function ProductSection({ title, subtitle, products, onBuyClick, id }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onBuyClick={onBuyClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Main App Component
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <Header />

      {/* Hero Section */}
      <section id="home" className="hero">
        <HeroSlideshow />
      </section>

      {/* Men's Section */}
      <ProductSection
        id="men"
        title="Men's Collection"
        subtitle="Rugged style meets winter warmth"
        products={products.men}
        onBuyClick={handleBuyClick}
      />

      {/* Women's Section */}
      <ProductSection
        id="women"
        title="Women's Collection"
        subtitle="Elegance crafted for the cold season"
        products={products.women}
        onBuyClick={handleBuyClick}
      />

      {/* Unisex Section */}
      <ProductSection
        id="unisex"
        title="Unisex Collection"
        subtitle="Style for everyone, designed for comfort"
        products={products.unisex}
        onBuyClick={handleBuyClick}
      />

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p className="footer-text">
            © 2024 <span className="footer-brand">Arota</span>. All rights reserved.
          </p>
          <p className="footer-text">Winter Session Collection</p>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
}

export default App;
