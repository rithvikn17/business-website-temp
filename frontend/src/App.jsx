import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/menu-items")
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error loading menu items:", error));
  }, []);

  return (
    <div className="page">
      <header className="navbar">
        <div className="logo">MUKJA.</div>

        <nav>
          <a href="#menu">MENU</a>
          <a href="#find-us">FIND US</a>
          <a className="order-button" href="#order">
            ORDER NOW
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>
            KOREAN STREET FOOD.
            <br />
            REIMAGINED.
          </h1>
          <p>Find us inside Super G Mart, Suite 309.</p>
        </div>
      </section>

      <main className="content">
        <section id="menu">
          <h2>THE MENU PREVIEW</h2>

          <div className="menu-grid">
            {menuItems.map((item) => (
              <div className="menu-card" key={item.id}>
                <img
                  className="food-image"
                  src={item.imageUrl}
                  alt={item.name}
                />

                <div className="menu-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <strong>${item.price}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>LATEST ON GRAM</h2>

          <div className="gram-grid">
            <img className="gram-box" src="/images/gimbap.jpeg" alt="Instagram preview 1" />
            <img className="gram-box" src="/images/gimbap1.jpeg" alt="Instagram preview 2" />
            <img className="gram-box" src="/images/gimbap2.jpeg" alt="Instagram preview 3" />
          </div>

          <button className="instagram-button">Instagram</button>
        </section>
      </main>

      <footer id="find-us" className="footer">
        <div>
          <h3>MUKJA.</h3>
          <h4>CONTACT</h4>
          <p>(900) 339-3278</p>
          <p>mukja@example.com</p>
        </div>

        <div>
          <h4>HOURS</h4>
          <p>Monday - Sunday</p>
          <p>7:00 AM - 9:00 PM</p>
        </div>

        <div>
          <h4>PROUDLY LOCAL | ALLEY 51</h4>
          <span className="status">● Open Now: Closes 8PM</span>
        </div>
      </footer>
    </div>
  );
}

export default App;