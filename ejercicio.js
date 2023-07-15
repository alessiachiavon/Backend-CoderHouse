class ProductManager{
	constructor(){
		this.products = []
		this.nextId = 1
	}

	addProduct(product){
		if(!this.isProductValid(product)){
			console.log('Error: el producto no es válido')
			return
		}

		if (this.isCodeDuplicate(product.code)){
			console.log('Error: el código del producto ya está en uso')
			return
		}

		product.id = this.nextId++
		this.products.push(product)
	}

	getProducts(){
		return this.products
	}

	getProductsById(id){
		const product = this.products.find((p) => p.id === id )
		if(product){
			return product
		} else {
			console.log('Error: el producto no fue encontrado')
		}
	}

	isProductValid(product){
		return(
			product.title &&
			product.description &&
			product.price &&
			product.thumbnail &&
			product.code &&
			product.stock !== undefined
		)
	}

	isCodeDuplicate(code){
		return this.products.some((p) => p.code === code)
	}
}

const productManager = new ProductManager()

//Agrego products

productManager.addProduct({
	title: 'Producto 1',
	description: 'Esta es la descripción del Producto 1',
	price: 25,
	thumbnail: '/imagenProducto1.jpg',
	code: 'prod001',
	stock: 8
})

productManager.addProduct({
	title: 'Producto 2',
	description: 'Esta es la descripción del Producto 2',
	price: 15,
	thumbnail: '/imagenProducto2.jpg',
	code: 'prod002',
	stock: 3
})

//Obtengo los productos

const productsList = productManager.getProducts()

console.log(productsList)

//Obtengo los product by ID

const productId = productManager.getProductsById(2)
console.log(productId)

//Obtengo producto inexistente

const noProduct = productManager.getProductsById(8)