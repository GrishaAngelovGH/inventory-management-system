import defaultInventory from "./defaultInventory"

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
  getAllProducts: () => {
    const inventory = JSON.parse(localStorage.getItem("inventory"))

    return Object.values(inventory.categories).map(v => v.products).flat()
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