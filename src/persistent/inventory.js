const defaultInventory = {
  categories: {
    "8965035081209731": {
      id: "8965035081209731",
      name: "Electronics",
      products: [
        { id: 1, name: "Smartphone", quantity: 50, sales: 20, buyingPrice: 600, sellingPrice: 880 },
        { id: 2, name: "Laptop", quantity: 30, sales: 10, buyingPrice: 900, sellingPrice: 1320 },
        { id: 3, name: "Tablet", quantity: 60, sales: 25, buyingPrice: 300, sellingPrice: 440 },
        { id: 4, name: "Smartwatch", quantity: 40, sales: 15, buyingPrice: 150, sellingPrice: 220 },
        { id: 5, name: "Wireless Earbuds", quantity: 70, sales: 35, buyingPrice: 112.5, sellingPrice: 165 },
        { id: 6, name: "Camera", quantity: 25, sales: 8, buyingPrice: 750, sellingPrice: 1100 },
        { id: 7, name: "Bluetooth Speaker", quantity: 80, sales: 40, buyingPrice: 90, sellingPrice: 132 },
        { id: 8, name: "Monitor", quantity: 45, sales: 18, buyingPrice: 225, sellingPrice: 330 },
      ],
    },
    "9434856588755531": {
      id: "9434856588755531",
      name: "Sports Equipment",
      products: [
        { id: 9, name: "Football", quantity: 100, sales: 40, buyingPrice: 22.5, sellingPrice: 33 },
        { id: 10, name: "Basketball", quantity: 80, sales: 30, buyingPrice: 26.25, sellingPrice: 38.5 },
        { id: 11, name: "Tennis Racket", quantity: 60, sales: 25, buyingPrice: 52.5, sellingPrice: 77 },
        { id: 12, name: "Baseball Bat", quantity: 50, sales: 20, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 13, name: "Soccer Cleats", quantity: 70, sales: 18, buyingPrice: 67.5, sellingPrice: 99 },
        { id: 14, name: "Yoga Mat", quantity: 90, sales: 35, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: 15, name: "Golf Clubs", quantity: 20, sales: 10, buyingPrice: 225, sellingPrice: 330 },
        { id: 16, name: "Dumbbells", quantity: 60, sales: 22, buyingPrice: 60, sellingPrice: 88 },
      ],
    },
    "19699180016919549": {
      id: "19699180016919549",
      name: "Clothing",
      products: [
        { id: 17, name: "T-shirt", quantity: 200, sales: 90, buyingPrice: 11.25, sellingPrice: 16.5 },
        { id: 18, name: "Jeans", quantity: 100, sales: 40, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 19, name: "Jacket", quantity: 60, sales: 20, buyingPrice: 90, sellingPrice: 132 },
        { id: 20, name: "Sneakers", quantity: 80, sales: 35, buyingPrice: 56.25, sellingPrice: 82.5 },
        { id: 21, name: "Hat", quantity: 150, sales: 50, buyingPrice: 15, sellingPrice: 22 },
        { id: 22, name: "Socks", quantity: 300, sales: 120, buyingPrice: 3.75, sellingPrice: 5.5 },
        { id: 23, name: "Scarf", quantity: 70, sales: 30, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: 24, name: "Gloves", quantity: 90, sales: 35, buyingPrice: 11.25, sellingPrice: 16.5 },
      ],
    },
    "7915093875142225": {
      id: "7915093875142225",
      name: "Toys",
      products: [
        { id: 25, name: "Action Figure", quantity: 100, sales: 40, buyingPrice: 15, sellingPrice: 22 },
        { id: 26, name: "Doll", quantity: 80, sales: 30, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: 27, name: "Lego Set", quantity: 70, sales: 25, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 28, name: "Puzzle", quantity: 90, sales: 40, buyingPrice: 11.25, sellingPrice: 16.5 },
        { id: 29, name: "Board Game", quantity: 60, sales: 20, buyingPrice: 22.5, sellingPrice: 33 },
        { id: 30, name: "RC Car", quantity: 40, sales: 15, buyingPrice: 56.25, sellingPrice: 82.5 },
        { id: 31, name: "Toy Train", quantity: 50, sales: 18, buyingPrice: 33.75, sellingPrice: 49.5 },
        { id: 32, name: "Animal Figure", quantity: 120, sales: 60, buyingPrice: 15, sellingPrice: 22 },
      ],
    },
    "4658765269223668": {
      id: "4658765269223668",
      name: "Books",
      products: [
        { id: 33, name: "Novel", quantity: 150, sales: 70, buyingPrice: 7.5, sellingPrice: 11 },
        { id: 34, name: "Comic Book", quantity: 100, sales: 50, buyingPrice: 3.75, sellingPrice: 5.5 },
        { id: 35, name: "Cookbook", quantity: 80, sales: 30, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: 36, name: "Travel Book", quantity: 90, sales: 40, buyingPrice: 15, sellingPrice: 22 },
        { id: 37, name: "Textbook", quantity: 60, sales: 20, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 38, name: "Children's Book", quantity: 120, sales: 50, buyingPrice: 11.25, sellingPrice: 16.5 },
        { id: 39, name: "Fantasy Book", quantity: 70, sales: 25, buyingPrice: 22.5, sellingPrice: 33 },
        { id: 40, name: "Science Book", quantity: 50, sales: 18, buyingPrice: 26.25, sellingPrice: 38.5 },
      ],
    },
    "9322970301303615": {
      id: "9322970301303615",
      name: "Furniture",
      products: [
        { id: 41, name: "Chair", quantity: 70, sales: 30, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 42, name: "Table", quantity: 40, sales: 15, buyingPrice: 112.5, sellingPrice: 165 },
        { id: 43, name: "Sofa", quantity: 20, sales: 8, buyingPrice: 600, sellingPrice: 880 },
        { id: 44, name: "Bed", quantity: 25, sales: 10, buyingPrice: 450, sellingPrice: 660 },
        { id: 45, name: "Wardrobe", quantity: 30, sales: 12, buyingPrice: 300, sellingPrice: 440 },
        { id: 46, name: "Bookshelf", quantity: 50, sales: 20, buyingPrice: 90, sellingPrice: 132 },
        { id: 47, name: "Dining Set", quantity: 15, sales: 5, buyingPrice: 750, sellingPrice: 1100 },
        { id: 48, name: "Desk", quantity: 60, sales: 25, buyingPrice: 150, sellingPrice: 220 },
      ],
    },
    "3163825017810984": {
      id: "3163825017810984",
      name: "Appliances",
      products: [
        { id: 49, name: "Washing Machine", quantity: 20, sales: 10, buyingPrice: 375, sellingPrice: 550 },
        { id: 50, name: "Refrigerator", quantity: 15, sales: 8, buyingPrice: 600, sellingPrice: 880 },
      ]
    }
  }
}

