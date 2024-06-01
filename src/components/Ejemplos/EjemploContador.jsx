import { useState } from "react";
import Contador from "./Contador";

const EjemploContador = ({ stock }) => {
  const [contador, setContador] = useState(1);
  //let contador = 1

  const aumentarContador = () => {
    //contador = contador + 1
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuirContador = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <Contador
      contador={contador}
      aumentarContador={aumentarContador}
      disminuirContador={disminuirContador}
    />
  );
};
export default EjemploContador;
