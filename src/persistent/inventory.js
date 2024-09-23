const defaultInventory = {
  categories: {
    "8965035081209731": {
      id: "8965035081209731",
      name: "Electronics",
      products: [
        { id: 1, name: "Smartphone", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 50, sales: 20, buyingPrice: 600, sellingPrice: 880 },
        { id: 2, name: "Laptop", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 30, sales: 10, buyingPrice: 900, sellingPrice: 1320 },
        { id: 3, name: "Tablet", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 60, sales: 25, buyingPrice: 300, sellingPrice: 440 },
        { id: 4, name: "Smartwatch", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 40, sales: 15, buyingPrice: 150, sellingPrice: 220 },
        { id: 5, name: "Wireless Earbuds", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 70, sales: 35, buyingPrice: 112.5, sellingPrice: 165 },
        { id: 6, name: "Camera", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 25, sales: 8, buyingPrice: 750, sellingPrice: 1100 },
        { id: 7, name: "Bluetooth Speaker", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 80, sales: 40, buyingPrice: 90, sellingPrice: 132 },
        { id: 8, name: "Monitor", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 45, sales: 18, buyingPrice: 225, sellingPrice: 330 },
      ],
    },
    "9434856588755531": {
      id: "9434856588755531",
      name: "Sports Equipment",
      products: [
        { id: 9, name: "Football", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 100, sales: 40, buyingPrice: 22.5, sellingPrice: 33 },
        { id: 10, name: "Basketball", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 80, sales: 30, buyingPrice: 26.25, sellingPrice: 38.5 },
        { id: 11, name: "Tennis Racket", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 60, sales: 25, buyingPrice: 52.5, sellingPrice: 77 },
        { id: 12, name: "Baseball Bat", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 50, sales: 20, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 13, name: "Soccer Cleats", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 70, sales: 18, buyingPrice: 67.5, sellingPrice: 99 },
        { id: 14, name: "Yoga Mat", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 90, sales: 35, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: 15, name: "Golf Clubs", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 20, sales: 10, buyingPrice: 225, sellingPrice: 330 },
        { id: 16, name: "Dumbbells", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 60, sales: 22, buyingPrice: 60, sellingPrice: 88 },
      ],
    },
    "19699180016919549": {
      id: "19699180016919549",
      name: "Clothing",
      products: [
        { id: 17, name: "T-shirt", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 200, sales: 90, buyingPrice: 11.25, sellingPrice: 16.5 },
        { id: 18, name: "Jeans", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 100, sales: 40, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 19, name: "Jacket", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 60, sales: 20, buyingPrice: 90, sellingPrice: 132 },
        { id: 20, name: "Sneakers", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 80, sales: 35, buyingPrice: 56.25, sellingPrice: 82.5 },
        { id: 21, name: "Hat", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 150, sales: 50, buyingPrice: 15, sellingPrice: 22 },
        { id: 22, name: "Socks", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 300, sales: 120, buyingPrice: 3.75, sellingPrice: 5.5 },
        { id: 23, name: "Scarf", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 70, sales: 30, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: 24, name: "Gloves", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 90, sales: 35, buyingPrice: 11.25, sellingPrice: 16.5 },
      ],
    },
    "7915093875142225": {
      id: "7915093875142225",
      name: "Toys",
      products: [
        { id: 25, name: "Action Figure", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 100, sales: 40, buyingPrice: 15, sellingPrice: 22 },
        { id: 26, name: "Doll", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 80, sales: 30, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: 27, name: "Lego Set", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 70, sales: 25, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 28, name: "Puzzle", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 90, sales: 40, buyingPrice: 11.25, sellingPrice: 16.5 },
        { id: 29, name: "Board Game", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 60, sales: 20, buyingPrice: 22.5, sellingPrice: 33 },
        { id: 30, name: "RC Car", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 40, sales: 15, buyingPrice: 56.25, sellingPrice: 82.5 },
        { id: 31, name: "Toy Train", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 50, sales: 18, buyingPrice: 33.75, sellingPrice: 49.5 },
        { id: 32, name: "Animal Figure", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 120, sales: 60, buyingPrice: 15, sellingPrice: 22 },
      ],
    },
    "4658765269223668": {
      id: "4658765269223668",
      name: "Books",
      products: [
        { id: 33, name: "Novel", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 150, sales: 70, buyingPrice: 7.5, sellingPrice: 11 },
        { id: 34, name: "Comic Book", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 100, sales: 50, buyingPrice: 3.75, sellingPrice: 5.5 },
        { id: 35, name: "Cookbook", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 80, sales: 30, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: 36, name: "Travel Book", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 90, sales: 40, buyingPrice: 15, sellingPrice: 22 },
        { id: 37, name: "Textbook", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 60, sales: 20, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 38, name: "Children's Book", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 120, sales: 50, buyingPrice: 11.25, sellingPrice: 16.5 },
        { id: 39, name: "Fantasy Book", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 70, sales: 25, buyingPrice: 22.5, sellingPrice: 33 },
        { id: 40, name: "Science Book", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 50, sales: 18, buyingPrice: 26.25, sellingPrice: 38.5 },
      ],
    },
    "9322970301303615": {
      id: "9322970301303615",
      name: "Furniture",
      products: [
        { id: 41, name: "Chair", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 70, sales: 30, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 42, name: "Table", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 40, sales: 15, buyingPrice: 112.5, sellingPrice: 165 },
        { id: 43, name: "Sofa", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 20, sales: 8, buyingPrice: 600, sellingPrice: 880 },
        { id: 44, name: "Bed", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 25, sales: 10, buyingPrice: 450, sellingPrice: 660 },
        { id: 45, name: "Wardrobe", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 30, sales: 12, buyingPrice: 300, sellingPrice: 440 },
        { id: 46, name: "Bookshelf", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 50, sales: 20, buyingPrice: 90, sellingPrice: 132 },
        { id: 47, name: "Dining Set", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 15, sales: 5, buyingPrice: 750, sellingPrice: 1100 },
        { id: 48, name: "Desk", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 60, sales: 25, buyingPrice: 150, sellingPrice: 220 },
      ],
    },
    "3163825017810984": {
      id: "3163825017810984",
      name: "Appliances",
      products: [
        { id: 49, name: "Washing Machine", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 20, sales: 10, buyingPrice: 375, sellingPrice: 550 },
        { id: 50, name: "Refrigerator", creationDate: new Date("2024-09-23T12:00:00").toISOString(), quantity: 15, sales: 8, buyingPrice: 600, sellingPrice: 880 },
      ]
    }
  }
}

