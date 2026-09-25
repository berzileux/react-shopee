import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { cart } = useCart()
  const count = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/">Shopee Clone</Link>
      <Link to="/cart">Cart ({count})</Link>
    </nav>
  )
}
