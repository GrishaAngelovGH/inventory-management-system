import { useState } from "react"

import SidebarLayout from "components/SidebarLayout"
import Table from "components/Table"

import inventory from "persistent/inventory"

import currencyFormatter from "formatters/currencyFormatter"

const SortableSalesTable = ({ sales }) => {
  const [sortField, setSortField] = useState("")
  const [currentColumn, setCurrentColumn] = useState("")

  const totalSum = sales.reduce((a, b) => a + b.total, 0)

  return (
    <Table
      columns={["Product Name", "Quantity", "Selling Price", "Date", "Total"]}
      currentColumn={currentColumn}
      onColumnClick={v => {
        const newValue = v
          .split(' ')
          .map((v, i) => i === 0 ? v.toLowerCase() : v[0].toUpperCase() + v.slice(1))
          .join("")

        setSortField(newValue)
        setCurrentColumn(v)
      }}
    >
      <div>
        <div data-testid="sales" className="max-h-[350px] overflow-auto">
          {
            sales
              .sort((a, b) => {
                if (a[sortField] > b[sortField]) return 1
                if (a[sortField] < b[sortField]) return -1
                return 0
              })
              .map(v => (
                <div key={v.productName} className={"p-1 flex items-center text-center border-b border-gray-400 last:border-b-0"}>
                  <div className="w-[140px] md:w-1/4">{v.productName}</div>
                  <div className="w-[140px] md:w-1/4">{v.quantity}</div>
                  <div className="w-[140px] md:w-1/4">{currencyFormatter.format(v.sellingPrice)}</div>
                  <div className="w-[140px] md:w-1/4">{new Date(v.date).toLocaleDateString("en-GB")}</div>
                  <div className="w-[140px] md:w-1/4">{currencyFormatter.format(v.total)}</div>
                </div>
              ))
          }
        </div>
        <div className="text-xl bg-blue-200 p-1 text-center">Total Sales: {currencyFormatter.format(totalSum)}</div>
      </div>
    </Table>
  )
}

const ManageSalesPage = () => {
  const sales = inventory.getAllSales()

  return (
    <SidebarLayout>
      <div className="pl-2 flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-2/3">
          <SortableSalesTable sales={sales} />
        </div>
      </div>
    </SidebarLayout>
  )
}

export default ManageSalesPage