if (!localStorage.getItem("inventory")) {
  localStorage.setItem("inventory", JSON.stringify(defaultInventory))
}

const inventory = {
  // Create operations
  createCategory: newCategory => {
    const newInventory = JSON.parse(localStorage.getItem("inventory"))

    if (Object.values(newInventory.categories).map(v => v.name.toLowerCase()).includes(newCategory.toLowerCase())) {
      throw new Error(`Category already exists, choose a different name than ${newCategory}`)
    }

    const newId = Math.random().toString().slice(2)

    newInventory.categories[newId] = {
      id: newId,
      name: newCategory[0].toUpperCase() + newCategory.slice(1),
      products: []
    }

    localStorage.setItem("inventory", JSON.stringify(newInventory))
  },
  addProductToCategory: (categoryId, product) => {
    const newInventory = JSON.parse(localStorage.getItem("inventory"))

    if (newInventory.categories[categoryId].products.map(v => v.name).includes(product.name)) {
      throw new Error(`A product with the name '${product.name}' already exists in this category`)
    }

    newInventory.categories[categoryId].products.push({
      id: Math.random().toString().slice(2),
      ...product
    })

    localStorage.setItem("inventory", JSON.stringify(newInventory))
  },
  // Read operations
  getItems: () => Object.values(JSON.parse(localStorage.getItem("inventory")).categories),
  getProductsForCategory: categoryId => {
    const inventory = JSON.parse(localStorage.getItem("inventory"))

    return inventory.categories[categoryId]?.products || []
  },
  // Update operations
  updateCategoryName: (id, newName) => {
    const newInventory = JSON.parse(localStorage.getItem("inventory"))

    newInventory.categories[id].name = newName

    localStorage.setItem("inventory", JSON.stringify(newInventory))
  },
  // Delete operations
  deleteCategory: id => {
    const newInventory = JSON.parse(localStorage.getItem("inventory"))

    const { [id]: value, ...newCategories } = newInventory.categories

    localStorage.setItem("inventory", JSON.stringify({ categories: newCategories }))
  },
  deleteProduct: (categoryId, productId) => {
    const newInventory = JSON.parse(localStorage.getItem("inventory"))

    newInventory.categories[categoryId].products = newInventory.categories[categoryId].products.filter(v => v.id !== productId)

    localStorage.setItem("inventory", JSON.stringify(newInventory))
  }
}

export default inventory