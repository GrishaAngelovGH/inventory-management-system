import React, { useState } from "react"

const Notification = ({ children }) => {
  const [message, setMessage] = useState("")
  const [show, setShow] = useState(false)
  const [hasError, setHasError] = useState(false)

  const showNotification = (message, isError = false) => {
    setMessage(message)
    setShow(true)
    setHasError(isError)

    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { showNotification })
    }

    return child
  })

  const successClass = 'bg-green-200 border-2 border-green-600 text-green-700'
  const errorClass = 'bg-red-200 border-2 border-red-600 text-red-700'

  return (
    <div>
      <div className={`w-[450px] h-[100px] p-5 ${hasError ? errorClass : successClass} rounded-md fixed top-[1%] right-[1%] z-10 flex gap-2 justify-center items-center duration-[2000ms] delay-500 ${show ? 'opacity-1 translate-y-0' : 'opacity-0 invisible -translate-y-9'}`}>
        <img src={hasError ? '/error-icon.png' : '/success-icon.png'} />
        <div className="text-2xl">{message}</div>
      </div>

      <div>{childrenWithProps}</div>
    </div>
  )
}

export default Notification