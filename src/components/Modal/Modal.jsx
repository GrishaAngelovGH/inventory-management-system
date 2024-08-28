const Modal = ({ title, children, onConfirm, onCancel }) => (
  <div className="bg-opacity-80 bg-black fixed top-0 left-0 w-full h-full flex justify-center"    >
    <div className="w-[90%] md:w-[600px] h-[270px] relative top-4">
      <div className="text-center text-xl bg-gray-200 rounded-t-md">{title}</div>

      <div className="bg-white max-h-[200px] overflow-auto">{children}</div>

      <div className="bg-white border-t border-slate-400 p-2 flex gap-4 rounded-b-md">
        <button className="bg-blue-500 text-white rounded-md min-w-[100px]" onClick={onConfirm}>Confirm</button>
        <button className="bg-gray-500 text-white rounded-md min-w-[100px]" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  </div>
)

export default Modal