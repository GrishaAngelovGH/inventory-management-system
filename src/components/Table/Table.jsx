const Table = ({ currentColumn, columns, children, onColumnClick }) => (
  <div className="bg-white w-fit md:w-full border border-gray-400 rounded-t-md rounded-b-md">
    <div className="bg-gray-200 rounded-t-md flex text-center">
      {
        columns.map(v =>
        (
          <div
            key={v}
            className={`cursor-pointer p-1 w-1/4 ${currentColumn === v ? "font-bold" : "font-normal"}`}
            onClick={() => onColumnClick(v)}
          >
            {v}
          </div>
        ))
      }
    </div>
    {children}
  </div>
)

export default Table