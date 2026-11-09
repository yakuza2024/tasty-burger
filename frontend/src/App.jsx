import './App.css'

const products = [
  {
    id: 1,
    name: 'Crispy Chicken',
    description: 'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
    price: 19.15,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Ultimate Bacon',
    description: 'House patty, cheddar cheese, bacon, onion, mustard',
    price: 29.32,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayc6A7OFGDyiMhFBKiGez2ebxdBtZX5_wGb9fJi4n9A&s=10',
  },
  {
    id: 3,
    name: 'Black Sheep',
    description: 'American cheese, tomato relish, avocado, lettuce, red onion',
    price: 29.15,
    image:
      'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Vegan Burger',
    description: 'House patty, cheddar cheese, bacon, onion, mustard',
    price: 29.25,
    image:
      'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80',
  },
]

function App() {
  return (
    <div className="burger-page">
      <header className="topbar">
        <div className="brand" aria-label="Tasty Burger home">
          <div className="brand-burger" aria-hidden="true">
            <span className="bun bun-top" />
            <span className="patty" />
            <span className="bun bun-bottom" />
          </div>
          <div className="brand-text">
            <span className="brand-line">TASTY</span>
            <span className="brand-line alt">BURGER</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#">ABOUT</a>
          <a href="#">OUR MENU</a>
          <a href="#">SHOP</a>
          <a href="#">CONTACT</a>
        </nav>

        <button type="button" className="cart-button" aria-label="Shopping cart">
          <span className="cart-icon" aria-hidden="true">◌</span>
          <span className="cart-badge" aria-hidden="true">1</span>
        </button>
      </header>

      <main className="menu-wrap">
        <h1>OUR CRAZY BURGERS</h1>

        <p className="intro">
          Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy
          patties, bold toppings, and irresistible sauces, all stacked on a perfectly
          toasted bun. Whether you like it cheesy, or extra meaty, we&apos;ve got a burger
          that will blow your mind!
        </p>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="card-footer">
                <div className="rating-row">
                  <span className="stars" aria-label="Five star rating">
                    ★★★★★
                  </span>
                  <button type="button" className="favorite-button" aria-label={`Save ${product.name}`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4c1.74 0 3.41.81 4.5 2.09A6.18 6.18 0 0 1 15.5 4 4.5 4.5 0 0 1 20 8.5c0 3.78-3.4 6.86-8.55 11.5L12 21.35Z"/>
                    </svg>
                  </button>
                </div>

                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="price-row">
                  <span className="price-tag">£{product.price.toFixed(2)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
