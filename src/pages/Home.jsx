import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function Home() {
  const { addToCart } = useCart()
  const [addedIds, setAddedIds] = useState(new Set())

  const handleAdd = (product) => {
    addToCart(product)
    setAddedIds((prev) => new Set(prev).add(product.id))
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev)
        next.delete(product.id)
        return next
      })
    }, 800)
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', padding: '1rem' }}>
      {products.map((p) => (
        <div key={p.id} style={{ border: '1px solid #eee', padding: '1rem' }}>
          <Link to={`/product/${p.id}`}>
            <img src={p.image} alt={p.name} style={{ width: '100%' }} />
            <h3>{p.name}</h3>
          </Link>
          <p>₱{p.price}</p>
          <button onClick={() => handleAdd(p)}>{addedIds.has(p.id) ? 'Added' : 'Add to Cart'}</button>
        </div>
      ))}
    </div>
  )
}
