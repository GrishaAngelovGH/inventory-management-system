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
      { id: "6195182506815891", categoryId: "8965035081209731", productId: "1", productName: "Smartphone", quantity: 20, sellingPrice: 880, date: new Date("2024-09-21T12:00:00.000Z"), total: 17600 }
    ],
    "2": [
      { id: "10002733208782111", categoryId: "8965035081209731", productId: "2", productName: "Laptop", quantity: 10, sellingPrice: 1320, date: new Date("2024-09-21T12:00:00.000Z"), total: 13200 }
    ],
    "3": [
      { id: "5770596362303166", categoryId: "8965035081209731", productId: "3", productName: "Tablet", quantity: 25, sellingPrice: 440, date: new Date("2024-09-22T12:00:00.000Z"), total: 11000 }
    ],
    "4": [
      { id: "440857765725033", categoryId: "8965035081209731", productId: "4", productName: "Smartwatch", quantity: 15, sellingPrice: 220, date: new Date("2024-09-22T12:00:00.000Z"), total: 3300 }
    ],
    "5": [
      { id: "8198904600324108", categoryId: "8965035081209731", productId: "5", productName: "Wireless Earbuds", quantity: 35, sellingPrice: 165, date: new Date("2024-09-22T12:00:00.000Z"), total: 5775 }
    ],
    "6": [
      { id: "6151626079123387", categoryId: "8965035081209731", productId: "6", productName: "Camera", quantity: 8, sellingPrice: 1100, date: new Date("2024-09-22T12:00:00.000Z"), total: 8800 }
    ],
    "7": [
      { id: "2583011145001237", categoryId: "8965035081209731", productId: "7", productName: "Bluetooth Speaker", quantity: 40, sellingPrice: 132, date: new Date("2024-09-23T12:00:00.000Z"), total: 5280 }
    ],
    "8": [
      { id: "24991093605245918", categoryId: "8965035081209731", productId: "8", productName: "Monitor", quantity: 18, sellingPrice: 330, date: new Date("2024-09-23T12:00:00.000Z"), total: 5940 }
    ],
    "9": [
      { id: "6213800771089484", categoryId: "9434856588755531", productId: "9", productName: "Football", quantity: 40, sellingPrice: 33, date: new Date("2024-09-23T12:00:00.000Z"), total: 1320 }
    ],
    "10": [
      { id: "9148663630987013", categoryId: "9434856588755531", productId: "10", productName: "Basketball", quantity: 30, sellingPrice: 38.5, date: new Date("2024-09-23T12:00:00.000Z"), total: 1155 }
    ],
    "11": [
      { id: "5336452711975284", categoryId: "9434856588755531", productId: "11", productName: "Tennis Racket", quantity: 25, sellingPrice: 77, date: new Date("2024-09-23T12:00:00.000Z"), total: 1925 }
    ],
    "12": [
      { id: "5405162465597455", categoryId: "9434856588755531", productId: "12", productName: "Baseball Bat", quantity: 20, sellingPrice: 55, date: new Date("2024-09-23T12:00:00.000Z"), total: 1100 }
    ],
    "13": [
      { id: "2055207744101537", categoryId: "9434856588755531", productId: "13", productName: "Soccer Cleats", quantity: 18, sellingPrice: 99, date: new Date("2024-09-23T12:00:00.000Z"), total: 1782 }
    ],
    "14": [
      { id: "7250337634937469", categoryId: "9434856588755531", productId: "14", productName: "Yoga Mat", quantity: 35, sellingPrice: 27.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 962.5 }
    ],
    "15": [
      { id: "8882052220433114", categoryId: "9434856588755531", productId: "15", productName: "Golf Clubs", quantity: 10, sellingPrice: 330, date: new Date("2024-09-24T12:00:00.000Z"), total: 3300 }
    ],
    "16": [
      { id: "6530328978983448", categoryId: "9434856588755531", productId: "16", productName: "Dumbbells", quantity: 22, sellingPrice: 88, date: new Date("2024-09-24T12:00:00.000Z"), total: 1936 }
    ],
    "17": [
      { id: "3868149701923995", categoryId: "19699180016919549", productId: "17", productName: "T-shirt", quantity: 90, sellingPrice: 16.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 1485 }
    ],
    "18": [
      { id: "4641754268654299", categoryId: "19699180016919549", productId: "18", productName: "Jeans", quantity: 40, sellingPrice: 55, date: new Date("2024-09-24T12:00:00.000Z"), total: 2200 }
    ],
    "19": [
      { id: "9262905088019704", categoryId: "19699180016919549", productId: "19", productName: "Jacket", quantity: 20, sellingPrice: 132, date: new Date("2024-09-24T12:00:00.000Z"), total: 2640 }
    ],
    "20": [
      { id: "6178672059536772", categoryId: "19699180016919549", productId: "20", productName: "Sneakers", quantity: 35, sellingPrice: 82.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 2887.5 }
    ],
    "21": [
      { id: "2700981683252117", categoryId: "19699180016919549", productId: "21", productName: "Hat", quantity: 50, sellingPrice: 22, date: new Date("2024-09-24T12:00:00.000Z"), total: 1100 }
    ],
    "22": [
      { id: "3798759187553695", categoryId: "19699180016919549", productId: "22", productName: "Socks", quantity: 120, sellingPrice: 5.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 660 }
    ],
    "23": [
      { id: "9895017617683832", categoryId: "19699180016919549", productId: "23", productName: "Scarf", quantity: 30, sellingPrice: 27.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 825 }
    ],
    "24": [
      { id: "48016882060463284", categoryId: "19699180016919549", productId: "24", productName: "Gloves", quantity: 35, sellingPrice: 16.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 577.5 }
    ],
    "25": [
      { id: "1409731245047765", categoryId: "7915093875142225", productId: "25", productName: "Action Figure", quantity: 40, sellingPrice: 22, date: new Date("2024-09-24T12:00:00.000Z"), total: 880 }
    ],
    "26": [
      { id: "9900638626685685", categoryId: "7915093875142225", productId: "26", productName: "Doll", quantity: 30, sellingPrice: 27.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 825 }
    ],
    "27": [
      { id: "30779487996513244", categoryId: "7915093875142225", productId: "27", productName: "Lego Set", quantity: 25, sellingPrice: 55, date: new Date("2024-09-24T12:00:00.000Z"), total: 1375 }
    ],
    "28": [
      { id: "8360488888436308", categoryId: "7915093875142225", productId: "28", productName: "Puzzle", quantity: 40, sellingPrice: 16.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 660 }
    ],
    "29": [
      { id: "9481359023878708", categoryId: "7915093875142225", productId: "29", productName: "Board Game", quantity: 20, sellingPrice: 33, date: new Date("2024-09-24T12:00:00.000Z"), total: 660 }
    ],
    "30": [
      { id: "7085266272258695", categoryId: "7915093875142225", productId: "30", productName: "RC Car", quantity: 15, sellingPrice: 82.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 1237.5 }
    ],
    "31": [
      { id: "3034412475322885", categoryId: "7915093875142225", productId: "31", productName: "Toy Train", quantity: 18, sellingPrice: 49.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 891 }
    ],
    "32": [
      { id: "5644391551360248", categoryId: "7915093875142225", productId: "32", productName: "Animal Figure", quantity: 60, sellingPrice: 22, date: new Date("2024-09-24T12:00:00.000Z"), total: 1320 }
    ],
    "33": [
      { id: "7966810567929921", categoryId: "4658765269223668", productId: "33", productName: "Novel", quantity: 70, sellingPrice: 11, date: new Date("2024-09-24T12:00:00.000Z"), total: 770 }
    ],
    "34": [
      { id: "6028771111056539", categoryId: "4658765269223668", productId: "34", productName: "Comic Book", quantity: 50, sellingPrice: 5.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 275 }
    ],
    "35": [
      { id: "4830746258202989", categoryId: "4658765269223668", productId: "35", productName: "Cookbook", quantity: 30, sellingPrice: 27.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 825 }
    ],
    "36": [
      { id: "25826738220032697", categoryId: "4658765269223668", productId: "36", productName: "Travel Book", quantity: 40, sellingPrice: 22, date: new Date("2024-09-24T12:00:00.000Z"), total: 880 }
    ],
    "37": [
      { id: "9609279314742545", categoryId: "4658765269223668", productId: "37", productName: "Textbook", quantity: 20, sellingPrice: 55, date: new Date("2024-09-24T12:00:00.000Z"), total: 1100 }
    ],
    "38": [
      { id: "7556753710691451", categoryId: "4658765269223668", productId: "38", productName: "Children's Book", quantity: 50, sellingPrice: 16.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 825 }
    ],
    "39": [
      { id: "7050492172159029", categoryId: "4658765269223668", productId: "39", productName: "Fantasy Book", quantity: 25, sellingPrice: 33, date: new Date("2024-09-24T12:00:00.000Z"), total: 825 }
    ],
    "40": [
      { id: "8196908247924106", categoryId: "4658765269223668", productId: "40", productName: "Science Book", quantity: 18, sellingPrice: 38.5, date: new Date("2024-09-24T12:00:00.000Z"), total: 693 }
    ],
    "41": [
      { id: "2958925405476016", categoryId: "9322970301303615", productId: "41", productName: "Chair", quantity: 30, sellingPrice: 55, date: new Date("2024-09-24T12:00:00.000Z"), total: 1650 }
    ],
    "42": [
      { id: "978962466567928", categoryId: "9322970301303615", productId: "42", productName: "Table", quantity: 15, sellingPrice: 165, date: new Date("2024-09-24T12:00:00.000Z"), total: 2475 }
    ],
    "43": [
      { id: "39033530038351816", categoryId: "9322970301303615", productId: "43", productName: "Sofa", quantity: 8, sellingPrice: 880, date: new Date("2024-09-24T12:00:00.000Z"), total: 7040 }
    ],
    "44": [
      { id: "7662774759133233", categoryId: "9322970301303615", productId: "44", productName: "Bed", quantity: 10, sellingPrice: 660, date: new Date("2024-09-24T12:00:00.000Z"), total: 6600 }
    ],
    "45": [
      { id: "5195647640023291", categoryId: "9322970301303615", productId: "45", productName: "Wardrobe", quantity: 12, sellingPrice: 440, date: new Date("2024-09-24T12:00:00.000Z"), total: 5280 }
    ],
    "46": [
      { id: "9750195409618614", categoryId: "9322970301303615", productId: "46", productName: "Bookshelf", quantity: 20, sellingPrice: 132, date: new Date("2024-09-24T12:00:00.000Z"), total: 2640 }
    ],
    "47": [
      { id: "8071013325950114", categoryId: "9322970301303615", productId: "47", productName: "Dining Set", quantity: 5, sellingPrice: 1100, date: new Date("2024-09-24T12:00:00.000Z"), total: 5500 }
    ],
    "48": [
      { id: "9165197450888776", categoryId: "9322970301303615", productId: "48", productName: "Desk", quantity: 25, sellingPrice: 220, date: new Date("2024-09-24T12:00:00.000Z"), total: 5500 }
    ],
    "49": [
      { id: "5756709237466677", categoryId: "3163825017810984", productId: "49", productName: "Washing Machine", quantity: 10, sellingPrice: 550, date: new Date("2024-09-24T12:00:00.000Z"), total: 5500 }
    ],
    "50": [
      { id: "7812421014557844", categoryId: "3163825017810984", productId: "50", productName: "Refrigerator", quantity: 8, sellingPrice: 880, date: new Date("2024-09-24T12:00:00.000Z"), total: 7040 }
    ]
  }
}

export default defaultInventory