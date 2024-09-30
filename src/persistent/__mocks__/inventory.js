const categories = {
  "123": {
    id: "123",
    name: "Electronics",
    products: [
      { id: 1, name: "Smartphone", creationDate: new Date().toISOString(), quantity: 50, buyingPrice: 600, sellingPrice: 880 },
      { id: 2, name: "Laptop", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 30, buyingPrice: 900, sellingPrice: 1320 },
    ],
  },
  "234": {
    id: "234",
    name: "Sports Equipment",
    products: [
      { id: 9, name: "Football", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 100, buyingPrice: 22.5, sellingPrice: 33 },
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
  getProductsForCategory: categoryId => categories[categoryId]?.products || [],
  updateCategoryName: (categoryId, newCategoryName) => {
    categories[categoryId].name = newCategoryName
  }
}

export default inventory