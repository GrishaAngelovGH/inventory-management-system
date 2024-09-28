const defaultInventory = {
  categories: {
    "8965035081209731": {
      id: "8965035081209731",
      name: "Electronics",
      products: [
        { id: "1", categoryId: "8965035081209731", name: "Smartphone", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 50, buyingPrice: 600, sellingPrice: 880 },
        { id: "2", categoryId: "8965035081209731", name: "Laptop", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 30, buyingPrice: 900, sellingPrice: 1320 },
        { id: "3", categoryId: "8965035081209731", name: "Tablet", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 300, sellingPrice: 440 },
        { id: "4", categoryId: "8965035081209731", name: "Smartwatch", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 40, buyingPrice: 150, sellingPrice: 220 },
        { id: "5", categoryId: "8965035081209731", name: "Wireless Earbuds", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 70, buyingPrice: 112.5, sellingPrice: 165 },
        { id: "6", categoryId: "8965035081209731", name: "Camera", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 25, buyingPrice: 750, sellingPrice: 1100 },
        { id: "7", categoryId: "8965035081209731", name: "Bluetooth Speaker", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 80, buyingPrice: 90, sellingPrice: 132 },
        { id: "8", categoryId: "8965035081209731", name: "Monitor", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 45, buyingPrice: 225, sellingPrice: 330 },
      ],
    },
    "9434856588755531": {
      id: "9434856588755531",
      name: "Sports Equipment",
      products: [
        { id: "9", categoryId: "9434856588755531", name: "Football", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 100, buyingPrice: 22.5, sellingPrice: 33 },
        { id: "10", categoryId: "9434856588755531", name: "Basketball", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 80, buyingPrice: 26.25, sellingPrice: 38.5 },
        { id: "11", categoryId: "9434856588755531", name: "Tennis Racket", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 52.5, sellingPrice: 77 },
        { id: "12", categoryId: "9434856588755531", name: "Baseball Bat", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 50, buyingPrice: 37.5, sellingPrice: 55 },
        { id: "13", categoryId: "9434856588755531", name: "Soccer Cleats", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 70, buyingPrice: 67.5, sellingPrice: 99 },
        { id: "14", categoryId: "9434856588755531", name: "Yoga Mat", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 90, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: "15", categoryId: "9434856588755531", name: "Golf Clubs", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 20, buyingPrice: 225, sellingPrice: 330 },
        { id: "16", categoryId: "9434856588755531", name: "Dumbbells", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 60, sellingPrice: 88 },
      ],
    },
    "19699180016919549": {
      id: "19699180016919549",
      name: "Clothing",
      products: [
        { id: "17", categoryId: "19699180016919549", name: "T-shirt", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 200, buyingPrice: 11.25, sellingPrice: 16.5 },
        { id: "18", categoryId: "19699180016919549", name: "Jeans", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 100, buyingPrice: 37.5, sellingPrice: 55 },
        { id: "19", categoryId: "19699180016919549", name: "Jacket", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 90, sellingPrice: 132 },
        { id: "20", categoryId: "19699180016919549", name: "Sneakers", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 80, buyingPrice: 56.25, sellingPrice: 82.5 },
        { id: "21", categoryId: "19699180016919549", name: "Hat", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 150, buyingPrice: 15, sellingPrice: 22 },
        { id: "22", categoryId: "19699180016919549", name: "Socks", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 300, buyingPrice: 3.75, sellingPrice: 5.5 },
        { id: "23", categoryId: "19699180016919549", name: "Scarf", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 70, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: "24", categoryId: "19699180016919549", name: "Gloves", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 90, buyingPrice: 11.25, sellingPrice: 16.5 },
      ],
    },
    "7915093875142225": {
      id: "7915093875142225",
      name: "Toys",
      products: [
        { id: "25", categoryId: "7915093875142225", name: "Action Figure", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 100, buyingPrice: 15, sellingPrice: 22 },
        { id: "26", categoryId: "7915093875142225", name: "Doll", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 80, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: "27", categoryId: "7915093875142225", name: "Lego Set", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 70, buyingPrice: 37.5, sellingPrice: 55 },
        { id: "28", categoryId: "7915093875142225", name: "Puzzle", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 90, buyingPrice: 11.25, sellingPrice: 16.5 },
        { id: "29", categoryId: "7915093875142225", name: "Board Game", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 22.5, sellingPrice: 33 },
        { id: "30", categoryId: "7915093875142225", name: "RC Car", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 40, buyingPrice: 56.25, sellingPrice: 82.5 },
        { id: "31", categoryId: "7915093875142225", name: "Toy Train", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 50, buyingPrice: 33.75, sellingPrice: 49.5 },
        { id: "32", categoryId: "7915093875142225", name: "Animal Figure", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 120, buyingPrice: 15, sellingPrice: 22 },
      ],
    },
    "4658765269223668": {
      id: "4658765269223668",
      name: "Books",
      products: [
        { id: "33", categoryId: "4658765269223668", name: "Novel", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 150, buyingPrice: 7.5, sellingPrice: 11 },
        { id: "34", categoryId: "4658765269223668", name: "Comic Book", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 100, buyingPrice: 3.75, sellingPrice: 5.5 },
        { id: "35", categoryId: "4658765269223668", name: "Cookbook", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 80, buyingPrice: 18.75, sellingPrice: 27.5 },
        { id: "36", categoryId: "4658765269223668", name: "Travel Book", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 90, buyingPrice: 15, sellingPrice: 22 },
        { id: "37", categoryId: "4658765269223668", name: "Textbook", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 37.5, sellingPrice: 55 },
        { id: "38", categoryId: "4658765269223668", name: "Children's Book", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 120, buyingPrice: 11.25, sellingPrice: 16.5 },
        { id: "39", categoryId: "4658765269223668", name: "Fantasy Book", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 70, buyingPrice: 22.5, sellingPrice: 33 },
        { id: "40", categoryId: "4658765269223668", name: "Science Book", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 50, buyingPrice: 26.25, sellingPrice: 38.5 },
      ],
    },
    "9322970301303615": {
      id: "9322970301303615",
      name: "Furniture",
      products: [
        { id: "41", categoryId: "9322970301303615", name: "Chair", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 70, buyingPrice: 37.5, sellingPrice: 55 },
        { id: "42", categoryId: "9322970301303615", name: "Table", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 40, buyingPrice: 112.5, sellingPrice: 165 },
        { id: "43", categoryId: "9322970301303615", name: "Sofa", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 20, buyingPrice: 600, sellingPrice: 880 },
        { id: "44", categoryId: "9322970301303615", name: "Bed", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 25, buyingPrice: 450, sellingPrice: 660 },
        { id: "45", categoryId: "9322970301303615", name: "Wardrobe", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 30, buyingPrice: 300, sellingPrice: 440 },
        { id: "46", categoryId: "9322970301303615", name: "Bookshelf", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 50, buyingPrice: 90, sellingPrice: 132 },
        { id: "47", categoryId: "9322970301303615", name: "Dining Set", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 15, buyingPrice: 750, sellingPrice: 1100 },
        { id: "48", categoryId: "9322970301303615", name: "Desk", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 60, buyingPrice: 150, sellingPrice: 220 },
      ],
    },
    "3163825017810984": {
      id: "3163825017810984",
      name: "Appliances",
      products: [
        { id: "49", categoryId: "3163825017810984", name: "Washing Machine", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 20, buyingPrice: 375, sellingPrice: 550 },
        { id: "50", categoryId: "3163825017810984", name: "Refrigerator", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 15, buyingPrice: 600, sellingPrice: 880 },
      ]
    }
  },
  sales: {
    "1": [
      { quantity: 20, sellingPrice: 880, date: new Date("2024-09-21T12:00:00.000Z") }
    ],
    "2": [
      { quantity: 10, sellingPrice: 1320, date: new Date("2024-09-21T12:00:00.000Z") }
    ],
    "3": [
      { quantity: 25, sellingPrice: 440, date: new Date("2024-09-22T12:00:00.000Z") }
    ],
    "4": [
      { quantity: 15, sellingPrice: 220, date: new Date("2024-09-22T12:00:00.000Z") }
    ],
    "5": [
      { quantity: 35, sellingPrice: 165, date: new Date("2024-09-22T12:00:00.000Z") }
    ],
    "6": [
      { quantity: 8, sellingPrice: 1100, date: new Date("2024-09-22T12:00:00.000Z") }
    ],
    "7": [
      { quantity: 40, sellingPrice: 132, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    "8": [
      { quantity: 18, sellingPrice: 330, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    "9": [
      { quantity: 40, sellingPrice: 33, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    "10": [
      { quantity: 30, sellingPrice: 38.5, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    "11": [
      { quantity: 25, sellingPrice: 77, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    "12": [
      { quantity: 20, sellingPrice: 55, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    "13": [
      { quantity: 18, sellingPrice: 99, date: new Date("2024-09-23T12:00:00.000Z") }
    ],
    "14": [
      { quantity: 35, sellingPrice: 27.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "15": [
      { quantity: 10, sellingPrice: 330, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "16": [
      { quantity: 22, sellingPrice: 88, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "17": [
      { quantity: 90, sellingPrice: 16.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "18": [
      { quantity: 40, sellingPrice: 55, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "19": [
      { quantity: 20, sellingPrice: 132, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "20": [
      { quantity: 35, sellingPrice: 82.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "21": [
      { quantity: 50, sellingPrice: 22, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "22": [
      { quantity: 120, sellingPrice: 5.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "23": [
      { quantity: 30, sellingPrice: 27.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "24": [
      { quantity: 35, sellingPrice: 16.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "25": [
      { quantity: 40, sellingPrice: 22, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "26": [
      { quantity: 30, sellingPrice: 27.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "27": [
      { quantity: 25, sellingPrice: 55, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "28": [
      { quantity: 40, sellingPrice: 16.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "29": [
      { quantity: 20, sellingPrice: 33, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "30": [
      { quantity: 15, sellingPrice: 82.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "31": [
      { quantity: 18, sellingPrice: 49.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "32": [
      { quantity: 60, sellingPrice: 22, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "33": [
      { quantity: 70, sellingPrice: 11, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "34": [
      { quantity: 50, sellingPrice: 5.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "35": [
      { quantity: 30, sellingPrice: 27.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "36": [
      { quantity: 40, sellingPrice: 22, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "37": [
      { quantity: 20, sellingPrice: 55, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "38": [
      { quantity: 50, sellingPrice: 16.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "39": [
      { quantity: 25, sellingPrice: 33, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "40": [
      { quantity: 18, sellingPrice: 38.5, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "41": [
      { quantity: 30, sellingPrice: 55, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "42": [
      { quantity: 15, sellingPrice: 165, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "43": [
      { quantity: 8, sellingPrice: 880, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "44": [
      { quantity: 10, sellingPrice: 660, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "45": [
      { quantity: 12, sellingPrice: 440, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "46": [
      { quantity: 20, sellingPrice: 132, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "47": [
      { quantity: 5, sellingPrice: 1100, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "48": [
      { quantity: 25, sellingPrice: 220, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "49": [
      { quantity: 10, sellingPrice: 550, date: new Date("2024-09-24T12:00:00.000Z") }
    ],
    "50": [
      { quantity: 8, sellingPrice: 880, date: new Date("2024-09-24T12:00:00.000Z") }
    ]
  }
}

export default defaultInventory