import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = PRODUCTS.find((p) => p._id === id)
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState(null)
  const [added, setAdded] = useState(false)

  if (!product) return <p>Product not found</p>

  const handleAdd = () => {
    if (!selectedSize) return
    addToCart(product, selectedSize)
    setAdded(true)
    setTimeout(() => setAdded(false), 800)
  }

  return (
    <div className="product-detail page">
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p className="product-detail-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p>Color: {product.color}</p>
        <p>Stock: {product.stock}</p>

        <div className="size-selector">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`size-btn${size === selectedSize ? ' active' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          className="add-to-cart-btn"
          onClick={handleAdd}
          disabled={!selectedSize}
        >
          {added ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
