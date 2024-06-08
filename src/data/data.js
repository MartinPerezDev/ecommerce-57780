const productos = [
  {
    id: "Adff21",
    nombre: "Producto 1",
    descripcion: "Descripcion 1",
    stock: 5,
    categoria: "hamburguesas",
    imagen: "/img/hamburguesa.jpg",
    precio: 200
  },
  {
    id: "Gjmn222",
    nombre: "Producto 2",
    descripcion: "Descripcion 2",
    stock: 10,
    categoria: "helados",
    imagen: "https://th.bing.com/th/id/R.5275fd24bae5d6f9ddb83d82cfa72feb?rik=Y9aYKgn3g5sblg&riu=http%3a%2f%2fheladosydeliciasbotanasyalgomass.files.wordpress.com%2f2013%2f05%2fpostre-en-cono-con-helado-de-fresa-y-frutas-frescas-como-fresa-y-moras-azules-ice-cream-cone-with-strawberries.jpg&ehk=B7flGMxWwYCiQF%2bL4E%2bSYsvogM%2b0UyvcQktqVsPBLzE%3d&risl=&pid=ImgRaw&r=0",
    precio: 150
  },
  {
    id: "Lom222",
    nombre: "Producto 3",
    descripcion: "Descripcion 3",
    stock: 2,
    categoria: "mascotas",
    imagen: "https://th.bing.com/th/id/OIP.4SsKFAsz_O3JesFuyVcFUwHaHa?rs=1&pid=ImgDetMain",
    precio: 300
  }
]

const obtenerProductos = () => {
  return new Promise( (resolve, reject) => {
    //simulamos un retraso de red de 3 segundos
    setTimeout(()=>{
      resolve(productos)
    }, 3000)

  })
}

export { obtenerProductos }