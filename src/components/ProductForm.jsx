import { useForm } from "react-hook-form";
export const ProductForm = ({ onProductCreated }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
    try {
          const formattedData = {
            ...data,
            price: data.price ? Number(data.price) : undefined,
            stock: data.stock ? Number(data.stock) : undefined,
        };
        await onProductCreated(formattedData);
        reset(); 
    } catch (error) {
     console.error("Error al enviar el formulario:", error);
   }
};

 return (
<form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "20px 0" }}>
    <h2>Crear Producto</h2>
    <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block" }}>Nombre:</label>
            <input
                type="text"
                {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && <p style={{ color: "red", margin: "4px 0" }}>{errors.name.message}</p>}
    </div>
    <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block" }}>Descripción:</label>
        <textarea {...register("description")} />
    </div>

    <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block" }}>Precio:</label>
        <input
            type="number"
            step="0.01"
            {...register("price")}
        />
    </div>
    <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block" }}>Stock:</label>
        <input
            type="number"
            {...register("stock")}
        />
    </div>
    <button type="submit">Guardar Producto</button>
</form>
 );
};