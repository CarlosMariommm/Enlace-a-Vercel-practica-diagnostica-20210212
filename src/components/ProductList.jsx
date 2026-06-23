export const ProductList = ({ products, loading, error }) => {

  
    if (loading) {
      return <p>Cargando productos desde el servidor...</p>;
    }
  
  
    if (error) {
      return <p style={{ color: "red" }}>⚠️ {error}</p>;
    }
  
  
    if (!products || products.length === 0) {
      return <p>No hay productos registrados en la tienda.</p>;
    }
  
  
  return (
  <div style={{ marginTop: "20px" }}>
    <h2>Inventario de Productos</h2>
    <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
    <thead>
      <tr style={{ backgroundColor: "#f2f2f2" }}>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Stock</th>
      </tr>
    </thead>
  <tbody>
  
 {products.map((product) => (
  <tr key={product._id}> 
    <td><strong>{product.name}</strong></td>
    <td>{product.description || "Sin descripción"}</td>
    <td>${product.price !== undefined ? product.price.toFixed(2) : "0.00"}</td>
    <td>{product.stock !== undefined ? product.stock : 0} u.</td>
  </tr>
  
 ))}

  </tbody>
  </table>
  </div>
    );
  
};
   