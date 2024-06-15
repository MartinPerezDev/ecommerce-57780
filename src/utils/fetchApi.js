//traer todos los productos
const getProducts = () => {

  return fetch("http://localhost:8080/api/productos")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      return data
    })
    .catch((error) => console.log(error))
}

const getProductById = (idProduct) => {
  return fetch("http://localhost:8080/api/productos/" + idProduct)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      return data
    })
    .catch((error) => console.log(error))
}

const addProduct = (newProduct) => {
  const newProductJson = JSON.stringify(newProduct)

  return fetch("http://localhost:8080/api/productos", {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: newProductJson
  })
    .then((respuesta) => respuesta.json())
    .then((data) => {
      return data
    })
    .catch((error) => console.log(error))
}

const modProduct = (idProduct, mod) => {
  const modJson = JSON.stringify(mod)

  return fetch("http://localhost:8080/api/productos/"+idProduct, {
    method: "PUT",
    headers: {
      'Content-Type': "application/json"
    },
    body: modJson
  })
    .then((respuesta) => respuesta.json())
    .then((data) => {
      return data
    })
    .catch((error) => console.log(error))
}

const deleteProduct = (idProduct) => {

  return fetch("http://localhost:8080/api/productos/"+idProduct, {
    method: "DELETE"
  })
    .then((respuesta) => respuesta.json())
    .then((data) => {
      return data
    })
    .catch((error) => console.log(error))
}

export { getProducts, getProductById, addProduct, modProduct, deleteProduct }