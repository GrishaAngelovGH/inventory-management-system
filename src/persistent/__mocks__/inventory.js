const categories = {
  "123": {
    id: "123",
    name: "Electronics",
    products: [
      { id: 1, name: "Smartphone", quantity: 50, sales: 20, buyingPrice: 600, sellingPrice: 880 },
      { id: 2, name: "Laptop", quantity: 30, sales: 10, buyingPrice: 900, sellingPrice: 1320 },
    ],
  },
  "234": {
    id: "234",
    name: "Sports Equipment",
    products: [
      { id: 9, name: "Football", quantity: 100, sales: 40, buyingPrice: 22.5, sellingPrice: 33 },
    ]
  }
}

const inventory = {
  createCategory: newCategory => {
    const newId = Math.random().toString().slice(2)

    categories[newId] = {
      id: newId,
      name: newCategory[0].toUpperCase() + newCategory.slice(1),
      products: []
    }
  },
  getItems: () => Object.values(categories),
  getProductsForCategory: categoryId => categories[categoryId]?.products || []
}

export default inventory