import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, updateQty, total } = useCart()

  if (cart.length === 0) return <p style={{ padding: '2rem' }}>Your cart is empty</p>

  return (
    <div style={{ padding: '2rem' }}>
      {cart.map((item) => (
        <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span>{item.name}</span>
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) => updateQty(item.id, Number(e.target.value))}
            style={{ width: '50px' }}
          />
          <span>₱{item.price * item.qty}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₱{total}</h3>
    </div>
  )
}
