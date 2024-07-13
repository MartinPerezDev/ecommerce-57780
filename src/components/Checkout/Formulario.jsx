const Formulario = ({ datosForm, guardarDatosInput, enviarOrden }) => {
  return (
    <form onSubmit={enviarOrden}>
      <label>Nombre</label>
      <input type="text" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} />

      <label>Telefono</label>
      <input type="text" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} />

      <label>Email</label>
      <input type="email" name="email" value={datosForm.email} onChange={guardarDatosInput} />

      <button type="submit">Enviar orden</button>
    </form>
  );
};
export default Formulario;
