import { useState, useEffect } from 'react';
const API_URL = 'http://localhost:4000/api/products';

export const useProducts = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError('Error al cargar los productos');
    } finally {
      setLoading(false);
    }
  };

  const insertProduct = async (productData) => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        credentials: 'include', 
        body: JSON.stringify(productData),

      });
      const data = await response.json();
      await fetchProducts(); 
      return data;
    } catch (err) {
      setError('Error al guardar el producto');
      throw err;
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, []);
  return {
    products,
    loading,
    error,
    insertProduct,
    refetch: fetchProducts
  };
};
 