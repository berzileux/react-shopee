import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  if (!product) return <p>Product not found</p>

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 800)
  }

  return (
    <div style={{ padding: '2rem' }}>
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <h2>{product.name}</h2>
      <p>₱{product.price}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={handleAdd}>{added ? 'Added' : 'Add to Cart'}</button>
    </div>
  )
}
