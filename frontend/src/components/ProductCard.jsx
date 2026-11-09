function ProductCard({ product, isFavorite, onFavorite, onAdd }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <button
          className={isFavorite ? 'favorite-button favorite-active' : 'favorite-button'}
          type="button"
          onClick={onFavorite}
          aria-label={isFavorite ? `Remove ${product.name} from favorites` : `Add ${product.name} to favorites`}
          aria-pressed={isFavorite}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6l1.2 1.2L12 21l7.6-7.6 1.2-1.2a5.4 5.4 0 0 0 0-7.6Z" /></svg>
        </button>
      </div>
      <div className="product-details">
        <div className="product-title-row">
          <h3>{product.name}</h3>
          <span className="product-price">${product.price.toFixed(2)}</span>
        </div>
        <p>{product.description}</p>
        <button className="add-button" onClick={onAdd} type="button" aria-label={`Add ${product.name} to your bag`}>
          <span>Add to bag</span>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 4v12m-6-6h12" /></svg>
        </button>
      </div>
    </article>
  )
}

export default ProductCard
