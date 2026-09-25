import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, updateQty, total } = useCart()

  if (cart.length === 0) return <p className="page cart-empty">Your cart is empty</p>

  return (
    <div className="page cart-page">
      {cart.map((item) => (
        <div className="cart-line" key={`${item._id}-${item.selectedSize}`}>
          <span className="cart-line-name">
            {item.name} <span className="cart-line-size">({item.selectedSize})</span>
          </span>
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) =>
              updateQty(item._id, item.selectedSize, Number(e.target.value))
            }
            className="cart-qty-input"
          />
          <span className="cart-line-total">${(item.price * item.qty).toFixed(2)}</span>
          <button
            className="remove-btn"
            onClick={() => removeFromCart(item._id, item.selectedSize)}
          >
            Remove
          </button>
        </div>
      ))}
      <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
    </div>
  )
}
