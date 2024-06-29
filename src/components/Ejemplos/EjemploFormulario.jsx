import { useState } from "react"

const EjemploFormulario = () => {
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const [email, setEmail] = useState("")

  const handleChangeNombre = (event) => {
    setNombre(event.target.value)
  }

  const handleChangeDireccion = (event) => {
    setDireccion(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    //evitamos recargar la pagina y perder el valor de nuestros estados
    event.preventDefault()
    const usuario = { nombre, direccion, email }

    console.log(usuario)
  }

  return (
    <form onSubmit={handleSubmit} >
      <label>Nombre: </label>
      <input type="text" value={nombre} onChange={handleChangeNombre} />

      <label>Dirección: </label>
      <input type="text" value={direccion} onChange={handleChangeDireccion} />

      <label>Email</label>
      <input type="email" value={email} onChange={handleChangeEmail} />

      <button type="submit" >Enviar</button>
    </form>
  )
}
export default EjemploFormulario