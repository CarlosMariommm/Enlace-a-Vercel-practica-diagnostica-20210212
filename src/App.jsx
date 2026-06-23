import { useProducts } from "./hook/useProducts"; // Ajusta la ruta según tu carpeta de hooks
import { ProductForm } from "./components/ProductForm"; // Ajusta la ruta según tu carpeta de componentes
import { ProductList } from "./components/ProductList"; // Ajusta la ruta según tu carpeta de componentes
function App() {
 // Consumimos todo lo necesario de nuestro Custom Hook
 const { products, loading, error, insertProduct } = useProducts();
 return (
<div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
<header style={{ borderBottom: "2px solid #eee", paddingBottom: "10px", marginBottom: "20px" }}>
<h1>Panel de Administración de la Tienda</h1>
</header>
<main>
       {/* Pasamos la función de insertar al formulario */}
<ProductForm onProductCreated={insertProduct} />
<hr style={{ margin: "40px 0", border: "0", borderTop: "1px solid #ccc" }} />
       {/* Pasamos los estados y los datos a la lista */}
<ProductList products={products} loading={loading} error={error} />
</main>
</div>
 );
}
export default App;