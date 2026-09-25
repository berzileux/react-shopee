import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS, CATEGORIES } from '../data/products'

export default function Home() {
  const [category, setCategory] = useState('All')

  const filtered = PRODUCTS.filter(
    (p) => category === 'All' || p.category === category
  )

  return (
    <div className="page">
      <div className="category-filter">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={`category-btn${c === category ? ' active' : ''}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map((p) => (
          <Link to={`/product/${p._id}`} key={p._id} className="product-card">
            <img src={p.image} alt={p.name} className="product-image" />
            <h3>{p.name}</h3>
            <p className="product-price">${p.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
