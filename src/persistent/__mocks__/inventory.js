const categories = {
  "123": {
    id: "123",
    name: "Electronics",
    products: [
      { id: "1", categoryId: "123", name: "Smartphone", creationDate: new Date().toISOString(), quantity: 50, buyingPrice: 600, sellingPrice: 880 },
      { id: "2", categoryId: "123", name: "Laptop", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 30, buyingPrice: 900, sellingPrice: 1320 },
    ],
  },
  "234": {
    id: "234",
    name: "Sports Equipment",
    products: [
      { id: "9", categoryId: "234", name: "Football", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 100, buyingPrice: 22.5, sellingPrice: 33 },
    ]
  }
}

const sales = {
  "1": [
    { productName: "Smartphone", quantity: 5, sellingPrice: 880, date: new Date("2024-09-21T12:00:00.000Z"), total: 4400 }
  ],
  "2": [
    { productName: "Laptop", quantity: 12, sellingPrice: 1320, date: new Date("2024-09-21T12:00:00.000Z"), total: 15840 }
  ]
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
  },
  getAllSales: () => Object.values(sales).flat()
}

export default inventory