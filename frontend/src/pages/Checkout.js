import { useSelector } from 'react-redux';

function Checkout() {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-bold mb-2">Order Summary</h2>
          {cartItems.map(item => (
            <div key={item.product._id} className="border p-4 rounded-lg mb-4">
              <h3 className="text-md font-bold">{item.product.name}</h3>
              <p className="text-gray-700">Quantity: {item.quantity}</p>
              <p className="text-gray-900 font-bold">${item.product.price}</p>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-bold">Total: ${totalAmount}</h3>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Shipping Information</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Address</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">City</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Postal Code</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Country</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
