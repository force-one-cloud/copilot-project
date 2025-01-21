import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>Your cart is empty. <Link to="/" className="text-blue-500">Go shopping</Link></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cartItems.map(item => (
            <div key={item.product._id} className="border p-4 rounded-lg">
              <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-lg font-bold mb-2">{item.product.name}</h2>
              <p className="text-gray-700 mb-2">Quantity: {item.quantity}</p>
              <p className="text-gray-900 font-bold mb-4">${item.product.price}</p>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-8">
          <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
