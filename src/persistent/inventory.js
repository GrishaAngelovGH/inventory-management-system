const defaultInventory = {
  categories: [
    {
      name: "Electronics",
      products: [
        { id: 1, name: "Smartphone", price: 800, stock: 50, sales: 20 },
        { id: 2, name: "Laptop", price: 1200, stock: 30, sales: 10 },
        { id: 3, name: "Tablet", price: 400, stock: 60, sales: 25 },
        { id: 4, name: "Smartwatch", price: 200, stock: 40, sales: 15 },
        { id: 5, name: "Wireless Earbuds", price: 150, stock: 70, sales: 35 },
        { id: 6, name: "Camera", price: 1000, stock: 25, sales: 8 },
        { id: 7, name: "Bluetooth Speaker", price: 120, stock: 80, sales: 40 },
        { id: 8, name: "Monitor", price: 300, stock: 45, sales: 18 },
      ],
    },
    {
      name: "Sports Equipment",
      products: [
        { id: 9, name: "Football", price: 30, stock: 100, sales: 40 },
        { id: 10, name: "Basketball", price: 35, stock: 80, sales: 30 },
        { id: 11, name: "Tennis Racket", price: 70, stock: 60, sales: 25 },
        { id: 12, name: "Baseball Bat", price: 50, stock: 50, sales: 20 },
        { id: 13, name: "Soccer Cleats", price: 90, stock: 70, sales: 18 },
        { id: 14, name: "Yoga Mat", price: 25, stock: 90, sales: 35 },
        { id: 15, name: "Golf Clubs", price: 300, stock: 20, sales: 10 },
        { id: 16, name: "Dumbbells", price: 80, stock: 60, sales: 22 },
      ],
    },
    {
      name: "Clothing",
      products: [
        { id: 17, name: "T-shirt", price: 15, stock: 200, sales: 90 },
        { id: 18, name: "Jeans", price: 50, stock: 100, sales: 40 },
        { id: 19, name: "Jacket", price: 120, stock: 60, sales: 20 },
        { id: 20, name: "Sneakers", price: 75, stock: 80, sales: 35 },
        { id: 21, name: "Hat", price: 20, stock: 150, sales: 50 },
        { id: 22, name: "Socks", price: 5, stock: 300, sales: 120 },
        { id: 23, name: "Scarf", price: 25, stock: 70, sales: 30 },
        { id: 24, name: "Gloves", price: 15, stock: 90, sales: 35 },
      ],
    },
    {
      name: "Toys",
      products: [
        { id: 25, name: "Action Figure", price: 20, stock: 100, sales: 40 },
        { id: 26, name: "Doll", price: 25, stock: 80, sales: 30 },
        { id: 27, name: "Lego Set", price: 50, stock: 70, sales: 25 },
        { id: 28, name: "Puzzle", price: 15, stock: 90, sales: 40 },
        { id: 29, name: "Board Game", price: 30, stock: 60, sales: 20 },
        { id: 30, name: "RC Car", price: 75, stock: 40, sales: 15 },
        { id: 31, name: "Toy Train", price: 45, stock: 50, sales: 18 },
        { id: 32, name: "Animal Figure", price: 20, stock: 120, sales: 60 },
      ],
    },
    {
      name: "Books",
      products: [
        { id: 33, name: "Novel", price: 10, stock: 150, sales: 70 },
        { id: 34, name: "Comic Book", price: 5, stock: 100, sales: 50 },
        { id: 35, name: "Cookbook", price: 25, stock: 80, sales: 30 },
        { id: 36, name: "Travel Book", price: 20, stock: 90, sales: 40 },
        { id: 37, name: "Textbook", price: 50, stock: 60, sales: 20 },
        { id: 38, name: "Children's Book", price: 15, stock: 120, sales: 50 },
        { id: 39, name: "Fantasy Book", price: 30, stock: 70, sales: 25 },
        { id: 40, name: "Science Book", price: 35, stock: 50, sales: 18 },
      ],
    },
    {
      name: "Furniture",
      products: [
        { id: 41, name: "Chair", price: 50, stock: 70, sales: 30 },
        { id: 42, name: "Table", price: 150, stock: 40, sales: 15 },
        { id: 43, name: "Sofa", price: 800, stock: 20, sales: 8 },
        { id: 44, name: "Bed", price: 600, stock: 25, sales: 10 },
        { id: 45, name: "Wardrobe", price: 400, stock: 30, sales: 12 },
        { id: 46, name: "Bookshelf", price: 120, stock: 50, sales: 20 },
        { id: 47, name: "Dining Set", price: 1000, stock: 15, sales: 5 },
        { id: 48, name: "Desk", price: 200, stock: 60, sales: 25 },
      ],
    },
    {
      name: "Appliances",
      products: [
        { id: 49, name: "Washing Machine", price: 500, stock: 20, sales: 10 },
        { id: 50, name: "Refrigerator", price: 800, stock: 15, sales: 8 },
      ],
    },
  ]
}

if (!localStorage.getItem("inventory")) {
  localStorage.setItem("inventory", JSON.stringify(defaultInventory))
}

const inventory = {
  getItems: () => JSON.parse(localStorage.getItem("inventory")),
  createCategory: newCategory => {
    const newInventory = JSON.parse(localStorage.getItem("inventory"))

    if (newInventory.categories.map(v => v.name).includes(newCategory)) {
      throw new Error(`Category already exists, choose a different name than ${newCategory}`)
    }

    newInventory.categories.push({
      name: newCategory,
      products: []
    })

    localStorage.setItem("inventory", JSON.stringify(newInventory))
  }
}

export default inventory