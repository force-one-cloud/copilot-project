import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-gray-900 font-bold mb-4">${product.price}</p>
      <Link to={`/product/${product._id}`} className="bg-blue-500 text-white px-4 py-2 rounded">View Details</Link>
    </div>
  );
}

export default ProductCard;
