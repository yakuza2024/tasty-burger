function Header({ cartCount }) {
  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="Tasty Burger home">
        <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
        <span className="brand-name">tasty<span>burger</span><small>GOOD FOOD, NO DRAMA.</small></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#menu">Our menu</a>
        <a href="#menu">Our story</a>
        <a href="#menu">Find us</a>
      </nav>
      <a className="cart-button" href="#menu" aria-label={`Your bag, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 12H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></svg>
        <span>Your bag</span>
        <span className="cart-count" aria-live="polite">{cartCount}</span>
      </a>
    </header>
  )
}

export default Header