if (!localStorage.getItem("inventory")) {
  localStorage.setItem("inventory", JSON.stringify(defaultInventory))
}

const categoryOperations = {
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
  getItems: () => Object.values(JSON.parse(localStorage.getItem("inventory")).categories),
  updateCategoryName: (id, newName) => {
    const newInventory = JSON.parse(localStorage.getItem("inventory"))

    newInventory.categories[id].name = newName

    localStorage.setItem("inventory", JSON.stringify(newInventory))
  },
  deleteCategory: id => {
    const newInventory = JSON.parse(localStorage.getItem("inventory"))

    const { [id]: value, ...newCategories } = newInventory.categories

    localStorage.setItem("inventory", JSON.stringify({ categories: newCategories }))
  }
}

const productOperations = {
  addProductToCategory: (categoryId, product) => {
    const newInventory = JSON.parse(localStorage.getItem("inventory"))

    if (newInventory.categories[categoryId].products.map(v => v.name).includes(product.name)) {
      throw new Error(`A product with the name '${product.name}' already exists in this category`)
    }

    newInventory.categories[categoryId].products.push({
      id: Math.random().toString().slice(2),

      /*
        ISO 8601: "YYYY-MM-DDTHH:mm:ss.sssZ"

        This format includes:
         - the full date (year, month, day)
         - time (hours, minutes, seconds, milliseconds) in Coordinated Universal Time (UTC)
      */
      creationDate: new Date().toISOString(),
      ...product
    })

    localStorage.setItem("inventory", JSON.stringify(newInventory))
  },
  getProductsForCategory: categoryId => {
    const inventory = JSON.parse(localStorage.getItem("inventory"))

    return inventory.categories[categoryId]?.products || []
  },
  updateProduct: (categoryId, newCategoryId, product) => {
    const newInventory = JSON.parse(localStorage.getItem("inventory"))

    if (newCategoryId.length > 0) {
      newInventory.categories[categoryId].products = newInventory.categories[categoryId].products.filter(v => v.id !== product.id)
      newInventory.categories[newCategoryId].products.push(product)
      localStorage.setItem("inventory", JSON.stringify(newInventory))
      return
    }

    const oldProduct = newInventory.categories[categoryId].products.find(v => v.id === product.id)

    Object.assign(oldProduct, product)

    localStorage.setItem("inventory", JSON.stringify(newInventory))
  },
  deleteProduct: (categoryId, productId) => {
    const newInventory = JSON.parse(localStorage.getItem("inventory"))

    newInventory.categories[categoryId].products = newInventory.categories[categoryId].products.filter(v => v.id !== productId)

    localStorage.setItem("inventory", JSON.stringify(newInventory))
  }
}

const inventory = {
  ...categoryOperations,
  ...productOperations
}

export default inventory