import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { cart } = useCart()
  const count = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Shopping Cart</Link>
      <Link to="/cart" className="navbar-cart">
        Cart <span className="cart-badge">{count}</span>
      </Link>
    </nav>
  )
}
