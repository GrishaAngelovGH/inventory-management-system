const defaultInventory = {
  categories: {
    "8965035081209731": {
      id: "8965035081209731",
      name: "Electronics",
      products: [
        { id: 1, name: "Smartphone", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 50, buyingPrice: 600, sellingPrice: 880 },
        { id: 2, name: "Laptop", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 30, buyingPrice: 900, sellingPrice: 1320 },
        { id: 3, name: "Tablet", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 300, sellingPrice: 440 },
        { id: 4, name: "Smartwatch", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 40, buyingPrice: 150, sellingPrice: 220 },
        { id: 5, name: "Wireless Earbuds", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 70, buyingPrice: 112.5, sellingPrice: 165 },
        { id: 6, name: "Camera", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 25, buyingPrice: 750, sellingPrice: 1100 },
        { id: 7, name: "Bluetooth Speaker", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 80, buyingPrice: 90, sellingPrice: 132 },
        { id: 8, name: "Monitor", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 45, buyingPrice: 225, sellingPrice: 330 },
      ],
    },
    "9434856588755531": {
      id: "9434856588755531",
      name: "Sports Equipment",
      products: [
        { id: 9, name: "Football", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 100, buyingPrice: 22.5, sellingPrice: 33 },
        { id: 10, name: "Basketball", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 80, buyingPrice: 26.25, sellingPrice: 38.5 },
        { id: 11, name: "Tennis Racket", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 52.5, sellingPrice: 77 },
        { id: 12, name: "Baseball Bat", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 50, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 13, name: "Soccer Cleats", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 70, buyingPrice: 67.5, sellingPrice: 99 },
        { id: 14, name: "Yoga Mat", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 90, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: 15, name: "Golf Clubs", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 20, buyingPrice: 225, sellingPrice: 330 },
        { id: 16, name: "Dumbbells", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 60, sellingPrice: 88 },
      ],
    },
    "19699180016919549": {
      id: "19699180016919549",
      name: "Clothing",
      products: [
        { id: 17, name: "T-shirt", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 200, buyingPrice: 11.25, sellingPrice: 16.5 },
        { id: 18, name: "Jeans", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 100, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 19, name: "Jacket", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 90, sellingPrice: 132 },
        { id: 20, name: "Sneakers", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 80, buyingPrice: 56.25, sellingPrice: 82.5 },
        { id: 21, name: "Hat", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 150, buyingPrice: 15, sellingPrice: 22 },
        { id: 22, name: "Socks", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 300, buyingPrice: 3.75, sellingPrice: 5.5 },
        { id: 23, name: "Scarf", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 70, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: 24, name: "Gloves", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 90, buyingPrice: 11.25, sellingPrice: 16.5 },
      ],
    },
    "7915093875142225": {
      id: "7915093875142225",
      name: "Toys",
      products: [
        { id: 25, name: "Action Figure", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 100, buyingPrice: 15, sellingPrice: 22 },
        { id: 26, name: "Doll", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 80, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: 27, name: "Lego Set", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 70, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 28, name: "Puzzle", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 90, buyingPrice: 11.25, sellingPrice: 16.5 },
        { id: 29, name: "Board Game", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 22.5, sellingPrice: 33 },
        { id: 30, name: "RC Car", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 40, buyingPrice: 56.25, sellingPrice: 82.5 },
        { id: 31, name: "Toy Train", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 50, buyingPrice: 33.75, sellingPrice: 49.5 },
        { id: 32, name: "Animal Figure", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 120, buyingPrice: 15, sellingPrice: 22 },
      ],
    },
    "4658765269223668": {
      id: "4658765269223668",
      name: "Books",
      products: [
        { id: 33, name: "Novel", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 150, buyingPrice: 7.5, sellingPrice: 11 },
        { id: 34, name: "Comic Book", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 100, buyingPrice: 3.75, sellingPrice: 5.5 },
        { id: 35, name: "Cookbook", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 80, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: 36, name: "Travel Book", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 90, buyingPrice: 15, sellingPrice: 22 },
        { id: 37, name: "Textbook", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 38, name: "Children's Book", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 120, buyingPrice: 11.25, sellingPrice: 16.5 },
        { id: 39, name: "Fantasy Book", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 70, buyingPrice: 22.5, sellingPrice: 33 },
        { id: 40, name: "Science Book", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 50, buyingPrice: 26.25, sellingPrice: 38.5 },
      ],
    },
    "9322970301303615": {
      id: "9322970301303615",
      name: "Furniture",
      products: [
        { id: 41, name: "Chair", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 70, buyingPrice: 37.5, sellingPrice: 55 },
        { id: 42, name: "Table", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 40, buyingPrice: 112.5, sellingPrice: 165 },
        { id: 43, name: "Sofa", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 20, buyingPrice: 600, sellingPrice: 880 },
        { id: 44, name: "Bed", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 25, buyingPrice: 450, sellingPrice: 660 },
        { id: 45, name: "Wardrobe", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 30, buyingPrice: 300, sellingPrice: 440 },
        { id: 46, name: "Bookshelf", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 50, buyingPrice: 90, sellingPrice: 132 },
        { id: 47, name: "Dining Set", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 15, buyingPrice: 750, sellingPrice: 1100 },
        { id: 48, name: "Desk", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 150, sellingPrice: 220 },
      ],
    },
    "3163825017810984": {
      id: "3163825017810984",
      name: "Appliances",
      products: [
        { id: 49, name: "Washing Machine", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 20, buyingPrice: 375, sellingPrice: 550 },
        { id: 50, name: "Refrigerator", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 15, buyingPrice: 600, sellingPrice: 880 },
      ]
    }
  },
  sales: {
    1: [
      { quantity: 20, date: new Date("2024-09-21T12:00:00.000Z") }
    ],
    2: [
      { quantity: 10, date: new Date("2024-09-21T12:00:00.000Z") }
    ],
    3: [
      { quantity: 25, date: new Date("2024-09-22T12:00:00.000Z") }
    ],
    4: [
      { quantity: 15, date: new Date("2024-09-22T12:00:00.000Z") }
    ],
    5: [
      { quantity: 35, date: new Date("2024-09-22T12:00:00.000Z") }
    ],
    6: [
      { quantity: 8, date: new Date("2024-09-22T12:00:00.000Z") }
    ],
    7: [
      { quantity: 40, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    8: [
      { quantity: 18, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    9: [
      { quantity: 40, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    10: [
      { quantity: 30, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    11: [
      { quantity: 25, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    12: [
      { quantity: 20, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    13: [
      { quantity: 18, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    14: [
      { quantity: 35, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    15: [
      { quantity: 10, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    16: [
      { quantity: 22, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    17: [
      { quantity: 90, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    18: [
      { quantity: 40, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    19: [
      { quantity: 20, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    20: [
      { quantity: 35, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    21: [
      { quantity: 50, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    22: [
      { quantity: 120, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    23: [
      { quantity: 30, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    24: [
      { quantity: 35, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    25: [
      { quantity: 40, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    26: [
      { quantity: 30, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    27: [
      { quantity: 25, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    28: [
      { quantity: 40, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    29: [
      { quantity: 20, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    30: [
      { quantity: 15, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    31: [
      { quantity: 18, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    32: [
      { quantity: 60, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    33: [
      { quantity: 70, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    34: [
      { quantity: 50, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    35: [
      { quantity: 30, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    36: [
      { quantity: 40, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    37: [
      { quantity: 20, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    38: [
      { quantity: 50, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    39: [
      { quantity: 25, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    40: [
      { quantity: 18, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    41: [
      { quantity: 30, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    42: [
      { quantity: 15, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    43: [
      { quantity: 8, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    44: [
      { quantity: 10, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    45: [
      { quantity: 12, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    46: [
      { quantity: 20, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    47: [
      { quantity: 5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    48: [
      { quantity: 25, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    49: [
      { quantity: 10, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    50: [
      { quantity: 8, date: new Date("2024-09-24T12:00:00.000Z") }
    ]
  }
}

export default defaultInventory