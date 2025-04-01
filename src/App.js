import React, { memo, useState } from 'react';
const ProductItem = memo(({ product, onDelete }) => {
    console.log("Rendering product item component")
  return (
    <div className="p-4 w-full border rounded-md shadow-sm mb-4 flex flex-col items-center text-center">
      <img 
        src={product.image} 
        alt={product.name} 
       style={{
        width:"150px",
        height:"150px"
       }}
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
      <button 
        onClick={() => onDelete(product.id)} 
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
});
const ProductList = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false) 
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'Product 1', 
      description: 'Description for Product 1', 
      image: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405217/starwars/item-2.webp' 
    },
    { 
      id: 2, 
      name: 'Product 2', 
      description: 'Description for Product 2', 
      image: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405217/starwars/item-4.webp' 
    },
    { 
      id: 3, 
      name: 'Product 3', 
      description: 'Description for Product 3', 
      image: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405217/starwars/item-3.webp' 
    },
    { 
        id: 4, 
        name: 'Product 4', 
        description: 'Description for Product 4', 
        image: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405217/starwars/item-1.webp' 
      }
  ]);
  const toggleLogin = () => {
    setIsLoggedIn(val => !val );
  };
  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };
  return (
    <div className="w-full p-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Product List</h2>
      {isLoggedIn ? <button 
        onClick={toggleLogin} 
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mb-6"
      >
        Log out
      </button> : <button 
      onClick={toggleLogin} 
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-6"
    >
      Log in
    </button>}
      <div className='flex space-x-10 w-full'>
        {products.length > 0 ? (
            products.map(product => (
            <ProductItem 
                key={product.id} 
                product={product} 
                onDelete={deleteProduct} 
            />
            ))
        ) : (
            <p className="text-gray-500 text-center">No products available.</p>
        )}
      </div>
    </div>
  );
};
export default ProductList;