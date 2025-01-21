import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col md:flex-row">
        <img src={product.imageUrl} alt={product.name} className="w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0" />
        <div className="md:ml-8">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-900 font-bold mb-4">${product.price}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
