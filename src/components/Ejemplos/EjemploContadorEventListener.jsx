import { useState, useEffect } from "react"

const EjemploContadorEventListener = () => {
  const [contador, setContador] = useState(1)

  const handleClick = () => {
    setContador( (prevContador) => prevContador + 1 )
  }

  useEffect(()=>{

    const botonSumar = document.getElementById("boton-sumar")
    botonSumar.addEventListener("click", handleClick)

    //esta funcion se ejecuta cuando nuestro componente se desmonta
    return () => {
      //eliminamos nuestro evento
      botonSumar.removeEventListener("click", handleClick)
    }

  }, [])

  return (
    <div>
      <p>valor: {contador}</p>
      <button id="boton-sumar" > + </button>
    </div>
  )
}
export default EjemploContadorEventListener